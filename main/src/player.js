// This file contains all logic for the music player view.

let ctx = {}; // To hold context (elements, state, helpers)

// --- Helper Functions ---
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- UI Update Functions ---
function updatePlaylistItemsUI() {
    document.querySelectorAll('#playlists-container .playlist-list-item').forEach(item => {
        const path = item.dataset.path;
        item.classList.toggle('active', path === ctx.state.activePlaylistPath);
        const addButton = item.querySelector('.playlist-add-btn');
        if (addButton) {
            const isMixedIn = ctx.state.activeQueuePaths.has(path);
            addButton.classList.toggle('mixed-in', isMixedIn);
            addButton.textContent = isMixedIn ? '-' : '+';
            addButton.title = isMixedIn ? 'Remove from queue' : 'Add to queue';
        }
    });
}

function updateRepeatButtonUI() {
    const { repeatBtn, repeatStatusText } = ctx.elements;
    repeatBtn.classList.remove('active-queue', 'active-single');
    let title = 'Repeat Off', statusText = '', iconHTML = `<svg class="player-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`;
    if (ctx.state.repeatState === 1) { repeatBtn.classList.add('active-queue'); title = 'Repeat Queue'; statusText = 'Queue'; }
    else if (ctx.state.repeatState === 2) { repeatBtn.classList.add('active-single'); title = 'Repeat Single'; statusText = 'Single'; iconHTML = `<svg class="player-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path><text x="12" y="14" font-family="Arial, sans-serif" font-size="9" fill="currentColor" text-anchor="middle" dominant-baseline="middle" font-weight="bold">1</text></svg>`; }
    repeatBtn.title = title;
    repeatBtn.innerHTML = iconHTML;
    repeatStatusText.textContent = statusText;
}

function updateProgressBar() {
    const { audioPlayer, progressBar, currentTimeEl } = ctx.elements;
    const { currentTime, duration } = audioPlayer;
    if (duration) {
        progressBar.style.width = `${(currentTime / duration) * 100}%`;
        currentTimeEl.textContent = formatTime(currentTime);
    }
}

function updateVolumeIcon() {
    const { audioPlayer, volumeIcon, muteIcon, volumeSlider } = ctx.elements;
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
    }
    if (!audioPlayer.muted) {
        volumeSlider.value = audioPlayer.volume * 100;
    }
}

// --- Core Player Logic ---
function renderPlaylist() {
    const { playlistContainer } = ctx.elements;
    playlistContainer.innerHTML = '';
    if (ctx.state.activeQueuePaths.size === 0) {
        playlistContainer.innerHTML = `<div class="empty-playlist-message">Select a playlist or add multiple to the queue.</div>`;
        return;
    }
    if (ctx.state.playlist.length === 0) {
        playlistContainer.innerHTML = `<div class="empty-playlist-message">The current queue is empty.</div>`;
        return;
    }
    const filteredPlaylist = ctx.state.playlist.filter(track => track.name.toLowerCase().includes(ctx.state.trackSearchQuery));
    if (filteredPlaylist.length === 0) {
        playlistContainer.innerHTML = `<div class="empty-playlist-message">No tracks match your search.</div>`;
        return;
    }
    filteredPlaylist.forEach((track, displayIndex) => {
        const originalIndexInPlaylist = ctx.state.playlist.findIndex(pTrack => pTrack.path === track.path);
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.dataset.index = originalIndexInPlaylist;
        item.innerHTML = `<span class="track-number">${displayIndex + 1}.</span><span class="playlist-name" title="${track.name}">${track.name.replace(/^\d+\s*-\s*/, '')}</span>`;
        playlistContainer.appendChild(item);
        item.addEventListener('click', () => playTrack(originalIndexInPlaylist));
        if (originalIndexInPlaylist === ctx.state.currentTrackIndex) {
            item.classList.add('active');
        }
    });
}

function playTrack(index) {
    if (index < 0 || index >= ctx.state.playlist.length || !ctx.state.playlist[index].path) return;
    ctx.state.currentTrackIndex = index;
    const track = ctx.state.playlist[index];
    const { audioPlayer, nowPlaying, playIcon, pauseIcon } = ctx.elements;

    audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
    audioPlayer.load();
    const playPromise = audioPlayer.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }).catch(error => {
            console.error("Audio playback failed:", error);
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        });
    }

    nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
    renderPlaylist(); // Re-render to update the highlight correctly
    audioPlayer.volume = ctx.state.lastVolume;
}

function resetPlayerState() {
    const { audioPlayer, nowPlaying, playIcon, pauseIcon, progressBar, currentTimeEl, totalDurationEl } = ctx.elements;
    audioPlayer.src = '';
    nowPlaying.textContent = 'No track selected';
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    totalDurationEl.textContent = '0:00';
    ctx.state.currentTrackIndex = -1;
    renderPlaylist();
}

async function loadQueueTracks(isRefresh = false) {
    const { playlistContainer, tracksHeader, currentPlaylistTrackCount, audioPlayer, nowPlaying, playIcon, pauseIcon } = ctx.elements;

    if (ctx.state.activeQueuePaths.size === 0) {
        resetPlayerState();
        playlistContainer.innerHTML = `<div class="empty-playlist-message">Select a playlist.</div>`;
        tracksHeader.textContent = 'Tracks';
        currentPlaylistTrackCount.textContent = '0 tracks';
        updatePlaylistItemsUI();
        return;
    }

    const wasPlaying = audioPlayer.currentTime > 0 && !audioPlayer.paused;
    let previouslyPlayingTrackPath = null;
    if (wasPlaying && ctx.state.currentTrackIndex >= 0 && ctx.state.currentTrackIndex < ctx.state.playlist.length) {
        previouslyPlayingTrackPath = ctx.state.playlist[ctx.state.currentTrackIndex].path;
    }

    try {
        ctx.helpers.showLoader();
        let combinedTracks = [];
        const results = await Promise.all(Array.from(ctx.state.activeQueuePaths).map(p => window.electronAPI.getPlaylistTracks(p)));
        for (const result of results) combinedTracks.push(...result.tracks);

        ctx.state.playlist = combinedTracks.map((track, index) => ({ ...track, originalIndex: index }));
        ctx.state.originalPlaylist = [...ctx.state.playlist];
        if (ctx.state.isShuffled) {
            ctx.state.playlist.sort(() => Math.random() - 0.5);
        }

        const newIndexOfPlayingTrack = previouslyPlayingTrackPath 
            ? ctx.state.playlist.findIndex(track => track.path === previouslyPlayingTrackPath) 
            : -1;

        let shouldPlayNewTrack = false;

        if (newIndexOfPlayingTrack !== -1) {
            // The currently playing track is still in the new queue.
            ctx.state.currentTrackIndex = newIndexOfPlayingTrack;
        } else {
            // The currently playing track is no longer in the queue, or nothing was playing.
            if (wasPlaying) {
                // A track was playing, but it's been removed from the queue. Play the new first track.
                shouldPlayNewTrack = true;
            } else if (!isRefresh) {
                // Nothing was playing, and this isn't a manual refresh. Auto-play the new selection.
                shouldPlayNewTrack = true;
            }
            ctx.state.currentTrackIndex = ctx.state.playlist.length > 0 ? 0 : -1;
        }

        // Update UI headers
        let headerText;
        if (ctx.state.activeQueuePaths.size === 1) {
            const singlePlaylistPath = ctx.state.activeQueuePaths.values().next().value;
            const playlist = ctx.state.playlists.find(p => p.path === singlePlaylistPath);
            headerText = playlist ? playlist.name : 'Tracks';
        } else {
            headerText = 'Mixed Playlist';
        }
        tracksHeader.textContent = headerText;
        currentPlaylistTrackCount.textContent = `${combinedTracks.length} tracks`;
        
        renderPlaylist();
        updatePlaylistItemsUI();

        if (shouldPlayNewTrack && ctx.state.currentTrackIndex !== -1) {
            playTrack(ctx.state.currentTrackIndex);
        } else if (ctx.state.currentTrackIndex === -1) {
            resetPlayerState();
        } else if (isRefresh && !wasPlaying && ctx.state.playlist.length > 0) {
            // On a manual refresh where nothing was playing, just load the track info.
            const track = ctx.state.playlist[0];
            audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
            nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }

    } catch (error) {
        console.error("Error loading queue tracks:", error);
        ctx.helpers.showNotification('error', 'Load Error', 'Could not load tracks.');
    } finally {
        ctx.helpers.hideLoader();
    }
}

async function loadAndRenderPlaylists() {
    const { favoritePlaylistsGrid, allPlaylistsGrid, favoritePlaylistsContainer, totalPlaylistsCount, totalTracksCount } = ctx.elements;
    try {
        const libraryStats = await window.electronAPI.getLibraryStats();
        totalPlaylistsCount.textContent = `${libraryStats.playlistCount} Playlists`;
        totalTracksCount.textContent = `${libraryStats.trackCount} Tracks`;

        ctx.state.playlists = await window.electronAPI.getPlaylists();
        allPlaylistsGrid.innerHTML = '';
        favoritePlaylistsGrid.innerHTML = '';

        if (ctx.state.playlists.length === 0) {
            allPlaylistsGrid.innerHTML = `<div class="empty-playlist-message">No playlists found. Set your playlists folder in Settings.</div>`;
            return;
        }

        const filteredPlaylists = ctx.state.playlists.filter(p => p.name.toLowerCase().includes(ctx.state.playlistSearchQuery));
        filteredPlaylists.forEach(p => {
            const isFavorite = ctx.state.favoritePlaylists.includes(p.path);
            const targetGrid = isFavorite ? favoritePlaylistsGrid : allPlaylistsGrid;
            const item = document.createElement('div');
            item.className = 'playlist-list-item';
            item.dataset.path = p.path;
            item.innerHTML = `<button class="playlist-add-btn" title="Add to queue">+</button><span class="playlist-name" title="${p.name}">${p.name}</span>`;
            targetGrid.appendChild(item);

            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('playlist-add-btn')) return;
                ctx.state.activePlaylistPath = p.path;
                ctx.state.activeQueuePaths.clear();
                ctx.state.activeQueuePaths.add(p.path);
                loadQueueTracks();
            });

            const addButton = item.querySelector('.playlist-add-btn');
            addButton.addEventListener('click', () => {
                if (ctx.state.activeQueuePaths.has(p.path)) {
                    ctx.state.activeQueuePaths.delete(p.path);
                } else {
                    ctx.state.activeQueuePaths.add(p.path);
                }
                ctx.state.activePlaylistPath = null;
                loadQueueTracks();
            });

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (isFavorite) {
                    ctx.state.favoritePlaylists = ctx.state.favoritePlaylists.filter(path => path !== p.path);
                } else {
                    ctx.state.favoritePlaylists.push(p.path);
                }
                ctx.helpers.saveSettings();
                loadAndRenderPlaylists();
            });
        });

        favoritePlaylistsContainer.classList.toggle('hidden', favoritePlaylistsGrid.children.length === 0);
        updatePlaylistItemsUI();
    } catch (error) {
        console.error("Failed to load playlists:", error);
    }
}

// --- Player Control Functions ---
function playPreviousTrack() {
    if (ctx.state.playlist.length === 0) return;
    ctx.state.currentTrackIndex = (ctx.state.currentTrackIndex - 1 + ctx.state.playlist.length) % ctx.state.playlist.length;
    playTrack(ctx.state.currentTrackIndex);
}

function playNextTrackInQueue() {
    if (ctx.state.playlist.length === 0) return;
    ctx.state.currentTrackIndex = (ctx.state.currentTrackIndex + 1) % ctx.state.playlist.length;
    playTrack(ctx.state.currentTrackIndex);
}

function togglePlayPause() {
    const { audioPlayer, playIcon, pauseIcon } = ctx.elements;
    if (!audioPlayer.src) {
        if (ctx.state.playlist.length > 0) playTrack(0);
        return;
    }
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        audioPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

function toggleShuffle(notify = true) {
    ctx.state.isShuffled = !ctx.state.isShuffled;
    ctx.elements.shuffleBtn.classList.toggle('active', ctx.state.isShuffled);
    if (ctx.state.isShuffled) {
        ctx.state.playlist.sort(() => Math.random() - 0.5);
        if (notify) ctx.helpers.showNotification('info', 'Shuffle On', 'Queue will play in random order.');
    } else {
        ctx.state.playlist = [...ctx.state.originalPlaylist];
        if (notify) ctx.helpers.showNotification('info', 'Shuffle Off', 'Queue will play in original order.');
    }
    renderPlaylist();
}

function toggleRepeat() {
    ctx.state.repeatState = (ctx.state.repeatState + 1) % 3;
    updateRepeatButtonUI();
}

// --- Initialization ---
export function initializePlayer(newCtx) {
    ctx = newCtx;
    const { audioPlayer, playPauseBtn, prevBtn, nextBtn, shuffleBtn, repeatBtn, progressBarContainer, volumeSlider, volumeIconContainer, refreshPlaylistsBtn, refreshTracksBtn } = ctx.elements;

    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    audioPlayer.addEventListener('loadedmetadata', () => ctx.elements.totalDurationEl.textContent = formatTime(audioPlayer.duration));
    audioPlayer.addEventListener('ended', () => {
        if (ctx.state.repeatState === 2) {
            playTrack(ctx.state.currentTrackIndex);
        } else if (ctx.state.repeatState === 1) {
            playNextTrackInQueue();
        }
    });

    prevBtn.addEventListener('click', playPreviousTrack);
    nextBtn.addEventListener('click', playNextTrackInQueue);
    playPauseBtn.addEventListener('click', togglePlayPause);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);

    progressBarContainer.addEventListener('click', (e) => {
        const { duration } = audioPlayer;
        if (duration) {
            const rect = progressBarContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audioPlayer.currentTime = percent * duration;
        }
    });

    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100;
        ctx.state.lastVolume = volume;
        audioPlayer.volume = volume;
        audioPlayer.muted = false;
        updateVolumeIcon();
    });

    volumeIconContainer.addEventListener('click', () => {
        audioPlayer.muted = !audioPlayer.muted;
        updateVolumeIcon();
    });

    refreshPlaylistsBtn.addEventListener('click', loadAndRenderPlaylists);
    refreshTracksBtn.addEventListener('click', () => loadQueueTracks(true));

    updateRepeatButtonUI();
    updateVolumeIcon();
    loadAndRenderPlaylists();
    loadQueueTracks(true);

    return {
        loadAndRenderPlaylists,
        renderPlaylist,
        togglePlayPause,
        playNextTrack: playNextTrackInQueue,
        playPreviousTrack
    };
}