// This file contains all logic for the music player view.

let ctx = {}; // To hold context (elements, state, helpers)

// --- Helper Functions (specific to player) ---
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- UI Update Functions ---
function updatePlaylistItemsUI() {
    document.querySelectorAll('.playlist-list-item').forEach(item => {
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

function updateTotalDuration() {
    ctx.elements.totalDurationEl.textContent = formatTime(ctx.elements.audioPlayer.duration);
}

// --- Core Player Logic ---
function renderPlaylist() {
    const { playlistContainer } = ctx.elements;
    playlistContainer.innerHTML = '';
    if (ctx.state.activeQueuePaths.size === 0) {
        playlistContainer.innerHTML = `<div class="empty-playlist-message">Select a playlist.</div>`;
        return;
    }
    if (ctx.state.playlist.length === 0) {
        playlistContainer.innerHTML = `<div class="empty-playlist-message">This playlist is empty.</div>`;
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
        item.draggable = true;
        item.innerHTML = `<span class="track-number">${displayIndex + 1}.</span><span class="playlist-name" title="${track.name}">${track.name.replace(/^\d+\s*-\s*/, '')}</span>`;
        playlistContainer.appendChild(item);
        item.addEventListener('click', () => playTrack(originalIndexInPlaylist));
    });
}

function playTrack(index) {
    if (index < 0 || index >= ctx.state.playlist.length || !ctx.state.playlist[index].path) return;
    ctx.state.currentTrackIndex = index;
    const track = ctx.state.playlist[index];
    const { audioPlayer, nowPlaying, playIcon, pauseIcon } = ctx.elements;
    audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
    nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.toggle('active', parseInt(item.dataset.index) === index));
    audioPlayer.volume = ctx.state.lastVolume;
    audioPlayer.play();
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
}

async function loadQueueTracks(isRefresh = false) {
    const { playlistContainer, tracksHeader, currentPlaylistTrackCount, audioPlayer, nowPlaying } = ctx.elements;
    if (!isRefresh && ctx.state.activeQueuePaths.size === 0) {
        playlistContainer.innerHTML = `<div class="empty-playlist-message">Select a playlist.</div>`;
        tracksHeader.textContent = 'Tracks';
        currentPlaylistTrackCount.textContent = '0 tracks';
        return;
    }
    try {
        ctx.helpers.showLoader();
        let combinedTracks = [];
        const results = await Promise.all(Array.from(ctx.state.activeQueuePaths).map(p => window.electronAPI.getPlaylistTracks(p)));
        for (const result of results) combinedTracks.push(...result.tracks);
        ctx.state.playlist = combinedTracks.map((track, index) => ({ ...track, originalIndex: index }));
        ctx.state.originalPlaylist = [...ctx.state.playlist];
        if (ctx.state.isShuffled) toggleShuffle(false); // Reshuffle new list without notification
        else renderPlaylist();
        const activePlaylist = ctx.state.playlists.find(p => p.path === ctx.state.activePlaylistPath);
        tracksHeader.textContent = activePlaylist ? activePlaylist.name : 'Mixed Queue';
        currentPlaylistTrackCount.textContent = `${combinedTracks.length} tracks`;
        updatePlaylistItemsUI();
        if (ctx.state.playlist.length > 0 && ctx.state.playlist[0].path) {
            ctx.state.currentTrackIndex = 0;
            const track = ctx.state.playlist[0];
            audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
            nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
            document.querySelectorAll('.playlist-item').forEach(item => item.classList.toggle('active', parseInt(item.dataset.index) === 0));
        } else {
            resetPlayerState();
        }
    } catch (error) {
        console.error("Failed to load queue tracks:", error);
        ctx.helpers.showNotification('error', 'Track Error', 'Could not load tracks.');
    } finally {
        ctx.helpers.hideLoader();
    }
}

async function loadAndRenderPlaylists() {
    const { allPlaylistsGrid, favoritePlaylistsGrid, totalPlaylistsCount, totalTracksCount, favoritePlaylistsContainer, tracksHeader, currentPlaylistTrackCount } = ctx.elements;
    try {
        ctx.helpers.showLoader();
        const [allPlaylists, stats] = await Promise.all([window.electronAPI.getPlaylists(), window.electronAPI.getLibraryStats()]);
        ctx.state.playlists = allPlaylists;
        totalPlaylistsCount.textContent = `${stats.playlistCount} Playlists`;
        totalTracksCount.textContent = `${stats.trackCount} Tracks`;
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
            item.innerHTML = `<button class="playlist-add-btn" title="Add to current queue">+</button><span class="playlist-name" title="${p.name}">${p.name}</span>`;
            targetGrid.appendChild(item);
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('playlist-add-btn')) return;
                ctx.state.activePlaylistPath = p.path;
                ctx.state.activeQueuePaths.clear();
                ctx.state.activeQueuePaths.add(p.path);
                loadQueueTracks();
            });
            item.querySelector('.playlist-add-btn').addEventListener('click', () => {
                const path = p.path;
                if (ctx.state.activeQueuePaths.has(path)) {
                    if (ctx.state.activeQueuePaths.size === 1) {
                        ctx.state.activeQueuePaths.clear();
                        ctx.state.activePlaylistPath = null;
                        ctx.state.playlist = [];
                        ctx.state.originalPlaylist = [];
                        renderPlaylist();
                        tracksHeader.textContent = 'Tracks';
                        currentPlaylistTrackCount.textContent = '0 tracks';
                        updatePlaylistItemsUI();
                        resetPlayerState();
                        return;
                    }
                    ctx.state.activeQueuePaths.delete(path);
                    if (ctx.state.activePlaylistPath === path) {
                        ctx.state.activePlaylistPath = ctx.state.activeQueuePaths.values().next().value;
                    }
                } else {
                    ctx.state.activeQueuePaths.add(path);
                }
                loadQueueTracks(true);
            });
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (isFavorite) ctx.state.favoritePlaylists = ctx.state.favoritePlaylists.filter(path => path !== p.path);
                else ctx.state.favoritePlaylists.push(path);
                ctx.helpers.saveSettings();
                loadAndRenderPlaylists();
            });
        });
        favoritePlaylistsContainer.classList.toggle('hidden', favoritePlaylistsGrid.children.length === 0);
        updatePlaylistItemsUI();
    } catch (error) {
        console.error("Failed to load playlists:", error);
        ctx.helpers.showNotification('error', 'Playlist Error', 'Could not load playlists.');
    } finally {
        ctx.helpers.hideLoader();
    }
}

// --- Player Controls ---
function togglePlayPause() {
    const { audioPlayer, playIcon, pauseIcon } = ctx.elements;
    if (!audioPlayer.src) return;
    if (audioPlayer.paused) audioPlayer.play();
    else audioPlayer.pause();
    playIcon.classList.toggle('hidden', !audioPlayer.paused);
    pauseIcon.classList.toggle('hidden', audioPlayer.paused);
}

function playNextTrack() {
    if (ctx.state.playlist.length === 0) return;
    if (ctx.state.repeatState === 2) { playTrack(ctx.state.currentTrackIndex); return; }
    let nextIndex = ctx.state.currentTrackIndex + 1;
    if (nextIndex >= ctx.state.playlist.length) {
        if (ctx.state.repeatState === 1) nextIndex = 0;
        else { resetPlayerState(); return; }
    }
    playTrack(nextIndex);
}

function playPreviousTrack() {
    if (ctx.state.playlist.length === 0) return;
    if (ctx.elements.audioPlayer.currentTime > 3) { playTrack(ctx.state.currentTrackIndex); return; }
    let prevIndex = ctx.state.currentTrackIndex - 1;
    if (prevIndex < 0) {
        if (ctx.state.repeatState === 1) prevIndex = ctx.state.playlist.length - 1;
        else { playTrack(ctx.state.currentTrackIndex); return; }
    }
    playTrack(prevIndex);
}

function toggleShuffle(notify = true) {
    ctx.state.isShuffled = !ctx.state.isShuffled;
    ctx.elements.shuffleBtn.classList.toggle('active', ctx.state.isShuffled);
    if (notify) ctx.helpers.showNotification('info', 'Shuffle', ctx.state.isShuffled ? 'Shuffle is ON' : 'Shuffle is OFF');
    if (ctx.state.isShuffled) {
        const currentTrack = ctx.state.playlist[ctx.state.currentTrackIndex];
        let restOfPlaylist = ctx.state.playlist.filter((_, index) => index !== ctx.state.currentTrackIndex);
        for (let i = restOfPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [restOfPlaylist[i], restOfPlaylist[j]] = [restOfPlaylist[j], restOfPlaylist[i]];
        }
        ctx.state.playlist = [currentTrack, ...restOfPlaylist];
        ctx.state.currentTrackIndex = 0;
    } else {
        const currentTrackPath = ctx.state.playlist[ctx.state.currentTrackIndex]?.path;
        ctx.state.playlist = [...ctx.state.originalPlaylist];
        ctx.state.currentTrackIndex = ctx.state.playlist.findIndex(track => track.path === currentTrackPath);
        if (ctx.state.currentTrackIndex === -1 && ctx.state.playlist.length > 0) ctx.state.currentTrackIndex = 0;
    }
    renderPlaylist();
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.toggle('active', parseInt(item.dataset.index) === ctx.state.currentTrackIndex));
}

function toggleRepeat() {
    ctx.state.repeatState = (ctx.state.repeatState + 1) % 3;
    updateRepeatButtonUI();
}

function seek(e) {
    const { audioPlayer, progressBarContainer } = ctx.elements;
    const duration = audioPlayer.duration;
    if (duration) audioPlayer.currentTime = (e.offsetX / progressBarContainer.clientWidth) * duration;
}

// --- Drag and Drop for Track Reordering ---
function setupDragAndDrop() {
    const { playlistContainer } = ctx.elements;
    playlistContainer.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('playlist-item')) ctx.state.draggedTrackIndex = parseInt(e.target.dataset.index, 10);
    });
    playlistContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        const target = e.target.closest('.playlist-item');
        if (target) {
            document.querySelectorAll('.playlist-item.drag-over').forEach(el => el.classList.remove('drag-over'));
            target.classList.add('drag-over');
        }
    });
    playlistContainer.addEventListener('dragleave', (e) => {
        const target = e.target.closest('.playlist-item');
        if (target) target.classList.remove('drag-over');
    });
    playlistContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        document.querySelectorAll('.playlist-item.drag-over').forEach(el => el.classList.remove('drag-over'));
        const target = e.target.closest('.playlist-item');
        if (target && ctx.state.draggedTrackIndex !== null) {
            const droppedOnIndex = parseInt(target.dataset.index, 10);
            if (ctx.state.draggedTrackIndex !== droppedOnIndex) {
                const currentlyPlayingTrack = ctx.state.playlist[ctx.state.currentTrackIndex];
                const [draggedItem] = ctx.state.playlist.splice(ctx.state.draggedTrackIndex, 1);
                ctx.state.playlist.splice(droppedOnIndex, 0, draggedItem);
                if (!ctx.state.isShuffled) {
                    const [originalDraggedItem] = ctx.state.originalPlaylist.splice(ctx.state.draggedTrackIndex, 1);
                    ctx.state.originalPlaylist.splice(droppedOnIndex, 0, originalDraggedItem);
                }
                ctx.state.currentTrackIndex = ctx.state.playlist.findIndex(track => track.path === currentlyPlayingTrack.path);
                renderPlaylist();
                document.querySelectorAll('.playlist-item').forEach(item => item.classList.toggle('active', parseInt(item.dataset.index) === ctx.state.currentTrackIndex));
            }
        }
        ctx.state.draggedTrackIndex = null;
    });
}

// --- INITIALIZATION ---
export function initializePlayer(context) {
    ctx = context;
    if (ctx.state.isPlayerInitialized) {
        loadAndRenderPlaylists();
        return { loadAndRenderPlaylists, togglePlayPause, playNextTrack, playPreviousTrack, renderPlaylist };
    }

    const { audioPlayer, volumeSlider, volumeIconContainer, muteIcon, volumeIcon, progressBarContainer, playPauseBtn, prevBtn, nextBtn, shuffleBtn, repeatBtn, refreshPlaylistsBtn, refreshTracksBtn } = ctx.elements;
    
    audioPlayer.volume = volumeSlider.value / 100;
    ctx.state.lastVolume = audioPlayer.volume;

    volumeSlider.addEventListener('input', () => {
        const newVolume = volumeSlider.value / 100;
        audioPlayer.volume = newVolume;
        audioPlayer.muted = newVolume === 0;
        muteIcon.classList.toggle('hidden', !audioPlayer.muted);
        volumeIcon.classList.toggle('hidden', audioPlayer.muted);
        if (!audioPlayer.muted) ctx.state.lastVolume = newVolume;
    });
    volumeIconContainer.addEventListener('click', () => {
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            const restoreVolume = ctx.state.lastVolume > 0 ? ctx.state.lastVolume : 1.0;
            audioPlayer.volume = restoreVolume;
            volumeSlider.value = restoreVolume * 100;
        } else {
            ctx.state.lastVolume = audioPlayer.volume;
            audioPlayer.muted = true;
            volumeSlider.value = 0;
        }
        muteIcon.classList.toggle('hidden', !audioPlayer.muted);
        volumeIcon.classList.toggle('hidden', audioPlayer.muted);
    });

    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    audioPlayer.addEventListener('loadedmetadata', updateTotalDuration);
    audioPlayer.addEventListener('ended', playNextTrack);
    progressBarContainer.addEventListener('click', seek);
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPreviousTrack);
    nextBtn.addEventListener('click', playNextTrack);
    shuffleBtn.addEventListener('click', () => toggleShuffle(true));
    repeatBtn.addEventListener('click', toggleRepeat);
    refreshPlaylistsBtn.addEventListener('click', loadAndRenderPlaylists);
    refreshTracksBtn.addEventListener('click', () => loadQueueTracks(true));
    
    setupDragAndDrop();
    updateRepeatButtonUI();
    ctx.state.isPlayerInitialized = true;
    loadAndRenderPlaylists();

    // Expose functions needed by other modules
    return { loadAndRenderPlaylists, togglePlayPause, playNextTrack, playPreviousTrack, renderPlaylist };
}