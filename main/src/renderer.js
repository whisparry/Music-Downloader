import { themeNames, themeColors } from './themes.js';

window.addEventListener('DOMContentLoaded', () => {
    // --- Element References ---
    const root = document.documentElement;
    const body = document.body;
    const closeBtn = document.getElementById('close-btn');
    const homeBtn = document.getElementById('home-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const advancedSettingsBtn = document.getElementById('advanced-settings-btn');
    const playerBtn = document.getElementById('player-btn');
    const playlistManagementBtn = document.getElementById('playlist-management-btn');
    const consoleBtn = document.getElementById('console-btn');
    const statsBtn = document.getElementById('stats-btn');
    const helpBtn = document.getElementById('help-btn');
    const createPlaylistBtn = document.getElementById('create-playlist-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const repeatStatusText = document.getElementById('repeat-status-text');
    const refreshPlaylistsBtn = document.getElementById('refresh-playlists-btn');
    const refreshTracksBtn = document.getElementById('refresh-tracks-btn');

    // --- View References ---
    const homeView = document.getElementById('home-view');
    const settingsView = document.getElementById('settings-view');
    const advancedSettingsView = document.getElementById('advanced-settings-view');
    const playerView = document.getElementById('player-view');
    const playlistManagementView = document.getElementById('playlist-management-view');
    const consoleView = document.getElementById('console-view');
    const statsView = document.getElementById('stats-view');
    const helpView = document.getElementById('help-view');

    const downloadBtn = document.getElementById('download-btn');
    const linksInput = document.getElementById('links-input');
    const consoleOutput = document.getElementById('console-output');
    const cancelBtn = document.getElementById('cancel-btn');
    const bigCancelBtn = document.getElementById('big-cancel-btn');
    const loadingOverlay = document.getElementById('loading-overlay');
    const dropZone = document.getElementById('drop-zone');
    
    // Update elements
    const updateNotification = document.getElementById('update-notification');
    const updateMessage = document.getElementById('update-message');
    const restartBtn = document.getElementById('restart-btn');

    // Settings elements
    const themeGridContainer = document.getElementById('theme-grid');
    const favoriteThemeGrid = document.getElementById('favorite-theme-grid');
    const favoritesContainer = document.getElementById('favorites-container');
    const fileExtensionInput = document.getElementById('fileExtension');
    const downloadThreadsInput = document.getElementById('downloadThreads');
    const clientIdInput = document.getElementById('clientId');
    const clientSecretInput = document.getElementById('clientSecret');
    const toggleSecretBtn = document.getElementById('toggle-secret-btn');
    const downloadsPathInput = document.getElementById('downloadsPath');
    const changePathBtn = document.getElementById('change-path-btn');
    const playlistsPathInput = document.getElementById('playlistsPath');
    const changePlaylistsPathBtn = document.getElementById('change-playlists-path-btn');
    
    // Player elements
    const tracksHeader = document.getElementById('tracks-header');
    const playlistContainer = document.getElementById('playlist-container');
    const audioPlayer = document.getElementById('audio-player');
    const nowPlaying = document.getElementById('now-playing');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIconContainer = document.getElementById('volume-icon-container');
    const volumeIcon = document.getElementById('volume-icon');
    const muteIcon = document.getElementById('mute-icon');
    const playlistsContainer = document.getElementById('playlists-container');
    const favoritePlaylistsContainer = document.getElementById('favorite-playlists-container');
    const favoritePlaylistsGrid = document.getElementById('favorite-playlists-grid');
    const allPlaylistsGrid = document.getElementById('all-playlists-grid');
    const progressBar = document.getElementById('progress-bar');
    const progressBarContainer = document.getElementById('progress-bar-container');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    const totalPlaylistsCount = document.getElementById('total-playlists-count');
    const totalTracksCount = document.getElementById('total-tracks-count');
    const playlistSearchInputPlaylists = document.getElementById('playlist-search-input-playlists');
    const currentPlaylistTrackCount = document.getElementById('current-playlist-track-count');

    // Playlist Management elements
    const pmPlaylistsContainer = document.getElementById('pm-playlists-container');
    const pmFavoritePlaylistsContainer = document.getElementById('pm-favorite-playlists-container');
    const pmFavoritePlaylistsGrid = document.getElementById('pm-favorite-playlists-grid');
    const pmAllPlaylistsGrid = document.getElementById('pm-all-playlists-grid');
    const pmTracksContainer = document.getElementById('pm-tracks-container');
    const pmTracksHeader = document.getElementById('pm-tracks-header');
    const pmPlaylistSearchInput = document.getElementById('pm-playlist-search-input');
    const pmTrackSearchInput = document.getElementById('pm-track-search-input');
    const createNewPlaylistBtnPm = document.getElementById('create-new-playlist-btn-pm');
    const moveTrackModal = document.getElementById('move-track-modal');
    const moveTrackNameEl = document.getElementById('move-track-name');
    const moveTrackDestinationSelect = document.getElementById('move-track-destination-select');
    const moveTrackConfirmBtn = document.getElementById('move-track-confirm-btn');
    const moveTrackCancelBtn = document.getElementById('move-track-cancel-btn');
    const modalCloseBtn = document.querySelector('.modal-close-btn');

    // Stats elements
    const totalSongsStat = document.getElementById('total-songs-stat');
    const playlistsCreatedStat = document.getElementById('playlists-created-stat');
    const downloadsInitiatedStat = document.getElementById('downloads-initiated-stat');
    const songsFailedStat = document.getElementById('songs-failed-stat');
    const linksProcessedStat = document.getElementById('links-processed-stat');
    const spotifyLinksStat = document.getElementById('spotify-links-stat');
    const youtubeLinksStat = document.getElementById('youtube-links-stat');
    const successRateStat = document.getElementById('success-rate-stat');
    const resetStatsBtn = document.getElementById('reset-stats-btn');

    // Category elements
    const configCategoryHeader = document.getElementById('config-category-header');
    const themesCategoryHeader = document.getElementById('themes-category-header');
    const animationsCategoryHeader = document.getElementById('animations-category-header');

    // Animation Settings Elements
    const tabSpeedSlider = document.getElementById('tab-speed-slider');
    const tabSpeedValue = document.getElementById('tab-speed-value');
    const dropdownSpeedSlider = document.getElementById('dropdown-speed-slider');
    const dropdownSpeedValue = document.getElementById('dropdown-speed-value');
    const themeFadeSlider = document.getElementById('theme-fade-slider');
    const themeFadeValue = document.getElementById('theme-fade-value');
    const autoCreatePlaylistInput = document.getElementById('autoCreatePlaylist');
    const hideRefreshButtonsInput = document.getElementById('hideRefreshButtons');
    const hidePlaylistCountsInput = document.getElementById('hidePlaylistCounts');
    const hideTrackNumbersInput = document.getElementById('hideTrackNumbers');
    const normalizeVolumeInput = document.getElementById('normalizeVolume');
    const hideSearchBarsInput = document.getElementById('hideSearchBars');
    const updateYtdlpBtn = document.getElementById('update-ytdlp-btn');
    const clearCacheBtn = document.getElementById('clear-cache-btn');
    const advancedActionStatus = document.getElementById('advanced-action-status');

    // Help elements
    const spotifyLink = document.getElementById('spotify-link');

    // --- STATE VARIABLES (Centralized) ---
    let currentThemeName = 'dark';
    let favoriteThemes = [];
    let favoritePlaylists = [];
    let playlist = [];
    let originalPlaylist = []; // To store the unshuffled order
    let isShuffled = false; // To track shuffle state
    let repeatState = 0; // 0: off, 1: repeat queue, 2: repeat single
    let currentTrackIndex = -1;
    let playlists = [];
    let activePlaylistPath = null;
    let activeQueuePaths = new Set(); // NEW: Replaces mixedPlaylistPaths for better state management
    let isPlayerInitialized = false;
    let isPmInitialized = false;
    let pmSelectedPlaylistPath = null;
    let trackToMove = null; // { path: '...', name: '...' }
    let draggedTrackIndex = null;
    let trackSearchQuery = '';
    let playlistSearchQuery = '';
    let lastVolume = 1; // For mute/unmute functionality

    const playlistSearchInput = document.getElementById('playlist-search-input');
    const playlistSearchBtn = document.getElementById('playlist-search-btn');

    if (playlistSearchInput && playlistSearchBtn) {
        playlistSearchInput.addEventListener('input', () => {
            trackSearchQuery = playlistSearchInput.value.trim().toLowerCase();
            renderPlaylist();
        });
        playlistSearchBtn.addEventListener('click', () => {
            trackSearchQuery = playlistSearchInput.value.trim().toLowerCase();
            renderPlaylist();
        });
    }

    pmPlaylistSearchInput.addEventListener('input', () => {
        playlistSearchQuery = pmPlaylistSearchInput.value.trim().toLowerCase();
        playlistSearchInputPlaylists.value = pmPlaylistSearchInput.value; // Sync inputs
        pmRenderPlaylists();
    });

    playlistSearchInputPlaylists.addEventListener('input', () => {
        playlistSearchQuery = playlistSearchInputPlaylists.value.trim().toLowerCase();
        pmPlaylistSearchInput.value = playlistSearchInputPlaylists.value; // Sync inputs
        loadAndRenderPlaylists();
    });

    // --- Clear Input Button Logic ---
    function initializeClearButtons() {
        document.querySelectorAll('.input-container').forEach(container => {
            const input = container.querySelector('input, textarea');
            const clearBtn = container.querySelector('.clear-btn');

            if (input && clearBtn) {
                const toggleClearButton = () => {
                    clearBtn.classList.toggle('hidden', input.value.length === 0);
                };

                input.addEventListener('input', toggleClearButton);
                clearBtn.addEventListener('click', () => {
                    input.value = '';
                    input.focus();
                    // Manually trigger an input event so other listeners update
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                });

                // Initial check
                toggleClearButton();
            }
        });
    }
    initializeClearButtons();

    // --- Loader Functions ---
    function showLoader() {
        loadingOverlay.classList.remove('hidden');
    }

    function hideLoader() {
        loadingOverlay.classList.add('hidden');
    }

    // --- Title Bar Logic ---
    if (closeBtn) {
        closeBtn.addEventListener('click', () => window.electronAPI.closeApp());
    }

    // --- Settings Logic ---
    changePathBtn.addEventListener('click', async () => {
        const newPath = await window.electronAPI.openFolderDialog();
        if (newPath) {
            downloadsPathInput.value = newPath;
            saveSettings();
        }
    });

    changePlaylistsPathBtn.addEventListener('click', async () => {
        const newPath = await window.electronAPI.openFolderDialog();
        if (newPath) {
            playlistsPathInput.value = newPath;
            saveSettings();
            if (isPlayerInitialized) {
                loadAndRenderPlaylists();
            }
        }
    });

    toggleSecretBtn.addEventListener('click', () => {
        const isPassword = clientSecretInput.type === 'password';
        clientSecretInput.type = isPassword ? 'text' : 'password';
        toggleSecretBtn.textContent = isPassword ? 'Hide' : 'Show';
    });

    // --- Dynamic Theme Logic ---
    function applyTheme(themeName) {
        const theme = themeColors[themeName];
        if (!theme) return;
        for (const [key, value] of Object.entries(theme)) {
            root.style.setProperty(key, value);
        }
        currentThemeName = themeName;
        document.querySelectorAll('.theme-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeName);
        });
    }
    
    function populateThemeGrid() {
        themeGridContainer.innerHTML = '';
        favoriteThemeGrid.innerHTML = '';
    
        const sortedThemes = Object.entries(themeNames).sort(([, a], [, b]) => a.localeCompare(b));
    
        for (const [themeId, themeDisplayName] of sortedThemes) {
            const button = document.createElement('div');
            button.className = 'theme-button';
            button.textContent = themeDisplayName;
            button.dataset.theme = themeId;
    
            button.addEventListener('click', () => {
                applyTheme(themeId);
                saveSettings();
            });
    
            button.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                const isFavorited = favoriteThemes.includes(themeId);
                if (isFavorited) {
                    favoriteThemes = favoriteThemes.filter(id => id !== themeId);
                } else {
                    favoriteThemes.push(themeId);
                }
                saveSettings();
                populateThemeGrid();
            });
    
            if (favoriteThemes.includes(themeId)) {
                favoriteThemeGrid.appendChild(button);
            } else {
                themeGridContainer.appendChild(button);
            }
        }
    
        if (favoriteThemes.length > 0) {
            favoritesContainer.classList.remove('hidden');
        } else {
            favoritesContainer.classList.add('hidden');
        }
    
        document.querySelectorAll('.theme-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === currentThemeName);
        });
    }

    // --- Auto-save function ---
    const saveSettings = async () => {
        const newSettings = {
            theme: currentThemeName,
            favoriteThemes: favoriteThemes,
            favoritePlaylists: favoritePlaylists,
            fileExtension: fileExtensionInput.value,
            downloadThreads: parseInt(downloadThreadsInput.value, 10),
            spotify: {
                clientId: clientIdInput.value,
                clientSecret: clientSecretInput.value,
            },
            downloadsPath: downloadsPathInput.value,
            playlistsFolderPath: playlistsPathInput.value,
            autoCreatePlaylist: autoCreatePlaylistInput.checked,
            hideRefreshButtons: hideRefreshButtonsInput.checked,
            hidePlaylistCounts: hidePlaylistCountsInput.checked,
            hideTrackNumbers: hideTrackNumbersInput.checked,
            normalizeVolume: normalizeVolumeInput.checked,
            hideSearchBars: hideSearchBarsInput.checked,
        };
        await window.electronAPI.saveSettings(newSettings);
    };

    // --- Load initial settings ---
    const loadInitialSettings = async () => {
        const currentConfig = await window.electronAPI.getSettings();
        const ytdlpCount = await window.electronAPI.getYtdlpCount();

        if (ytdlpCount > 0) {
            downloadThreadsInput.max = ytdlpCount;
            downloadThreadsInput.placeholder = `1-${ytdlpCount}`;
        } else {
            downloadThreadsInput.max = 1;
            downloadThreadsInput.placeholder = 'No yt-dlp found';
            downloadThreadsInput.disabled = true;
        }

        if (currentConfig) {
            applyTheme(currentConfig.theme || 'dark');
            favoriteThemes = currentConfig.favoriteThemes || [];
            favoritePlaylists = currentConfig.favoritePlaylists || [];
            
            const tabSpeed = currentConfig.tabSwitchSpeed || 0.3;
            tabSpeedSlider.value = tabSpeed;
            tabSpeedValue.textContent = `${tabSpeed}s`;
            root.style.setProperty('--tab-switch-speed', `${tabSpeed}s`);

            const dropdownSpeed = currentConfig.dropdownSpeed || 0.4;
            dropdownSpeedSlider.value = dropdownSpeed;
            dropdownSpeedValue.textContent = `${dropdownSpeed}s`;
            root.style.setProperty('--dropdown-speed', `${dropdownSpeed}s`);

            const themeFadeSpeed = currentConfig.themeFadeSpeed || 0.3;
            themeFadeSlider.value = themeFadeSpeed;
            themeFadeValue.textContent = `${themeFadeSpeed}s`;
            root.style.setProperty('--theme-fade-speed', `${themeFadeSpeed}s`);

            fileExtensionInput.value = currentConfig.fileExtension || 'm4a';
            downloadThreadsInput.value = currentConfig.downloadThreads || 3;
            clientIdInput.value = currentConfig.spotify.clientId;
            clientSecretInput.value = currentConfig.spotify.clientSecret;
            downloadsPathInput.value = currentConfig.downloadsPath;
            playlistsPathInput.value = currentConfig.playlistsFolderPath || '';
            autoCreatePlaylistInput.checked = currentConfig.autoCreatePlaylist || false;
            hideRefreshButtonsInput.checked = currentConfig.hideRefreshButtons || false;
            body.classList.toggle('hide-refresh-buttons', hideRefreshButtonsInput.checked);
            hidePlaylistCountsInput.checked = currentConfig.hidePlaylistCounts || false;
            body.classList.toggle('hide-playlist-counts', hidePlaylistCountsInput.checked);
            hideTrackNumbersInput.checked = currentConfig.hideTrackNumbers || false;
            body.classList.toggle('hide-track-numbers', hideTrackNumbersInput.checked);
            normalizeVolumeInput.checked = currentConfig.normalizeVolume || false;
            hideSearchBarsInput.checked = currentConfig.hideSearchBars || false;
            body.classList.toggle('hide-search-bars', hideSearchBarsInput.checked);
        }
        
        [fileExtensionInput, downloadThreadsInput, clientIdInput, clientSecretInput, tabSpeedSlider, dropdownSpeedSlider, themeFadeSlider, autoCreatePlaylistInput, hideRefreshButtonsInput, hidePlaylistCountsInput, hideTrackNumbersInput, normalizeVolumeInput, hideSearchBarsInput].forEach(input => {
            input.addEventListener('change', saveSettings);
        });

        hideRefreshButtonsInput.addEventListener('change', () => {
            body.classList.toggle('hide-refresh-buttons', hideRefreshButtonsInput.checked);
        });

        hidePlaylistCountsInput.addEventListener('change', () => {
            body.classList.toggle('hide-playlist-counts', hidePlaylistCountsInput.checked);
        });

        hideTrackNumbersInput.addEventListener('change', () => {
            body.classList.toggle('hide-track-numbers', hideTrackNumbersInput.checked);
        });

        hideSearchBarsInput.addEventListener('change', () => {
            body.classList.toggle('hide-search-bars', hideSearchBarsInput.checked);
        });

        downloadThreadsInput.addEventListener('input', () => {
            const max = parseInt(downloadThreadsInput.max, 10);
            const min = parseInt(downloadThreadsInput.min, 10);
            let value = parseInt(downloadThreadsInput.value, 10);
            if (isNaN(value)) return;
            if (value > max) downloadThreadsInput.value = max;
            else if (value < min && downloadThreadsInput.value !== '') downloadThreadsInput.value = min;
        });
        populateThemeGrid();
    };
    loadInitialSettings();

    // --- Drag and Drop for Links ---
    homeView.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('active');
    });

    homeView.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('active');
    });

    homeView.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('active');
        const text = e.dataTransfer.getData('text/plain');
        if (text) {
            linksInput.value += (linksInput.value ? '\n' : '') + text;
        }
    });

    // --- Tab Switching Logic ---
    const allViews = [homeView, settingsView, advancedSettingsView, playerView, playlistManagementView, statsView, consoleView, helpView];
    const allNavBtns = [homeBtn, settingsBtn, advancedSettingsBtn, playerBtn, playlistManagementBtn, statsBtn, consoleBtn, helpBtn];

    async function showView(viewToShow, btnToActivate) {
        if (settingsView.classList.contains('active-view') || advancedSettingsView.classList.contains('active-view')) {
            await saveSettings();
        }
        allViews.forEach(view => view.classList.remove('active-view'));
        viewToShow.classList.add('active-view');
        allNavBtns.forEach(btn => btn.classList.remove('active'));
        btnToActivate.classList.add('active');
    }
    
    homeBtn.addEventListener('click', () => showView(homeView, homeBtn));
    settingsBtn.addEventListener('click', () => showView(settingsView, settingsBtn));
    advancedSettingsBtn.addEventListener('click', () => showView(advancedSettingsView, advancedSettingsBtn));
    playerBtn.addEventListener('click', () => {
        showView(playerView, playerBtn);
        initializePlayer();
    });
    playlistManagementBtn.addEventListener('click', () => {
        showView(playlistManagementView, playlistManagementBtn);
        initializePlaylistManagement();
    });
    consoleBtn.addEventListener('click', () => showView(consoleView, consoleBtn));
    statsBtn.addEventListener('click', () => {
        showView(statsView, statsBtn);
        initializeStats();
    });
    helpBtn.addEventListener('click', () => showView(helpView, helpBtn));

    // --- yt-dlp Updater ---
    updateYtdlpBtn.addEventListener('click', async () => {
        advancedActionStatus.textContent = 'Checking for updates...';
        const result = await window.electronAPI.updateYtdlp();
        advancedActionStatus.textContent = result;
    });

    clearCacheBtn.addEventListener('click', async () => {
        advancedActionStatus.textContent = 'Clearing cache...';
        const result = await window.electronAPI.clearLinkCache();
        if (result.success) {
            advancedActionStatus.textContent = result.message;
        } else {
            advancedActionStatus.textContent = `Error: ${result.error}`;
        }
        setTimeout(() => {
            advancedActionStatus.textContent = '';
        }, 4000);
    });

    // --- Category Collapse Logic ---
    [configCategoryHeader, themesCategoryHeader, animationsCategoryHeader].forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('collapsed');
            header.classList.toggle('collapsed');
        });
    });

    // --- Animation speed slider logic ---
    tabSpeedSlider.addEventListener('input', () => {
        const speed = tabSpeedSlider.value;
        tabSpeedValue.textContent = `${speed}s`;
        root.style.setProperty('--tab-switch-speed', `${speed}s`);
    });
    dropdownSpeedSlider.addEventListener('input', () => {
        const speed = dropdownSpeedSlider.value;
        dropdownSpeedValue.textContent = `${speed}s`;
        root.style.setProperty('--dropdown-speed', `${speed}s`);
    });
    themeFadeSlider.addEventListener('input', () => {
        const speed = themeFadeSlider.value;
        themeFadeValue.textContent = `${speed}s`;
        root.style.setProperty('--theme-fade-speed', `${speed}s`);
    });

    // --- Playlist Management Logic ---
    function createInlineEditor(elementToReplace, originalText, onSave) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'inline-edit-input';
        input.value = originalText;

        elementToReplace.replaceWith(input);
        input.focus();
        input.select();

        const save = async () => {
            const newName = input.value.trim();
            if (newName && newName !== originalText) {
                await onSave(newName);
            } else {
                input.replaceWith(elementToReplace);
            }
        };

        input.addEventListener('blur', save);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                input.blur(); // Trigger the save
            } else if (e.key === 'Escape') {
                input.replaceWith(elementToReplace);
            }
        });
    }

    function initializePlaylistManagement() {
        if (isPmInitialized) return;
        pmRenderPlaylists();

        pmTrackSearchInput.addEventListener('input', () => {
            if (pmSelectedPlaylistPath) {
                pmLoadAndRenderTracks(pmSelectedPlaylistPath);
            }
        });

        createNewPlaylistBtnPm.addEventListener('click', async () => {
            const result = await window.electronAPI.createNewPlaylist();
            if (result.success) {
                // Refresh the list to show the new playlist
                await pmRenderPlaylists();
                if (isPlayerInitialized) {
                    loadAndRenderPlaylists();
                }

                // Find the new playlist element and trigger inline editing
                const newPlaylistElement = document.querySelector(`#pm-playlists-container [data-path="${CSS.escape(result.newPlaylist.path)}"]`);
                if (newPlaylistElement) {
                    const nameSpan = newPlaylistElement.querySelector('span');
                    if (nameSpan) {
                        // Scroll into view
                        newPlaylistElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        
                        // Trigger the rename functionality
                        createInlineEditor(nameSpan, result.newPlaylist.name, async (newName) => {
                            const renameResult = await window.electronAPI.renamePlaylist({ oldPath: result.newPlaylist.path, newName });
                            if (renameResult.success) {
                                // Final refresh after rename
                                pmRenderPlaylists();
                                if (isPlayerInitialized) loadAndRenderPlaylists();
                            } else {
                                alert(`Error renaming playlist: ${renameResult.error}`);
                                pmRenderPlaylists(); // Refresh to show original name
                            }
                        });
                    }
                }
            } else {
                alert(`Error creating playlist: ${result.error}`);
            }
        });

        modalCloseBtn.addEventListener('click', () => moveTrackModal.classList.add('hidden'));
        moveTrackCancelBtn.addEventListener('click', () => moveTrackModal.classList.add('hidden'));
        moveTrackConfirmBtn.addEventListener('click', async () => {
            const destinationPlaylistPath = moveTrackDestinationSelect.value;
            if (trackToMove && destinationPlaylistPath) {
                const result = await window.electronAPI.moveTrack({
                    sourcePath: trackToMove.path,
                    destinationPlaylistPath: destinationPlaylistPath
                });
                if (result.success) {
                    // Refresh both player and management views if they are initialized
                    if (isPlayerInitialized) loadAndRenderPlaylists();
                    pmLoadAndRenderTracks(pmSelectedPlaylistPath);
                } else {
                    alert(`Error moving track: ${result.error}`);
                }
            }
            moveTrackModal.classList.add('hidden');
        });

        isPmInitialized = true;
    }

    async function pmRenderPlaylists() {
        let allPlaylists = await window.electronAPI.getPlaylists();
        pmFavoritePlaylistsGrid.innerHTML = '';
        pmAllPlaylistsGrid.innerHTML = '';

        if (playlistSearchQuery) {
            allPlaylists = allPlaylists.filter(p => p.name.toLowerCase().includes(playlistSearchQuery));
        }

        if (allPlaylists.length === 0) {
            pmFavoritePlaylistsContainer.classList.add('hidden');
            pmAllPlaylistsGrid.innerHTML = `<div class="empty-playlist-message">No playlists found${playlistSearchQuery ? ' matching your search' : ''}.</div>`;
            return;
        }
        allPlaylists.forEach(p => {
            const item = document.createElement('div');
            item.className = 'playlist-list-item';
            item.dataset.path = p.path;

            const nameSpan = document.createElement('span');
            nameSpan.className = 'playlist-name';
            nameSpan.textContent = p.name;
            item.appendChild(nameSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'playlist-delete-btn';
            deleteBtn.title = 'Delete Playlist';
            deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
            item.appendChild(deleteBtn);

            item.addEventListener('click', () => {
                pmSelectedPlaylistPath = p.path;
                pmTracksHeader.textContent = p.name;
                document.querySelectorAll('#pm-playlists-container .playlist-list-item').forEach(el => {
                    el.classList.toggle('active', el.dataset.path === p.path);
                });
                pmLoadAndRenderTracks(p.path);
            });

            deleteBtn.addEventListener('click', async (e) => {
                e.stopPropagation(); // Prevent the playlist from being selected
                const confirmDelete = confirm(`Are you sure you want to permanently delete the playlist "${p.name}"? This cannot be undone.`);
                if (confirmDelete) {
                    const result = await window.electronAPI.deletePlaylist(p.path);
                    if (result.success) {
                        // If the deleted playlist was the one being viewed, clear the tracks panel
                        if (pmSelectedPlaylistPath === p.path) {
                            pmSelectedPlaylistPath = null;
                            pmTracksHeader.textContent = 'Select a playlist';
                            pmTracksContainer.innerHTML = '';
                        }
                        // Refresh both playlist views
                        pmRenderPlaylists();
                        if (isPlayerInitialized) {
                            loadAndRenderPlaylists();
                        }
                    } else {
                        alert(`Error deleting playlist: ${result.error}`);
                    }
                }
            });

            item.addEventListener('dblclick', () => {
                createInlineEditor(nameSpan, p.name, async (newName) => {
                    const result = await window.electronAPI.renamePlaylist({ oldPath: p.path, newName });
                    if (result.success) {
                        if (favoritePlaylists.includes(p.path)) {
                            favoritePlaylists = favoritePlaylists.map(favPath => favPath === p.path ? result.newPath : favPath);
                            saveSettings();
                        }
                        pmRenderPlaylists();
                        if (isPlayerInitialized) loadAndRenderPlaylists();
                        if (pmSelectedPlaylistPath === p.path) {
                            pmSelectedPlaylistPath = result.newPath;
                            pmTracksHeader.textContent = newName;
                            pmLoadAndRenderTracks(result.newPath);
                        }
                    } else {
                        alert(`Error renaming playlist: ${result.error}`);
                        item.replaceWith(nameSpan); // Restore original on failure
                    }
                });
            });

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                window.electronAPI.showInExplorer(p.path);
            });

            if (favoritePlaylists.includes(p.path)) {
                pmFavoritePlaylistsGrid.appendChild(item);
            } else {
                pmAllPlaylistsGrid.appendChild(item);
            }
        });

        pmFavoritePlaylistsContainer.classList.toggle('hidden', favoritePlaylists.length === 0);
    }

    async function pmLoadAndRenderTracks(playlistPath) {
        const { tracks } = await window.electronAPI.getPlaylistTracks(playlistPath);
        pmTracksContainer.innerHTML = '';

        const searchQuery = pmTrackSearchInput.value.trim().toLowerCase();
        let filteredTracks = tracks;
        if (searchQuery) {
            filteredTracks = tracks.filter(track => track.name.toLowerCase().includes(searchQuery));
        }

        if (!filteredTracks || filteredTracks.length === 0) {
            pmTracksContainer.innerHTML = `<div class="empty-playlist-message">This playlist is empty${searchQuery ? ' or no tracks match your search' : ''}.</div>`;
            return;
        }

        filteredTracks.forEach(track => {
            const item = document.createElement('div');
            item.className = 'pm-track-item';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'pm-track-name';
            const trackNameWithoutExt = track.name.substring(0, track.name.lastIndexOf('.')) || track.name;
            nameSpan.textContent = trackNameWithoutExt;
            nameSpan.title = track.name;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'pm-track-actions';

            const moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move';
            moveBtn.className = 'pm-action-btn';
            moveBtn.addEventListener('click', () => openMoveTrackModal(track));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'pm-action-btn pm-delete-btn';
            deleteBtn.addEventListener('click', async () => {
                const confirmDelete = confirm(`Are you sure you want to permanently delete "${track.name}"?`);
                if (confirmDelete) {
                    const result = await window.electronAPI.deleteTrack(track.path);
                    if (result.success) {
                        // Refresh both player and management views if they are initialized
                        if (isPlayerInitialized) loadAndRenderPlaylists();
                        pmLoadAndRenderTracks(playlistPath);
                    } else {
                        alert(`Error deleting track: ${result.error}`);
                    }
                }
            });

            item.addEventListener('dblclick', () => {
                createInlineEditor(nameSpan, trackNameWithoutExt, async (newName) => {
                    const result = await window.electronAPI.renameTrack({ oldPath: track.path, newName });
                    if (result.success) {
                        pmLoadAndRenderTracks(playlistPath);
                        if (isPlayerInitialized && activeQueuePaths.has(playlistPath)) {
                            loadQueueTracks();
                        }
                    } else {
                        alert(`Error renaming track: ${result.error}`);
                        item.replaceWith(nameSpan); // Restore original on failure
                    }
                });
            });

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                window.electronAPI.showInExplorer(track.path);
            });

            actionsDiv.appendChild(moveBtn);
            actionsDiv.appendChild(deleteBtn);
            item.appendChild(nameSpan);
            item.appendChild(actionsDiv);
            pmTracksContainer.appendChild(item);
        });
    }

    async function openMoveTrackModal(track) {
        trackToMove = track;
        moveTrackNameEl.textContent = track.name;
        
        const allPlaylists = await window.electronAPI.getPlaylists();
        moveTrackDestinationSelect.innerHTML = '';
        allPlaylists
            .filter(p => p.path !== pmSelectedPlaylistPath)
            .forEach(p => {
                const option = document.createElement('option');
                option.value = p.path;
                option.textContent = p.name;
                moveTrackDestinationSelect.appendChild(option);
            });

        moveTrackModal.classList.remove('hidden');
    }

    // --- Statistics Logic ---
    async function initializeStats() {
        const stats = await window.electronAPI.getStats();
        if (stats) {
            const totalSongs = stats.totalSongsDownloaded || 0;
            const failedItems = stats.songsFailed || 0;
            const totalAttempted = totalSongs + failedItems;
            const successRate = totalAttempted > 0 ? (totalSongs / totalAttempted) * 100 : 0;

            totalSongsStat.textContent = totalSongs;
            playlistsCreatedStat.textContent = stats.playlistsCreated || 0;
            downloadsInitiatedStat.textContent = stats.downloadsInitiated || 0;
            songsFailedStat.textContent = failedItems;
            linksProcessedStat.textContent = stats.totalLinksProcessed || 0;
            spotifyLinksStat.textContent = stats.spotifyLinksProcessed || 0;
            youtubeLinksStat.textContent = stats.youtubeLinksProcessed || 0;
            successRateStat.textContent = `${successRate.toFixed(1)}%`;
        }
    }

    resetStatsBtn.addEventListener('click', async () => {
        const confirmed = confirm("Are you sure you want to reset all statistics? This action cannot be undone.");
        if (confirmed) {
            await window.electronAPI.resetStats();
            initializeStats(); // Refresh the view
        }
    });

    // --- Music Player Logic ---
    function initializePlayer() {
        if (isPlayerInitialized) {
            loadAndRenderPlaylists();
            return;
        }
        audioPlayer.volume = volumeSlider.value / 100;
        lastVolume = audioPlayer.volume;

        volumeSlider.addEventListener('input', () => {
            const newVolume = volumeSlider.value / 100;
            audioPlayer.volume = newVolume;
            audioPlayer.muted = newVolume === 0;

            muteIcon.classList.toggle('hidden', !audioPlayer.muted);
            volumeIcon.classList.toggle('hidden', audioPlayer.muted);

            if (!audioPlayer.muted) {
                lastVolume = newVolume;
            }
        });

        volumeIconContainer.addEventListener('click', () => {
            if (audioPlayer.muted) {
                // Unmute
                audioPlayer.muted = false;
                const restoreVolume = lastVolume > 0 ? lastVolume : 1.0;
                audioPlayer.volume = restoreVolume;
                volumeSlider.value = restoreVolume * 100;
                
                muteIcon.classList.add('hidden');
                volumeIcon.classList.remove('hidden');
            } else {
                // Mute
                lastVolume = audioPlayer.volume;
                audioPlayer.muted = true;
                volumeSlider.value = 0;
                
                muteIcon.classList.remove('hidden');
                volumeIcon.classList.add('hidden');
            }
        });

        audioPlayer.addEventListener('timeupdate', updateProgressBar);
        audioPlayer.addEventListener('loadedmetadata', updateTotalDuration);
        audioPlayer.addEventListener('ended', playNextTrack);
        progressBarContainer.addEventListener('click', seek);
        playPauseBtn.addEventListener('click', togglePlayPause);
        prevBtn.addEventListener('click', playPreviousTrack);
        nextBtn.addEventListener('click', playNextTrack);
        shuffleBtn.addEventListener('click', toggleShuffle);
        repeatBtn.addEventListener('click', toggleRepeat);
        refreshPlaylistsBtn.addEventListener('click', loadAndRenderPlaylists);
        refreshTracksBtn.addEventListener('click', loadQueueTracks);

        updateRepeatButtonUI(); // Set initial state on load

        isPlayerInitialized = true;
        loadAndRenderPlaylists();
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateProgressBar() {
        const { currentTime, duration } = audioPlayer;
        if (duration) {
            progressBar.style.width = `${(currentTime / duration) * 100}%`;
            currentTimeEl.textContent = formatTime(currentTime);
        }
    }

    function updateTotalDuration() {
        totalDurationEl.textContent = formatTime(audioPlayer.duration);
    }

    function seek(e) {
        const duration = audioPlayer.duration;
        if (duration) {
            audioPlayer.currentTime = (e.offsetX / progressBarContainer.clientWidth) * duration;
        }
    }

    // --- Drag and Drop for Track Reordering ---
    playlistContainer.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('playlist-item')) {
            draggedTrackIndex = parseInt(e.target.dataset.index, 10);
        }
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
        if (target) {
            target.classList.remove('drag-over');
        }
    });

    playlistContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        document.querySelectorAll('.playlist-item.drag-over').forEach(el => el.classList.remove('drag-over'));
        const target = e.target.closest('.playlist-item');
        if (target && draggedTrackIndex !== null) {
            const droppedOnIndex = parseInt(target.dataset.index, 10);
            if (draggedTrackIndex !== droppedOnIndex) {
                const currentlyPlayingTrack = playlist[currentTrackIndex];
                
                // Reorder the playlist array
                const [draggedItem] = playlist.splice(draggedTrackIndex, 1);
                playlist.splice(droppedOnIndex, 0, draggedItem);

                // If not shuffled, also reorder the originalPlaylist to maintain consistency
                if (!isShuffled) {
                    const [originalDraggedItem] = originalPlaylist.splice(draggedTrackIndex, 1);
                    originalPlaylist.splice(droppedOnIndex, 0, originalDraggedItem);
                }

                // Update the current track index to its new position
                currentTrackIndex = playlist.findIndex(track => track.path === currentlyPlayingTrack.path);

                renderPlaylist();
                // Re-apply active state after re-render
                document.querySelectorAll('.playlist-item').forEach(item => {
                    item.classList.toggle('active', parseInt(item.dataset.index) === currentTrackIndex);
                });
            }
        }
        draggedTrackIndex = null;
    });

    function renderPlaylist() {
        playlistContainer.innerHTML = '';
        if (playlist.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'empty-playlist-message';
            emptyMessage.textContent = "No tracks found in this playlist.";
            playlistContainer.appendChild(emptyMessage);
            return;
        }

        // Filter tracks by search query
        let filteredTracks = playlist;
        if (trackSearchQuery) {
            filteredTracks = playlist.filter(track =>
                (track.name || '').toLowerCase().includes(trackSearchQuery)
            );
        }

        filteredTracks.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.draggable = true; // Make items draggable

            const trackNumber = document.createElement('span');
            trackNumber.className = 'track-number';
            trackNumber.textContent = track.originalIndex + 1;

            const trackName = document.createElement('span');
            trackName.className = 'track-name';
            const displayName = track.name.replace(/^\d+\s*-\s*/, '');
            trackName.textContent = displayName;
            trackName.title = track.name;

            item.appendChild(trackNumber);
            item.appendChild(trackName);

            if (track.path) {
                item.dataset.index = index;
                item.addEventListener('click', () => playTrack(index));
                item.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    window.electronAPI.showInExplorer(track.path);
                });
            } else {
                item.style.cursor = 'default';
                item.style.color = 'var(--danger-primary)';
                item.style.fontWeight = 'bold';
            }
            playlistContainer.appendChild(item);
        });
    }

    // --- INITIALIZATION ---
    async function loadAndRenderPlaylists() {
        showLoader();
        try {
            // FIX: Decouple playlist rendering from duration calculation for robustness and speed.
            // First, fetch and display the list of playlists immediately.
            appendConsoleMessage('[UI] Attempting to load playlists...');
            playlists = await window.electronAPI.getPlaylists();
            appendConsoleMessage(`[UI] Received ${playlists.length} playlists from backend.`);
    
            let playlistsToRender = playlists;
            if (playlistSearchQuery) {
                playlistsToRender = playlists.filter(p => p.name.toLowerCase().includes(playlistSearchQuery));
            }

            favoritePlaylistsGrid.innerHTML = '';
            allPlaylistsGrid.innerHTML = '';
            if (playlistsToRender.length === 0) {
                favoritePlaylistsContainer.classList.add('hidden');
                allPlaylistsGrid.innerHTML = `<div class="empty-playlist-message">No playlists found${playlistSearchQuery ? ' matching your search' : ''}.</div>`;
                appendConsoleMessage('[UI] No playlists were returned. Check backend logs in the Console tab and ensure the Playlists Folder is set correctly in Settings.');
                playlist = [];
                renderPlaylist();
                tracksHeader.textContent = 'Tracks';
                activePlaylistPath = null;
            } else {
                playlistsToRender.forEach(p => {
                    if (!p || !p.path) return;
                    const item = document.createElement('div');
                    item.className = 'playlist-list-item';
                    item.dataset.path = p.path;
    
                    const addBtn = document.createElement('button');
                    addBtn.className = 'playlist-add-btn';
    
                    const nameSpan = document.createElement('span');
                    nameSpan.className = 'playlist-name';
                    nameSpan.textContent = p.name;
    
                    item.appendChild(addBtn);
                    item.appendChild(nameSpan);
    
                    nameSpan.addEventListener('click', () => {
                        activePlaylistPath = p.path;
                        activeQueuePaths.clear();
                        activeQueuePaths.add(p.path);
                        loadQueueTracks();
                    });
    
                    // FIX: Replaced the previous event listener logic with a more robust version
                    // that correctly handles adding/removing playlists from the queue.
                    addBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        
                        const path = p.path;
                        if (activeQueuePaths.has(path)) {
                            activeQueuePaths.delete(path);
                        } else {
                            activeQueuePaths.add(path);
                        }
    
                        // If the main active playlist was removed, pick a new one from the queue.
                        if (!activeQueuePaths.has(activePlaylistPath) && activeQueuePaths.size > 0) {
                            activePlaylistPath = activeQueuePaths.values().next().value;
                        } 
                        // If the queue is now empty, clear the active playlist path.
                        else if (activeQueuePaths.size === 0) {
                            activePlaylistPath = null;
                        }
                        // If this is the first item added to the queue, make it the active one.
                        else if (activeQueuePaths.size === 1) {
                            activePlaylistPath = path;
                        }
    
                        loadQueueTracks();
                    });
    
                    item.addEventListener('contextmenu', (e) => {
                        e.preventDefault();
                        const isFavorited = favoritePlaylists.includes(p.path);
                        if (isFavorited) {
                            favoritePlaylists = favoritePlaylists.filter(path => path !== p.path);
                        } else {
                            favoritePlaylists.push(p.path);
                        }
                        saveSettings();
                        loadAndRenderPlaylists();
                        if (isPmInitialized) pmRenderPlaylists();
                    });

                    if (favoritePlaylists.includes(p.path)) {
                        favoritePlaylistsGrid.appendChild(item);
                    } else {
                        allPlaylistsGrid.appendChild(item);
                    }
                });
                favoritePlaylistsContainer.classList.toggle('hidden', favoritePlaylists.length === 0);
                updatePlaylistItemsUI();
            }
    
            // Second, calculate the total duration in the background and update the UI when done.
            window.electronAPI.getLibraryStats().then(stats => {
                totalPlaylistsCount.textContent = `${stats.playlistCount} Playlists`;
                totalTracksCount.textContent = `${stats.trackCount} Tracks`;
            }).catch(err => {
                console.error("Failed to get library stats:", err);
                totalPlaylistsCount.textContent = `? Playlists`;
                totalTracksCount.textContent = `? Tracks`;
            });
        } finally {
            hideLoader();
        }
    }

    async function loadQueueTracks() {
        showLoader();
        try {
            if (activeQueuePaths.size === 0) {
                activePlaylistPath = null;
                playlist = [];
                originalPlaylist = [];
                tracksHeader.textContent = 'Tracks';
                currentPlaylistTrackCount.textContent = '0 tracks';
                renderPlaylist();
                resetPlayerState();
                updatePlaylistItemsUI();
                return;
            }
    
            let combinedTracks = [];
            
            for (const path of activeQueuePaths) {
                if (!path) continue;
                const result = await window.electronAPI.getPlaylistTracks(path);
                if (result && result.tracks) {
                    const validTracks = result.tracks.filter(t => t.path);
                    combinedTracks.push(...validTracks);
                }
            }
    
            playlist = combinedTracks.map((track, index) => ({ ...track, originalIndex: index }));
            originalPlaylist = [...playlist];
            isShuffled = false;
            shuffleBtn.classList.remove('active');
    
            if (activeQueuePaths.size > 1) {
                tracksHeader.textContent = 'Mixed Playlist';
            } else {
                const singlePlaylist = playlists.find(pl => pl.path === activePlaylistPath);
                tracksHeader.textContent = singlePlaylist ? singlePlaylist.name : 'Tracks';
            }
            
            currentPlaylistTrackCount.textContent = `${combinedTracks.length} tracks`;
            renderPlaylist();
            updatePlaylistItemsUI();
    
            if (playlist.length > 0 && playlist[0].path) {
                playTrack(0);
            } else {
                resetPlayerState();
            }
        } finally {
            hideLoader();
        }
    }

    function updatePlaylistItemsUI() {
        const isMix = activeQueuePaths.size > 1;
        document.querySelectorAll('.playlist-list-item').forEach(el => {
            const path = el.dataset.path;
            const isInQueue = activeQueuePaths.has(path);
            const addButton = el.querySelector('.playlist-add-btn');

            // A single selected playlist is 'active'
            el.classList.toggle('active', !isMix && isInQueue);
            // All playlists in a multi-playlist selection are 'mixed-in'
            el.classList.toggle('mixed-in', isMix && isInQueue);

            if (addButton) {
                addButton.classList.toggle('mixed-in', isInQueue);
                addButton.textContent = isInQueue ? '−' : '+';
                addButton.title = isInQueue ? 'Remove from mix' : 'Add to mix';
            }
        });
    }

    function playTrack(index) {
        if (index < 0 || index >= playlist.length || !playlist[index].path) return;
        currentTrackIndex = index;
        const track = playlist[index];
        audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
        audioPlayer.play();
        // FIX: Also remove the numbered prefix from the "Now Playing" display.
        nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.toggle('active', parseInt(item.dataset.index) === index);
        });
    }

    function togglePlayPause() {
        if (!audioPlayer.src) return;
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

    function playPreviousTrack() {
        if (currentTrackIndex > 0) playTrack(currentTrackIndex - 1);
    }

    function playNextTrack() {
        // Handle repeat single
        if (repeatState === 2 && currentTrackIndex !== -1) {
            playTrack(currentTrackIndex);
            return;
        }

        const nextIndex = currentTrackIndex + 1;
        if (nextIndex < playlist.length) {
            playTrack(nextIndex);
        } else {
            // Handle repeat queue
            if (repeatState === 1) {
                playTrack(0);
            } else {
                // End of queue, no repeat
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }
        }
    }

    function toggleShuffle() {
        if (playlist.length < 2) return;
        isShuffled = !isShuffled;
        shuffleBtn.classList.toggle('active', isShuffled);

        const currentTrack = playlist[currentTrackIndex];

        if (isShuffled) {
            // If a track is playing, move it to the top and shuffle the rest.
            if (currentTrack) {
                const otherTracks = playlist.filter(track => track.path !== currentTrack.path);
                // Fisher-Yates shuffle on the rest of the tracks
                for (let i = otherTracks.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [otherTracks[i], otherTracks[j]] = [otherTracks[j], otherTracks[i]];
                }
                playlist = [currentTrack, ...otherTracks];
                currentTrackIndex = 0;
            } else {
                // If no track is playing, just shuffle the whole list.
                for (let i = playlist.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
                }
            }
        } else {
            // Unshuffle by restoring from the original order
            playlist = [...originalPlaylist];
            // Find the new index of the currently playing track to avoid interruption
            if (currentTrack) {
                const newIndex = playlist.findIndex(track => track.path === currentTrack.path);
                currentTrackIndex = newIndex !== -1 ? newIndex : 0;
            }
        }

        renderPlaylist();
        // Re-apply the active state to the currently playing track in the new list order
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.toggle('active', parseInt(item.dataset.index) === currentTrackIndex);
        }
    );
}

    function toggleRepeat() {
        repeatState = (repeatState + 1) % 3; // Cycle through 0, 1, 2
        updateRepeatButtonUI();
    }

    function updateRepeatButtonUI() {
        repeatBtn.classList.remove('active-queue', 'active-single');
        let title = 'Repeat Off';
        let statusText = 'Off';
        let iconHTML = `
            <svg class="player-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>`;

        if (repeatState === 1) { // Repeat Queue
            repeatBtn.classList.add('active-queue');
            title = 'Repeat Queue';
            statusText = 'Queue';
        } else if (repeatState === 2) { // Repeat Single
            repeatBtn.classList.add('active-single');
            title = 'Repeat Single';
            statusText = 'Single';
            iconHTML = `
            <svg class="player-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                <text x="12" y="14" font-family="Arial, sans-serif" font-size="9" fill="currentColor" text-anchor="middle" dominant-baseline="middle" font-weight="bold">1</text>
            </svg>`;
        }
        
        repeatBtn.title = title;
        repeatBtn.innerHTML = iconHTML;
        repeatStatusText.textContent = statusText;
    }

    function resetPlayerState() {
        audioPlayer.src = '';
        nowPlaying.textContent = 'No track selected';
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
        totalDurationEl.textContent = '0:00';
    }

    // --- Global Media Key Listeners ---
    window.electronAPI.onMediaKeyPlayPause(togglePlayPause);
    window.electronAPI.onMediaKeyNext(playNextTrack);
    window.electronAPI.onMediaKeyPrev(playPreviousTrack);

    // --- Console Output Logic ---
    function appendConsoleMessage(message) {
        const div = document.createElement('div');
        div.className = 'console-message';
        div.textContent = message;
        consoleOutput.appendChild(div);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    window.electronAPI.onUpdateStatus((message, isFinished, payload) => {
        appendConsoleMessage(message);
        if (isFinished) {
            downloadBtn.classList.remove('hidden');
            linksInput.disabled = false;
            cancelBtn.classList.add('hidden');
            bigCancelBtn.classList.add('hidden');
            if (payload && payload.success && payload.filesDownloaded > 0) {
                if (autoCreatePlaylistInput.checked) {
                    appendConsoleMessage('Automatically creating playlist...');
                    createPlaylistBtn.click();
                } else {
                    createPlaylistBtn.classList.remove('hidden');
                }
            }
        }
    }
);

    // --- Download Logic ---
    downloadBtn.addEventListener('click', () => {
        const links = linksInput.value.split('\n').filter(link => link.trim() !== '');
        if (links.length === 0) {
            appendConsoleMessage('Please enter at least one link.');
            return;
        }
        showView(consoleView, consoleBtn);
        downloadBtn.classList.add('hidden');
        linksInput.disabled = true;
        cancelBtn.classList.remove('hidden');
        bigCancelBtn.classList.remove('hidden');
        createPlaylistBtn.classList.add('hidden');
        consoleOutput.innerHTML = '';
        window.electronAPI.startDownload(links);
    });

    cancelBtn.addEventListener('click', () => {
        window.electronAPI.cancelDownload();
    });

    bigCancelBtn.addEventListener('click', () => {
        window.electronAPI.cancelDownload();
    });

    createPlaylistBtn.addEventListener('click', async () => {
        const result = await window.electronAPI.createPlaylist();
        appendConsoleMessage(result);
        createPlaylistBtn.classList.add('hidden');
        if (!result.startsWith('Error:')) {
            if (isPlayerInitialized) loadAndRenderPlaylists();
        }
    });

    // --- Settings Reset Logic ---
    document.getElementById('reset-settings-btn').addEventListener('click', async () => {
        const defaultSettings = await window.electronAPI.getDefaultSettings();
        applyTheme(defaultSettings.theme || 'dark');
        favoriteThemes = defaultSettings.favoriteThemes || [];
        favoritePlaylists = defaultSettings.favoritePlaylists || [];
        fileExtensionInput.value = defaultSettings.fileExtension || 'm4a';
        downloadThreadsInput.value = defaultSettings.downloadThreads || 3;
        clientIdInput.value = defaultSettings.spotify.clientId;
        clientSecretInput.value = defaultSettings.spotify.clientSecret;
        downloadsPathInput.value = defaultSettings.downloadsPath;
        autoCreatePlaylistInput.checked = defaultSettings.autoCreatePlaylist || false;
        hideRefreshButtonsInput.checked = defaultSettings.hideRefreshButtons || false;
        body.classList.toggle('hide-refresh-buttons', hideRefreshButtonsInput.checked);
        hidePlaylistCountsInput.checked = defaultSettings.hidePlaylistCounts || false;
        body.classList.toggle('hide-playlist-counts', hidePlaylistCountsInput.checked);
        hideTrackNumbersInput.checked = defaultSettings.hideTrackNumbers || false;
        body.classList.toggle('hide-track-numbers', hideTrackNumbersInput.checked);
        hideSearchBarsInput.checked = defaultSettings.hideSearchBars || false;
        body.classList.toggle('hide-search-bars', hideSearchBarsInput.checked);
        tabSpeedSlider.value = defaultSettings.tabSwitchSpeed || 0.3;
        tabSpeedValue.textContent = `${tabSpeedSlider.value}s`;
        root.style.setProperty('--tab-switch-speed', `${tabSpeedSlider.value}s`);
        dropdownSpeedSlider.value = defaultSettings.dropdownSpeed || 0.4;
        dropdownSpeedValue.textContent = `${dropdownSpeedSlider.value}s`;
        root.style.setProperty('--dropdown-speed', `${dropdownSpeedSlider.value}s`);
        themeFadeSlider.value = defaultSettings.themeFadeSpeed || 0.3;
        themeFadeValue.textContent = `${themeFadeSlider.value}s`;
        root.style.setProperty('--theme-fade-speed', `${themeFadeSlider.value}s`);
        populateThemeGrid();
        saveSettings();
    });

    // --- Help View Logic ---
    spotifyLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.electronAPI.openExternalLink(e.target.href);
    });

    // --- Auto Updater Logic ---
    window.electronAPI.onUpdateAvailable(() => {
        updateNotification.classList.remove('hidden');
        updateMessage.textContent = 'A new update is available. Downloading now...';
    });

    window.electronAPI.onUpdateDownloaded(() => {
        updateNotification.classList.remove('hidden');
        updateMessage.textContent = 'Update downloaded. It will be installed on restart.';
        restartBtn.classList.remove('hidden');
    });

    restartBtn.addEventListener('click', () => {
        window.electronAPI.restartApp();
    });
});