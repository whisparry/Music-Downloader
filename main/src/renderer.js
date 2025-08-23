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
    const notificationHistoryBtn = document.getElementById('notification-history-btn');
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
    const notificationHistoryView = document.getElementById('notification-history-view');
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

    // Toast Notification elements
    const toastNotification = document.getElementById('toast-notification');
    const toastIcon = document.getElementById('toast-icon');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastCloseBtn = document.getElementById('toast-close-btn');

    // Notification History elements
    const notificationHistoryContainer = document.getElementById('notification-history-container');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

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
    const notificationsReceivedStat = document.getElementById('notifications-received-stat');
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
    let toastTimer = null;
    let notificationHistory = [];
    let trackSearchQuery = '';
    let playlistSearchQuery = '';
    let lastVolume = 1; // For mute/unmute functionality

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

    // --- Notification History Logic ---
    function saveNotificationHistory() {
        try {
            localStorage.setItem('notificationHistory', JSON.stringify(notificationHistory));
        } catch (e) {
            console.error("Failed to save notification history:", e);
        }
    }

    function loadNotificationHistory() {
        try {
            const storedHistory = localStorage.getItem('notificationHistory');
            if (storedHistory) {
                notificationHistory = JSON.parse(storedHistory);
            }
        } catch (e) {
            console.error("Failed to load notification history:", e);
            notificationHistory = [];
        }
    }

    function renderNotificationHistory() {
        if (!notificationHistoryContainer) return;
        notificationHistoryContainer.innerHTML = '';

        if (notificationHistory.length === 0) {
            notificationHistoryContainer.innerHTML = `<div class="empty-playlist-message">No notifications yet.</div>`;
            return;
        }

        notificationHistory.forEach(notif => {
            const item = document.createElement('div');
            item.className = `history-item ${notif.type}`;

            const icon = document.createElement('div');
            icon.className = 'history-icon';
            if (notif.type === 'success') icon.innerHTML = '✓';
            else if (notif.type === 'error') icon.innerHTML = '✗';
            else icon.innerHTML = 'ℹ️';

            const content = document.createElement('div');
            content.className = 'history-content';

            const title = document.createElement('p');
            title.className = 'history-title';
            title.textContent = notif.title;

            const message = document.createElement('p');
            message.className = 'history-message';
            message.textContent = notif.message;

            const timestamp = document.createElement('div');
            timestamp.className = 'history-timestamp';
            timestamp.textContent = new Date(notif.timestamp).toLocaleTimeString();

            content.appendChild(title);
            content.appendChild(message);
            item.appendChild(icon);
            item.appendChild(content);
            item.appendChild(timestamp);
            notificationHistoryContainer.appendChild(item);
        });
    }

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all notification history?')) {
            notificationHistory = [];
            saveNotificationHistory();
            renderNotificationHistory();
            showNotification('info', 'History Cleared', 'Your notification history has been cleared.');
        }
    });

    // --- Toast Notification Logic ---
    function showNotification(type, title, message) {
        // Increment stat
        window.electronAPI.incrementNotificationStat();

        // Add to history
        const timestamp = new Date().toISOString();
        notificationHistory.unshift({ type, title, message, timestamp });
        if (notificationHistory.length > 100) { // Keep history capped at 100
            notificationHistory.pop();
        }
        saveNotificationHistory();
        if (notificationHistoryView.classList.contains('active-view')) {
            renderNotificationHistory();
        }

        // Show toast
        if (toastTimer) {
            clearTimeout(toastTimer);
        }

        toastTitle.textContent = title;
        toastMessage.textContent = message;

        toastNotification.className = 'toast-notification'; // Reset
        toastNotification.classList.add(type); // 'success', 'info', 'error'

        if (type === 'success') toastIcon.innerHTML = '✓';
        else if (type === 'error') toastIcon.innerHTML = '✗';
        else toastIcon.innerHTML = 'ℹ️';

        toastNotification.classList.remove('hidden');

        toastTimer = setTimeout(() => {
            toastNotification.classList.add('hidden');
        }, 5000);
    }

    toastCloseBtn.addEventListener('click', () => {
        if (toastTimer) clearTimeout(toastTimer);
        toastNotification.classList.add('hidden');
    });

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
    const allViews = [homeView, settingsView, advancedSettingsView, playerView, playlistManagementView, statsView, notificationHistoryView, consoleView, helpView];
    const allNavBtns = [homeBtn, settingsBtn, advancedSettingsBtn, playerBtn, playlistManagementBtn, statsBtn, notificationHistoryBtn, consoleBtn, helpBtn];

    async function showView(viewToShow, btnToActivate) {
        if (settingsView.classList.contains('active-view') || advancedSettingsView.classList.contains('active-view')) {
            await saveSettings();
            showNotification('success', 'Settings Saved', 'Your changes have been applied.');
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
    notificationHistoryBtn.addEventListener('click', () => {
        showView(notificationHistoryView, notificationHistoryBtn);
        renderNotificationHistory();
    });
    helpBtn.addEventListener('click', () => showView(helpView, helpBtn));

    // --- yt-dlp Updater ---
    updateYtdlpBtn.addEventListener('click', async () => {
        showNotification('info', 'yt-dlp Update', 'Checking for updates...');
        const result = await window.electronAPI.updateYtdlp();
        showNotification('info', 'yt-dlp Update', result);
    });

    clearCacheBtn.addEventListener('click', async () => {
        const result = await window.electronAPI.clearLinkCache();
        if (result.success) {
            showNotification('success', 'Cache Cleared', result.message);
        } else {
            showNotification('error', 'Cache Error', result.error);
        }
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

    // --- Playlist Loading and Rendering ---
    async function loadAndRenderPlaylists() {
        try {
            showLoader();
            const [allPlaylists, stats] = await Promise.all([
                window.electronAPI.getPlaylists(),
                window.electronAPI.getLibraryStats()
            ]);
            
            playlists = allPlaylists; // Update global state
            totalPlaylistsCount.textContent = `${stats.playlistCount} Playlists`;
            totalTracksCount.textContent = `${stats.trackCount} Tracks`;

            allPlaylistsGrid.innerHTML = '';
            favoritePlaylistsGrid.innerHTML = '';

            if (playlists.length === 0) {
                allPlaylistsGrid.innerHTML = `<div class="empty-playlist-message">No playlists found. Set your playlists folder in Settings or create one in Playlist Management.</div>`;
                return;
            }

            const filteredPlaylists = playlists.filter(p => p.name.toLowerCase().includes(playlistSearchQuery));

            filteredPlaylists.forEach(p => {
                const isFavorite = favoritePlaylists.includes(p.path);
                const targetGrid = isFavorite ? favoritePlaylistsGrid : allPlaylistsGrid;
                
                const item = document.createElement('div');
                item.className = 'playlist-list-item';
                item.dataset.path = p.path;

                const name = document.createElement('span');
                name.className = 'playlist-name';
                name.textContent = p.name;
                name.title = p.name;

                const addButton = document.createElement('button');
                addButton.className = 'playlist-add-btn';
                addButton.textContent = '+';
                addButton.title = 'Add to current queue';

                item.appendChild(name);
                item.appendChild(addButton);
                targetGrid.appendChild(item);

                item.addEventListener('click', (e) => {
                    if (e.target === addButton) return; // Don't trigger if add button is clicked
                    activePlaylistPath = p.path;
                    activeQueuePaths.clear();
                    activeQueuePaths.add(p.path);
                    loadQueueTracks();
                });

                addButton.addEventListener('click', () => {
                    if (activeQueuePaths.has(p.path)) {
                        if (activeQueuePaths.size > 1) { // Can't remove the last one
                            activeQueuePaths.delete(p.path);
                        }
                    } else {
                        activeQueuePaths.add(p.path);
                    }
                    loadQueueTracks(true); // isRefresh = true
                });

                item.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    if (isFavorite) {
                        favoritePlaylists = favoritePlaylists.filter(path => path !== p.path);
                    } else {
                        favoritePlaylists.push(p.path);
                    }
                    saveSettings();
                    loadAndRenderPlaylists(); // Re-render to move it
                });
            });

            favoritePlaylistsContainer.classList.toggle('hidden', favoritePlaylistsGrid.children.length === 0);
            updatePlaylistItemsUI();

        } catch (error) {
            console.error("Failed to load playlists:", error);
            showNotification('error', 'Playlist Error', 'Could not load playlists. Check console for details.');
        } finally {
            hideLoader();
        }
    }

    function updatePlaylistItemsUI() {
        document.querySelectorAll('.playlist-list-item').forEach(item => {
            const path = item.dataset.path;
            item.classList.toggle('active', path === activePlaylistPath);
            const addButton = item.querySelector('.playlist-add-btn');
            if (addButton) {
                const isMixedIn = activeQueuePaths.has(path);
                addButton.classList.toggle('mixed-in', isMixedIn);
                addButton.textContent = isMixedIn ? '✓' : '+';
                addButton.title = isMixedIn ? 'Remove from queue' : 'Add to queue';
            }
        });
    }

    async function loadQueueTracks(isRefresh = false) {
        if (!isRefresh && activeQueuePaths.size === 0) {
            playlistContainer.innerHTML = `<div class="empty-playlist-message">Select a playlist to start listening.</div>`;
            tracksHeader.textContent = 'Tracks';
            currentPlaylistTrackCount.textContent = '0 tracks';
            return;
        }

        try {
            showLoader();
            let combinedTracks = [];
            const trackPromises = Array.from(activeQueuePaths).map(p => window.electronAPI.getPlaylistTracks(p));
            const results = await Promise.all(trackPromises);

            for (const result of results) {
                combinedTracks.push(...result.tracks);
            }

            playlist = combinedTracks.map((track, index) => ({ ...track, originalIndex: index }));
            originalPlaylist = [...playlist];
            
            if (isShuffled) {
                toggleShuffle(); // Re-shuffle with the new playlist
            } else {
                renderPlaylist();
            }

            const activePlaylist = playlists.find(p => p.path === activePlaylistPath);
            tracksHeader.textContent = activePlaylist ? activePlaylist.name : 'Mixed Queue';
            currentPlaylistTrackCount.textContent = `${combinedTracks.length} tracks`;
            updatePlaylistItemsUI();

            if (playlist.length > 0 && playlist[0].path) {
                currentTrackIndex = 0;
                const track = playlist[0];
                audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
                nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
                document.querySelectorAll('.playlist-item').forEach(item => {
                    item.classList.toggle('active', parseInt(item.dataset.index) === 0);
                });
            } else {
                resetPlayerState();
            }
        } catch (error) {
            console.error("Failed to load queue tracks:", error);
            showNotification('error', 'Track Error', 'Could not load tracks for the selected playlist(s).');
        } finally {
            hideLoader();
        }
    }

    function renderPlaylist() {
        playlistContainer.innerHTML = '';
        if (playlist.length === 0) {
            playlistContainer.innerHTML = `<div class="empty-playlist-message">This playlist is empty.</div>`;
            return;
        }

        const filteredPlaylist = playlist.filter(track => track.name.toLowerCase().includes(trackSearchQuery));

        if (filteredPlaylist.length === 0) {
            playlistContainer.innerHTML = `<div class="empty-playlist-message">No tracks match your search.</div>`;
            return;
        }

        filteredPlaylist.forEach((track, displayIndex) => {
            const originalIndexInPlaylist = playlist.findIndex(pTrack => pTrack.path === track.path);

            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.dataset.index = originalIndexInPlaylist;
            item.draggable = true;

            const trackNumber = document.createElement('span');
            trackNumber.className = 'track-number';
            trackNumber.textContent = `${displayIndex + 1}.`;

            const trackName = document.createElement('span');
            trackName.className = 'playlist-name';
            trackName.textContent = track.name.replace(/^\d+\s*-\s*/, '');
            trackName.title = track.name;

            item.appendChild(trackNumber);
            item.appendChild(trackName);
            playlistContainer.appendChild(item);

            item.addEventListener('click', () => {
                playTrack(originalIndexInPlaylist);
            });
        });
    }

    // --- Playlist Management Logic ---
    async function initializePlaylistManagement() {
        if (isPmInitialized) {
            pmRenderPlaylists();
            return;
        }
        await pmRenderPlaylists();
        isPmInitialized = true;

        createNewPlaylistBtnPm.addEventListener('click', async () => {
            const result = await window.electronAPI.createNewPlaylist();
            if (result.success) {
                showNotification('success', 'Playlist Created', `"${result.newPlaylist.name}" has been created.`);
                await pmRenderPlaylists();
                if (isPlayerInitialized) {
                    await loadAndRenderPlaylists();
                }
            } else {
                showNotification('error', 'Creation Failed', result.error);
            }
        });

        pmTrackSearchInput.addEventListener('input', () => {
            pmRenderTracks(pmSelectedPlaylistPath);
        });

        modalCloseBtn.addEventListener('click', () => moveTrackModal.classList.add('hidden'));
        moveTrackCancelBtn.addEventListener('click', () => moveTrackModal.classList.add('hidden'));
        moveTrackConfirmBtn.addEventListener('click', async () => {
            const destinationPlaylistPath = moveTrackDestinationSelect.value;
            if (trackToMove && destinationPlaylistPath) {
                const result = await window.electronAPI.moveTrack({ sourcePath: trackToMove.path, destinationPlaylistPath });
                if (result.success) {
                    showNotification('success', 'Track Moved', `Moved "${trackToMove.name}" successfully.`);
                    pmRenderTracks(pmSelectedPlaylistPath); // Refresh current view
                } else {
                    showNotification('error', 'Move Failed', result.error);
                }
                moveTrackModal.classList.add('hidden');
            }
        });
    }

    async function pmRenderPlaylists() {
        try {
            const allPlaylists = await window.electronAPI.getPlaylists();
            playlists = allPlaylists; // Update global state

            pmAllPlaylistsGrid.innerHTML = '';
            pmFavoritePlaylistsGrid.innerHTML = '';

            if (playlists.length === 0) {
                pmAllPlaylistsGrid.innerHTML = `<div class="empty-playlist-message">No playlists found.</div>`;
                return;
            }

            const filteredPlaylists = playlists.filter(p => p.name.toLowerCase().includes(playlistSearchQuery));

            filteredPlaylists.forEach(p => {
                const isFavorite = favoritePlaylists.includes(p.path);
                const targetGrid = isFavorite ? pmFavoritePlaylistsGrid : pmAllPlaylistsGrid;

                const item = document.createElement('div');
                item.className = 'playlist-list-item';
                item.dataset.path = p.path;

                const name = document.createElement('span');
                name.className = 'playlist-name';
                name.textContent = p.name;
                name.title = p.name;

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'playlist-delete-btn';
                deleteBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;
                deleteBtn.title = 'Delete Playlist';

                item.appendChild(name);
                item.appendChild(deleteBtn);
                targetGrid.appendChild(item);

                item.addEventListener('click', (e) => {
                    if (e.target.closest('.playlist-delete-btn')) return;
                    pmSelectedPlaylistPath = p.path;
                    document.querySelectorAll('#pm-playlists-container .playlist-list-item').forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                    pmTracksHeader.textContent = p.name;
                    pmRenderTracks(p.path);
                });

                name.addEventListener('dblclick', () => {
                    const newName = prompt('Enter new playlist name:', p.name);
                    if (newName && newName.trim() !== p.name) {
                        window.electronAPI.renamePlaylist({ oldPath: p.path, newName: newName.trim() }).then(result => {
                            if (result.success) {
                                showNotification('success', 'Renamed', `Playlist renamed to "${newName.trim()}".`);
                                pmRenderPlaylists();
                                if (isPlayerInitialized) loadAndRenderPlaylists();
                            } else {
                                showNotification('error', 'Rename Failed', result.error);
                            }
                        });
                    }
                });

                deleteBtn.addEventListener('click', async () => {
                    if (confirm(`Are you sure you want to permanently delete the playlist "${p.name}"?`)) {
                        const result = await window.electronAPI.deletePlaylist(p.path);
                        if (result.success) {
                            showNotification('success', 'Playlist Deleted', `"${p.name}" has been deleted.`);
                            if (pmSelectedPlaylistPath === p.path) {
                                pmTracksContainer.innerHTML = '';
                                pmTracksHeader.textContent = 'Select a playlist';
                                pmSelectedPlaylistPath = null;
                            }
                            pmRenderPlaylists();
                            if (isPlayerInitialized) loadAndRenderPlaylists();
                        } else {
                            showNotification('error', 'Delete Failed', result.error);
                        }
                    }
                });
            });

            pmFavoritePlaylistsContainer.classList.toggle('hidden', pmFavoritePlaylistsGrid.children.length === 0);

        } catch (error) {
            console.error("Failed to render PM playlists:", error);
        }
    }

    async function pmRenderTracks(playlistPath) {
        if (!playlistPath) {
            pmTracksContainer.innerHTML = `<div class="empty-playlist-message">Select a playlist to see its tracks.</div>`;
            return;
        }
        try {
            const { tracks } = await window.electronAPI.getPlaylistTracks(playlistPath);
            pmTracksContainer.innerHTML = '';

            if (tracks.length === 0) {
                pmTracksContainer.innerHTML = `<div class="empty-playlist-message">This playlist is empty.</div>`;
                return;
            }

            const searchQuery = pmTrackSearchInput.value.trim().toLowerCase();
            const filteredTracks = tracks.filter(t => t.name.toLowerCase().includes(searchQuery));

            filteredTracks.forEach(track => {
                const item = document.createElement('div');
                item.className = 'pm-track-item';

                const name = document.createElement('span');
                name.className = 'pm-track-name';
                name.textContent = track.name;
                name.title = track.name;

                const actions = document.createElement('div');
                actions.className = 'pm-track-actions';

                const moveBtn = document.createElement('button');
                moveBtn.textContent = 'Move';
                moveBtn.className = 'pm-action-btn';

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'pm-action-btn pm-delete-btn';

                actions.appendChild(moveBtn);
                actions.appendChild(deleteBtn);
                item.appendChild(name);
                item.appendChild(actions);
                pmTracksContainer.appendChild(item);

                name.addEventListener('dblclick', () => {
                    const newName = prompt('Enter new track name (without extension):', track.name);
                    if (newName && newName.trim() !== track.name) {
                        window.electronAPI.renameTrack({ oldPath: track.path, newName: newName.trim() }).then(result => {
                            if (result.success) {
                                showNotification('success', 'Renamed', `Track renamed successfully.`);
                                pmRenderTracks(playlistPath);
                            } else {
                                showNotification('error', 'Rename Failed', result.error);
                            }
                        });
                    }
                });

                deleteBtn.addEventListener('click', async () => {
                    if (confirm(`Are you sure you want to permanently delete "${track.name}"?`)) {
                        const result = await window.electronAPI.deleteTrack(track.path);
                        if (result.success) {
                            showNotification('success', 'Track Deleted', `"${track.name}" has been deleted.`);
                            pmRenderTracks(playlistPath);
                        } else {
                            showNotification('error', 'Delete Failed', result.error);
                        }
                    }
                });

                moveBtn.addEventListener('click', () => {
                    trackToMove = track;
                    moveTrackNameEl.textContent = track.name;
                    moveTrackDestinationSelect.innerHTML = '';
                    playlists.forEach(p => {
                        if (p.path !== playlistPath) {
                            const option = document.createElement('option');
                            option.value = p.path;
                            option.textContent = p.name;
                            moveTrackDestinationSelect.appendChild(option);
                        }
                    });
                    moveTrackModal.classList.remove('hidden');
                });
            });
        } catch (error) {
            console.error("Failed to render PM tracks:", error);
        }
    }

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

    function resetPlayerState() {
        audioPlayer.src = '';
        nowPlaying.textContent = 'No track selected';
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
        totalDurationEl.textContent = '0:00';
    }

    function playNextTrack() {
        if (playlist.length === 0) return;
        if (repeatState === 2) { // Repeat Single
            playTrack(currentTrackIndex);
            return;
        }
        let nextIndex = currentTrackIndex + 1;
        if (nextIndex >= playlist.length) {
            if (repeatState === 1) { // Repeat Queue
                nextIndex = 0;
            } else {
                resetPlayerState();
                return;
            }
        }
        playTrack(nextIndex);
    }

    function playPreviousTrack() {
        if (playlist.length === 0) return;
        if (audioPlayer.currentTime > 3) {
            playTrack(currentTrackIndex);
            return;
        }
        let prevIndex = currentTrackIndex - 1;
        if (prevIndex < 0) {
            if (repeatState === 1) {
                prevIndex = playlist.length - 1;
            } else {
                playTrack(currentTrackIndex);
                return;
            }
        }
        playTrack(prevIndex);
    }

    function toggleShuffle() {
        isShuffled = !isShuffled;
        shuffleBtn.classList.toggle('active', isShuffled);
        showNotification('info', 'Shuffle', isShuffled ? 'Shuffle is ON' : 'Shuffle is OFF');

        if (isShuffled) {
            const currentTrack = playlist[currentTrackIndex];
            let restOfPlaylist = playlist.filter((_, index) => index !== currentTrackIndex);
            for (let i = restOfPlaylist.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [restOfPlaylist[i], restOfPlaylist[j]] = [restOfPlaylist[j], restOfPlaylist[i]];
            }
            playlist = [currentTrack, ...restOfPlaylist];
            currentTrackIndex = 0;
        } else {
            const currentTrackPath = playlist[currentTrackIndex]?.path;
            playlist = [...originalPlaylist];
            currentTrackIndex = playlist.findIndex(track => track.path === currentTrackPath);
            if (currentTrackIndex === -1 && playlist.length > 0) currentTrackIndex = 0;
        }
        renderPlaylist();
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.toggle('active', parseInt(item.dataset.index) === currentTrackIndex);
        });
    }

    function toggleRepeat() {
        repeatState = (repeatState + 1) % 3;
        updateRepeatButtonUI();
    }

    function updateRepeatButtonUI() {
        repeatBtn.classList.remove('active-queue', 'active-single');
        let title = 'Repeat Off';
        let statusText = '';
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

    function playTrack(index) {
        if (index < 0 || index >= playlist.length || !playlist[index].path) return;

        currentTrackIndex = index;
        const track = playlist[index];
        audioPlayer.src = `file:///${encodeURI(track.path.replace(/\\/g, '/'))}`;
        nowPlaying.textContent = track.name.replace(/^\d+\s*-\s*/, '');
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.toggle('active', parseInt(item.dataset.index) === index);
        });

        audioPlayer.volume = lastVolume;
        audioPlayer.play();
    }

    function togglePlayPause() {
        if (!audioPlayer.src) return;

        if (audioPlayer.paused) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            audioPlayer.play();
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            audioPlayer.pause();
        }
    }

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
            showNotification('success', 'Playlist Created', 'Playlist created from last download session.');
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
        showNotification('success', 'Settings Reset', 'All settings have been restored to their defaults.');
    });

    // --- Help View Logic ---
    spotifyLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.electronAPI.openExternalLink(e.target.href);
    });

    // --- Auto Updater Logic ---
    window.electronAPI.onShowCheckingForUpdateNotification(() => {
        showNotification('info', 'Auto-Updater', 'Checking for Updates!');
    });

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

    // --- Initial Load for History ---
    loadNotificationHistory();
});