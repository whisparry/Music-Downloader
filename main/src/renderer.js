import { themeNames, themeColors } from './themes.js';
import { initializePlayer } from './player.js';
import { initializePlaylistManagement } from './playlistManagement.js';

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
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const repeatStatusText = document.getElementById('repeat-status-text');
    const refreshPlaylistsBtn = document.getElementById('refresh-playlists-btn');
    const refreshTracksBtn = document.getElementById('refresh-tracks-btn');
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
    const createPlaylistBtn = document.getElementById('create-playlist-btn');
    const updateNotification = document.getElementById('update-notification');
    const updateMessage = document.getElementById('update-message');
    const restartBtn = document.getElementById('restart-btn');
    const toastNotification = document.getElementById('toast-notification');
    const toastIcon = document.getElementById('toast-icon');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastCloseBtn = document.getElementById('toast-close-btn');
    const notificationHistoryContainer = document.getElementById('notification-history-container');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
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
    const playlistSearchInput = document.getElementById('playlist-search-input');
    const playlistSearchBtn = document.getElementById('playlist-search-btn');
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
    const configCategoryHeader = document.getElementById('config-category-header');
    const themesCategoryHeader = document.getElementById('themes-category-header');
    const animationsCategoryHeader = document.getElementById('animations-category-header');
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
    const checkForUpdatesBtn = document.getElementById('check-for-updates-btn');
    const clearCacheBtn = document.getElementById('clear-cache-btn');
    const spotifyLink = document.getElementById('spotify-link');
    const spotifySearchInput = document.getElementById('spotify-search-input');
    const spotifyResultsDropdown = document.getElementById('spotify-results-dropdown');
    const spotifyFilterBtn = document.getElementById('spotify-filter-btn');
    const spotifyFilterDropdown = document.getElementById('spotify-filter-dropdown');
    const spotifySearchLimitInput = document.getElementById('spotify-search-limit');
    const downloadProgressContainer = document.getElementById('download-progress-container');
    const downloadProgressBar = document.getElementById('download-progress-bar');
    const downloadEta = document.getElementById('download-eta');

    // --- STATE & CONTEXT (Centralized) ---
    const state = {
        currentThemeName: 'dark',
        favoriteThemes: [],
        favoritePlaylists: [],
        playlist: [],
        originalPlaylist: [],
        isShuffled: false,
        repeatState: 0, // 0: off, 1: queue, 2: single
        currentTrackIndex: -1,
        playlists: [],
        activePlaylistPath: null,
        activeQueuePaths: new Set(),
        isPlayerInitialized: false,
        isPmInitialized: false,
        pmSelectedPlaylistPath: null,
        trackToMove: null,
        draggedTrackIndex: null,
        toastTimer: null,
        notificationHistory: [],
        trackSearchQuery: '',
        playlistSearchQuery: '',
        lastVolume: 1,
        spotifySearchDebounce: null,
        spotifySearchType: 'playlist',
    };

    let playerAPI = {}; // To hold API from player module

    // --- Helper Functions ---
    const showLoader = () => loadingOverlay.classList.remove('hidden');
    const hideLoader = () => loadingOverlay.classList.add('hidden');
    const saveSettings = async () => {
        const newSettings = {
            theme: state.currentThemeName,
            favoriteThemes: state.favoriteThemes,
            favoritePlaylists: state.favoritePlaylists,
            fileExtension: fileExtensionInput.value,
            downloadThreads: parseInt(downloadThreadsInput.value, 10),
            spotifySearchLimit: parseInt(spotifySearchLimitInput.value, 10),
            spotify: { clientId: clientIdInput.value, clientSecret: clientSecretInput.value },
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

    // --- Context Object for Modules ---
    const context = {
        elements: { root, body, closeBtn, homeBtn, settingsBtn, advancedSettingsBtn, playerBtn, playlistManagementBtn, consoleBtn, statsBtn, notificationHistoryBtn, helpBtn, shuffleBtn, repeatBtn, repeatStatusText, refreshPlaylistsBtn, refreshTracksBtn, homeView, settingsView, advancedSettingsView, playerView, playlistManagementView, consoleView, statsView, notificationHistoryView, helpView, downloadBtn, linksInput, consoleOutput, cancelBtn, bigCancelBtn, loadingOverlay, dropZone, createPlaylistBtn, updateNotification, updateMessage, restartBtn, toastNotification, toastIcon, toastTitle, toastMessage, toastCloseBtn, notificationHistoryContainer, clearHistoryBtn, themeGridContainer, favoriteThemeGrid, favoritesContainer, fileExtensionInput, downloadThreadsInput, clientIdInput, clientSecretInput, toggleSecretBtn, downloadsPathInput, changePathBtn, playlistsPathInput, changePlaylistsPathBtn, tracksHeader, playlistContainer, audioPlayer, nowPlaying, playPauseBtn, prevBtn, nextBtn, playIcon, pauseIcon, volumeSlider, volumeIconContainer, volumeIcon, muteIcon, playlistsContainer, favoritePlaylistsContainer, favoritePlaylistsGrid, allPlaylistsGrid, progressBar, progressBarContainer, currentTimeEl, totalDurationEl, totalPlaylistsCount, totalTracksCount, playlistSearchInputPlaylists, currentPlaylistTrackCount, playlistSearchInput, playlistSearchBtn, pmPlaylistsContainer, pmFavoritePlaylistsContainer, pmFavoritePlaylistsGrid, pmAllPlaylistsGrid, pmTracksContainer, pmTracksHeader, pmPlaylistSearchInput, pmTrackSearchInput, createNewPlaylistBtnPm, moveTrackModal, moveTrackNameEl, moveTrackDestinationSelect, moveTrackConfirmBtn, moveTrackCancelBtn, modalCloseBtn, totalSongsStat, playlistsCreatedStat, downloadsInitiatedStat, songsFailedStat, linksProcessedStat, spotifyLinksStat, youtubeLinksStat, successRateStat, notificationsReceivedStat, resetStatsBtn, configCategoryHeader, themesCategoryHeader, animationsCategoryHeader, tabSpeedSlider, tabSpeedValue, dropdownSpeedSlider, dropdownSpeedValue, themeFadeSlider, themeFadeValue, autoCreatePlaylistInput, hideRefreshButtonsInput, hidePlaylistCountsInput, hideTrackNumbersInput, normalizeVolumeInput, hideSearchBarsInput, updateYtdlpBtn, clearCacheBtn, spotifyLink, spotifySearchInput, spotifyResultsDropdown, spotifyFilterBtn, spotifyFilterDropdown, spotifySearchLimitInput, checkForUpdatesBtn, downloadProgressContainer, downloadProgressBar, downloadEta },
        state: state,
        helpers: { showLoader, hideLoader, saveSettings },
        get playerAPI() { return playerAPI; } // Getter to ensure it's accessed after initialization
    };

    // --- SEARCH EVENT LISTENERS ---
    playlistSearchInput.addEventListener('input', () => {
        state.trackSearchQuery = playlistSearchInput.value.trim().toLowerCase();
        if (playerAPI.renderPlaylist) playerAPI.renderPlaylist();
    });
    playlistSearchBtn.addEventListener('click', () => {
        state.trackSearchQuery = playlistSearchInput.value.trim().toLowerCase();
        if (playerAPI.renderPlaylist) playerAPI.renderPlaylist();
    });
    pmPlaylistSearchInput.addEventListener('input', () => {
        state.playlistSearchQuery = pmPlaylistSearchInput.value.trim().toLowerCase();
        playlistSearchInputPlaylists.value = pmPlaylistSearchInput.value;
        if (state.isPmInitialized) initializePlaylistManagement(context); // Re-render
    });
    playlistSearchInputPlaylists.addEventListener('input', () => {
        state.playlistSearchQuery = playlistSearchInputPlaylists.value.trim().toLowerCase();
        pmPlaylistSearchInput.value = playlistSearchInputPlaylists.value;
        if (state.isPlayerInitialized) playerAPI.loadAndRenderPlaylists();
    });

    // --- Spotify Playlist Search ---
    spotifyFilterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        spotifyFilterDropdown.classList.toggle('hidden');
    });

    spotifyFilterDropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('spotify-filter-item')) {
            document.querySelectorAll('.spotify-filter-item').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            state.spotifySearchType = e.target.dataset.type;
            const typeName = e.target.textContent;
            spotifySearchInput.placeholder = `Search Spotify ${typeName}...`;
            spotifyFilterDropdown.classList.add('hidden');
            if (spotifySearchInput.value.trim().length >= 3) {
                spotifySearchInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    });

    spotifySearchInput.addEventListener('input', () => {
        clearTimeout(state.spotifySearchDebounce);
        const query = spotifySearchInput.value.trim();

        if (query.length < 3) {
            spotifyResultsDropdown.classList.add('hidden');
            return;
        }

        state.spotifySearchDebounce = setTimeout(async () => {
            const limit = parseInt(spotifySearchLimitInput.value, 10) || 10;
            const results = await window.electronAPI.searchSpotifyPlaylists({ query, type: state.spotifySearchType, limit });
            spotifyResultsDropdown.innerHTML = '';

            if (results.error) {
                const errorItem = document.createElement('div');
                errorItem.className = 'spotify-result-item';
                errorItem.innerHTML = `<p class="spotify-result-name" style="color: var(--danger-primary);">Error</p><p class="spotify-result-owner">${results.error}</p>`;
                spotifyResultsDropdown.appendChild(errorItem);
                spotifyResultsDropdown.classList.remove('hidden');
                return;
            }

            if (!results || results.length === 0) {
                const noResultsItem = document.createElement('div');
                noResultsItem.className = 'spotify-result-item';
                noResultsItem.innerHTML = `<p class="spotify-result-owner">No playlists found for "${query}"</p>`;
                spotifyResultsDropdown.appendChild(noResultsItem);
                spotifyResultsDropdown.classList.remove('hidden');
                return;
            }

            results.forEach(item => {
                const resultEl = document.createElement('div');
                resultEl.className = 'spotify-result-item';

                let ownerText = '';
                if (item.type === 'Playlist') ownerText = `by ${item.owner}`;
                else if (item.type === 'Track' || item.type === 'Album') ownerText = `by ${item.artist}`;

                let typeLabel = '';
                if (state.spotifySearchType === 'all' && item.type) {
                    typeLabel = `<span class="spotify-result-type">${item.type}</span>`;
                }

                resultEl.innerHTML = `
                    <div class="spotify-result-main">
                        <p class="spotify-result-name" title="${item.name}">${item.name}</p>
                        ${typeLabel}
                    </div>
                    <p class="spotify-result-owner">${ownerText}</p>`;
                
                resultEl.addEventListener('click', () => {
                    linksInput.value += (linksInput.value ? '\n' : '') + item.url;
                    spotifySearchInput.value = '';
                    spotifyResultsDropdown.classList.add('hidden');
                    linksInput.dispatchEvent(new Event('input', { bubbles: true })); // Trigger clear button check
                });
                spotifyResultsDropdown.appendChild(resultEl);
            });
            spotifyResultsDropdown.classList.remove('hidden');
        }, 300);
    });

    document.addEventListener('click', (e) => {
        if (!spotifySearchInput.contains(e.target) && !spotifyResultsDropdown.contains(e.target)) {
            spotifyResultsDropdown.classList.add('hidden');
        }
        if (!spotifyFilterBtn.contains(e.target) && !spotifyFilterDropdown.contains(e.target)) {
            spotifyFilterDropdown.classList.add('hidden');
        }
    });

    // --- Clear Input Button Logic ---
    function initializeClearButtons() {
        document.querySelectorAll('.input-container').forEach(container => {
            const input = container.querySelector('input, textarea');
            const clearBtn = container.querySelector('.clear-btn');
            if (input && clearBtn) {
                const toggleClearButton = () => clearBtn.classList.toggle('hidden', input.value.length === 0);
                input.addEventListener('input', toggleClearButton);
                clearBtn.addEventListener('click', () => {
                    input.value = '';
                    input.focus();
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                });
                toggleClearButton();
            }
        });
    }

    // --- Notification History Logic ---
    function saveNotificationHistory() {
        try {
            localStorage.setItem('notificationHistory', JSON.stringify(state.notificationHistory));
        } catch (e) {
            console.error("Failed to save notification history:", e);
        }
    }

    function loadNotificationHistory() {
        try {
            const storedHistory = localStorage.getItem('notificationHistory');
            if (storedHistory) state.notificationHistory = JSON.parse(storedHistory);
        } catch (e) {
            console.error("Failed to load notification history:", e);
            state.notificationHistory = [];
        }
    }

    function renderNotificationHistory() {
        if (!notificationHistoryContainer) return;
        notificationHistoryContainer.innerHTML = '';
        if (state.notificationHistory.length === 0) {
            notificationHistoryContainer.innerHTML = `<div class="empty-playlist-message">No notifications yet.</div>`;
            return;
        }
        state.notificationHistory.forEach(notif => {
            const item = document.createElement('div');
            item.className = `history-item ${notif.type}`;
            const iconMap = { success: '✓', error: '✗', info: 'ℹ️' };
            item.innerHTML = `
                <div class="history-icon">${iconMap[notif.type] || 'ℹ️'}</div>
                <div class="history-content">
                    <p class="history-title">${notif.title}</p>
                    <p class="history-message">${notif.message}</p>
                </div>
                <div class="history-timestamp">${new Date(notif.timestamp).toLocaleTimeString()}</div>
            `;
            notificationHistoryContainer.appendChild(item);
        });
    }

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all notification history?')) {
            state.notificationHistory = [];
            saveNotificationHistory();
            renderNotificationHistory();
            showNotification('info', 'History Cleared', 'Your notification history has been cleared.');
        }
    });

    // --- Toast Notification Logic ---
    function showNotification(type, title, message) {
        window.electronAPI.incrementNotificationStat();
        const timestamp = new Date().toISOString();
        state.notificationHistory.unshift({ type, title, message, timestamp });
        if (state.notificationHistory.length > 100) state.notificationHistory.pop();
        saveNotificationHistory();
        if (notificationHistoryView.classList.contains('active-view')) renderNotificationHistory();

        if (state.toastTimer) clearTimeout(state.toastTimer);
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        toastNotification.className = `toast-notification ${type}`;
        const iconMap = { success: '✓', error: '✗', info: 'ℹ️' };
        toastIcon.innerHTML = iconMap[type] || 'ℹ️';
        toastNotification.classList.remove('hidden');
        state.toastTimer = setTimeout(() => toastNotification.classList.add('hidden'), 5000);
    }
    context.helpers.showNotification = showNotification; // Add to context

    toastCloseBtn.addEventListener('click', () => {
        if (state.toastTimer) clearTimeout(state.toastTimer);
        toastNotification.classList.add('hidden');
    });

    // --- Title Bar Logic ---
    if (closeBtn) closeBtn.addEventListener('click', () => window.electronAPI.closeApp());

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
            if (state.isPlayerInitialized) playerAPI.loadAndRenderPlaylists();
        }
    });

    toggleSecretBtn.addEventListener('click', () => {
        const isPassword = clientSecretInput.type === 'password';
        clientSecretInput.type = isPassword ? 'text' : 'password';
        toggleSecretBtn.textContent = isPassword ? 'Hide' : 'Show';
    });

    function applyTheme(themeName) {
        const theme = themeColors[themeName];
        if (!theme) return;
        for (const [key, value] of Object.entries(theme)) root.style.setProperty(key, value);
        state.currentThemeName = themeName;
        document.querySelectorAll('.theme-button').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === themeName));
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
                const isFavorited = state.favoriteThemes.includes(themeId);
                if (isFavorited) state.favoriteThemes = state.favoriteThemes.filter(id => id !== themeId);
                else state.favoriteThemes.push(themeId);
                saveSettings();
                populateThemeGrid();
            });
            if (state.favoriteThemes.includes(themeId)) favoriteThemeGrid.appendChild(button);
            else themeGridContainer.appendChild(button);
        }
        favoritesContainer.classList.toggle('hidden', state.favoriteThemes.length === 0);
        document.querySelectorAll('.theme-button').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === state.currentThemeName));
    }

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
            state.favoriteThemes = currentConfig.favoriteThemes || [];
            state.favoritePlaylists = currentConfig.favoritePlaylists || [];
            const setSlider = (slider, valueEl, prop, value) => {
                slider.value = value;
                valueEl.textContent = `${value}s`;
                root.style.setProperty(prop, `${value}s`);
            };
            setSlider(tabSpeedSlider, tabSpeedValue, '--tab-switch-speed', currentConfig.tabSwitchSpeed || 0.3);
            setSlider(dropdownSpeedSlider, dropdownSpeedValue, '--dropdown-speed', currentConfig.dropdownSpeed || 0.4);
            setSlider(themeFadeSlider, themeFadeValue, '--theme-fade-speed', currentConfig.themeFadeSpeed || 0.3);
            fileExtensionInput.value = currentConfig.fileExtension || 'm4a';
            downloadThreadsInput.value = currentConfig.downloadThreads || 3;
            clientIdInput.value = currentConfig.spotify.clientId;
            clientSecretInput.value = currentConfig.spotify.clientSecret;
            downloadsPathInput.value = currentConfig.downloadsPath;
            playlistsPathInput.value = currentConfig.playlistsFolderPath || '';
            const setToggle = (input, bodyClass, value) => {
                input.checked = value;
                body.classList.toggle(bodyClass, value);
            };
            autoCreatePlaylistInput.checked = currentConfig.autoCreatePlaylist || false;
            setToggle(hideRefreshButtonsInput, 'hide-refresh-buttons', currentConfig.hideRefreshButtons || false);
            setToggle(hidePlaylistCountsInput, 'hide-playlist-counts', currentConfig.hidePlaylistCounts || false);
            setToggle(hideTrackNumbersInput, 'hide-track-numbers', currentConfig.hideTrackNumbers || false);
            setToggle(hideSearchBarsInput, 'hide-search-bars', currentConfig.hideSearchBars || false);
            normalizeVolumeInput.checked = currentConfig.normalizeVolume || false;
            spotifySearchLimitInput.value = currentConfig.spotifySearchLimit || 10;
        }
        [fileExtensionInput, downloadThreadsInput, clientIdInput, clientSecretInput, tabSpeedSlider, dropdownSpeedSlider, themeFadeSlider, autoCreatePlaylistInput, hideRefreshButtonsInput, hidePlaylistCountsInput, hideTrackNumbersInput, normalizeVolumeInput, hideSearchBarsInput, spotifySearchLimitInput].forEach(input => input.addEventListener('change', saveSettings));
        hideRefreshButtonsInput.addEventListener('change', () => body.classList.toggle('hide-refresh-buttons', hideRefreshButtonsInput.checked));
        hidePlaylistCountsInput.addEventListener('change', () => body.classList.toggle('hide-playlist-counts', hidePlaylistCountsInput.checked));
        hideTrackNumbersInput.addEventListener('change', () => body.classList.toggle('hide-track-numbers', hideTrackNumbersInput.checked));
        hideSearchBarsInput.addEventListener('change', () => body.classList.toggle('hide-search-bars', hideSearchBarsInput.checked));
        downloadThreadsInput.addEventListener('input', () => {
            const max = parseInt(downloadThreadsInput.max, 10), min = parseInt(downloadThreadsInput.min, 10);
            let value = parseInt(downloadThreadsInput.value, 10);
            if (isNaN(value)) return;
            if (value > max) downloadThreadsInput.value = max;
            else if (value < min && downloadThreadsInput.value !== '') downloadThreadsInput.value = min;
        });
        spotifySearchLimitInput.addEventListener('input', () => {
            const max = parseInt(spotifySearchLimitInput.max, 10), min = parseInt(spotifySearchLimitInput.min, 10);
            let value = parseInt(spotifySearchLimitInput.value, 10);
            if (isNaN(value)) return;
            if (value > max) spotifySearchLimitInput.value = max;
            else if (value < min && spotifySearchLimitInput.value !== '') spotifySearchLimitInput.value = min;
        });
        populateThemeGrid();
    };

    // --- Drag and Drop for Links ---
    homeView.addEventListener('dragover', (e) => { e.preventDefault(); e.stopPropagation(); dropZone.classList.add('active'); });
    homeView.addEventListener('dragleave', (e) => { e.preventDefault(); e.stopPropagation(); dropZone.classList.remove('active'); });
    homeView.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('active');
        const text = e.dataTransfer.getData('text/plain');
        if (text) linksInput.value += (linksInput.value ? '\n' : '') + text;
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
        if (!state.isPlayerInitialized) {
            playerAPI = initializePlayer(context);
            state.isPlayerInitialized = true;
        }
    });
    playlistManagementBtn.addEventListener('click', () => { showView(playlistManagementView, playlistManagementBtn); initializePlaylistManagement(context); });
    consoleBtn.addEventListener('click', () => showView(consoleView, consoleBtn));
    statsBtn.addEventListener('click', () => { showView(statsView, statsBtn); initializeStats(); });
    notificationHistoryBtn.addEventListener('click', () => { showView(notificationHistoryView, notificationHistoryBtn); renderNotificationHistory(); });
    helpBtn.addEventListener('click', () => showView(helpView, helpBtn));

    // --- Advanced Settings Actions ---
    updateYtdlpBtn.addEventListener('click', async () => {
        showNotification('info', 'yt-dlp Update', 'Checking for updates...');
        const result = await window.electronAPI.updateYtdlp();
        showNotification('info', 'yt-dlp Update', result);
    });
    checkForUpdatesBtn.addEventListener('click', () => {
        showNotification('info', 'Auto-Updater', 'Checking for updates...');
        window.electronAPI.checkForUpdates();
    });
    clearCacheBtn.addEventListener('click', async () => {
        const result = await window.electronAPI.clearLinkCache();
        if (result.success) showNotification('success', 'Cache Cleared', result.message);
        else showNotification('error', 'Cache Error', result.error);
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
    const setupSlider = (slider, valueEl, prop) => {
        slider.addEventListener('input', () => {
            const speed = slider.value;
            valueEl.textContent = `${speed}s`;
            root.style.setProperty(prop, `${speed}s`);
        });
    };
    setupSlider(tabSpeedSlider, tabSpeedValue, '--tab-switch-speed');
    setupSlider(dropdownSpeedSlider, dropdownSpeedValue, '--dropdown-speed');
    setupSlider(themeFadeSlider, themeFadeValue, '--theme-fade-speed');

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
            downloadProgressContainer.classList.add('hidden');
            if (payload && payload.success && payload.filesDownloaded > 0) {
                if (autoCreatePlaylistInput.checked) {
                    appendConsoleMessage('Automatically creating playlist...');
                    createPlaylistBtn.click();
                } else {
                    createPlaylistBtn.classList.remove('hidden');
                }
            }
        }
    });

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
        downloadProgressContainer.classList.remove('hidden');
        downloadProgressBar.style.width = '0%';
        downloadEta.textContent = 'Estimated time remaining: calculating...';
        window.electronAPI.startDownload(links);
    });
    cancelBtn.addEventListener('click', () => window.electronAPI.cancelDownload());
    bigCancelBtn.addEventListener('click', () => window.electronAPI.cancelDownload());
    createPlaylistBtn.addEventListener('click', async () => {
        const result = await window.electronAPI.createPlaylist();
        appendConsoleMessage(result);
        createPlaylistBtn.classList.add('hidden');
        if (!result.startsWith('Error:')) {
            showNotification('success', 'Playlist Created', 'Playlist created from last download session.');
            if (state.isPlayerInitialized) playerAPI.loadAndRenderPlaylists();
        }
    });

    // --- Settings Reset Logic ---
    document.getElementById('reset-settings-btn').addEventListener('click', async () => {
        const defaultSettings = await window.electronAPI.getDefaultSettings();
        applyTheme(defaultSettings.theme || 'dark');
        state.favoriteThemes = defaultSettings.favoriteThemes || [];
        state.favoritePlaylists = defaultSettings.favoritePlaylists || [];
        fileExtensionInput.value = defaultSettings.fileExtension || 'm4a';
        downloadThreadsInput.value = defaultSettings.downloadThreads || 3;
        clientIdInput.value = defaultSettings.spotify.clientId;
        clientSecretInput.value = defaultSettings.spotify.clientSecret;
        downloadsPathInput.value = defaultSettings.downloadsPath;
        autoCreatePlaylistInput.checked = defaultSettings.autoCreatePlaylist || false;
        spotifySearchLimitInput.value = defaultSettings.spotifySearchLimit || 10;
        const setToggle = (input, bodyClass, value) => {
            input.checked = value;
            body.classList.toggle(bodyClass, value);
        };
        setToggle(hideRefreshButtonsInput, 'hide-refresh-buttons', defaultSettings.hideRefreshButtons || false);
        setToggle(hidePlaylistCountsInput, 'hide-playlist-counts', defaultSettings.hidePlaylistCounts || false);
        setToggle(hideTrackNumbersInput, 'hide-track-numbers', defaultSettings.hideTrackNumbers || false);
        setToggle(hideSearchBarsInput, 'hide-search-bars', defaultSettings.hideSearchBars || false);
        const setSlider = (slider, valueEl, prop, value) => {
            slider.value = value;
            valueEl.textContent = `${value}s`;
            root.style.setProperty(prop, `${value}s`);
        };
        setSlider(tabSpeedSlider, tabSpeedValue, '--tab-switch-speed', defaultSettings.tabSwitchSpeed || 0.3);
        setSlider(dropdownSpeedSlider, dropdownSpeedValue, '--dropdown-speed', defaultSettings.dropdownSpeed || 0.4);
        setSlider(themeFadeSlider, themeFadeValue, '--theme-fade-speed', defaultSettings.themeFadeSpeed || 0.3);
        populateThemeGrid();
        saveSettings();
        showNotification('success', 'Settings Reset', 'All settings have been restored to their defaults.');
    });

    // --- Stats Logic ---
    async function initializeStats() {
        const statsData = await window.electronAPI.getStats();
        if (statsData) {
            totalSongsStat.textContent = statsData.totalSongsDownloaded || 0;
            playlistsCreatedStat.textContent = statsData.playlistsCreated || 0;
            downloadsInitiatedStat.textContent = statsData.downloadsInitiated || 0;
            songsFailedStat.textContent = statsData.songsFailed || 0;
            linksProcessedStat.textContent = statsData.totalLinksProcessed || 0;
            spotifyLinksStat.textContent = statsData.spotifyLinksProcessed || 0;
            youtubeLinksStat.textContent = statsData.youtubeLinksProcessed || 0;
            notificationsReceivedStat.textContent = statsData.notificationsReceived || 0;
            const successRate = (statsData.downloadsInitiated > 0) ? ((statsData.totalSongsDownloaded / (statsData.totalSongsDownloaded + statsData.songsFailed)) * 100) : 0;
            successRateStat.textContent = `${successRate.toFixed(1)}%`;
        }
    }
    resetStatsBtn.addEventListener('click', async () => {
        if (confirm('Are you sure you want to reset all statistics? This cannot be undone.')) {
            await window.electronAPI.resetStats();
            initializeStats();
            showNotification('info', 'Stats Reset', 'Your statistics have been cleared.');
        }
    });

    // --- Help View Logic ---
    spotifyLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.electronAPI.openExternalLink(e.target.href);
    });

    // --- Auto Updater Logic ---
    window.electronAPI.onShowUpdateNotAvailableNotification(() => showNotification('success', 'Auto-Updater', 'Your application is up to date.'));
    window.electronAPI.onUpdateAvailable(() => {
        updateNotification.classList.remove('hidden');
        updateMessage.textContent = 'A new update is available. Downloading now...';
        showNotification('info', 'Update Found', 'Downloading new version...');
    });
    window.electronAPI.onUpdateDownloadProgress((progressObj) => {
        updateNotification.classList.remove('hidden');
        const progress = progressObj.percent.toFixed(1);
        updateMessage.textContent = `Downloading update... ${progress}%`;
    });
    window.electronAPI.onUpdateDownloaded(() => {
        updateNotification.classList.remove('hidden');
        updateMessage.textContent = 'Update downloaded. Click the button to install on restart.';
        restartBtn.classList.remove('hidden');
        showNotification('success', 'Update Ready', 'Click the restart button or the system notification to install.');
    });
    restartBtn.addEventListener('click', () => window.electronAPI.restartApp());

    // --- Global Media Key Listeners ---
    window.electronAPI.onMediaKeyPlayPause(() => { if (state.isPlayerInitialized && playerAPI.togglePlayPause) playerAPI.togglePlayPause(); });
    window.electronAPI.onMediaKeyNext(() => { if (state.isPlayerInitialized && playerAPI.playNextTrack) playerAPI.playNextTrack(); });
    window.electronAPI.onMediaKeyPrev(() => { if (state.isPlayerInitialized && playerAPI.playPreviousTrack) playerAPI.playPreviousTrack(); });

    window.electronAPI.onDownloadProgress(({ progress, eta }) => {
        if (downloadProgressBar) downloadProgressBar.style.width = `${progress}%`;
        if (downloadEta) downloadEta.textContent = `Estimated time remaining: ${eta}`;
    });

    // --- Initial Load ---
    initializeClearButtons();
    loadNotificationHistory();
    loadInitialSettings();
});