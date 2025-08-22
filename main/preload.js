const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // FIX: Ensure all function calls are correctly bridged to their kebab-case backend handlers.
    // This was the primary cause of the playlists not loading.
    getSettings: () => ipcRenderer.invoke('get-settings'),
    saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
    getDefaultSettings: () => ipcRenderer.invoke('get-default-settings'),
    startDownload: (links) => ipcRenderer.send('start-download', links),
    cancelDownload: () => ipcRenderer.send('cancel-download'),
    createPlaylist: () => ipcRenderer.invoke('create-playlist'),
    getPlaylists: () => ipcRenderer.invoke('get-playlists'),
    getPlaylistTracks: (path) => ipcRenderer.invoke('get-playlist-tracks', path),
    getLibraryStats: () => ipcRenderer.invoke('get-library-stats'),
    getStats: () => ipcRenderer.invoke('get-stats'),
    resetStats: () => ipcRenderer.invoke('reset-stats'),
    clearLinkCache: () => ipcRenderer.invoke('clear-link-cache'),
    deleteTrack: (filePath) => ipcRenderer.invoke('delete-track', filePath),
    deletePlaylist: (path) => ipcRenderer.invoke('delete-playlist', path),
    moveTrack: (data) => ipcRenderer.invoke('move-track', data),
    createNewPlaylist: () => ipcRenderer.invoke('create-new-playlist'),
    renamePlaylist: (data) => ipcRenderer.invoke('rename-playlist', data),
    renameTrack: (data) => ipcRenderer.invoke('rename-track', data),
    openFolderDialog: () => ipcRenderer.invoke('open-folder-dialog'),
    getYtdlpCount: () => ipcRenderer.invoke('get-ytdlp-count'),
    updateYtdlp: () => ipcRenderer.invoke('update-ytdlp'),
    openExternalLink: (url) => ipcRenderer.send('open-external-link', url),
    showInExplorer: (path) => ipcRenderer.send('show-in-explorer', path),
    closeApp: () => ipcRenderer.send('close-app'),
    restartApp: () => ipcRenderer.send('restart-app'),
    onUpdateStatus: (callback) => ipcRenderer.on('update-status', (event, ...args) => callback(...args)),
    onUpdateAvailable: (callback) => ipcRenderer.on('update-available', (event, ...args) => callback(...args)),
    onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', (event, ...args) => callback(...args)),
    onShowCheckingForUpdateNotification: (callback) => ipcRenderer.on('show-checking-for-update-notification', callback),
    onMediaKeyPlayPause: (callback) => ipcRenderer.on('media-key-play-pause', callback),
    onMediaKeyNext: (callback) => ipcRenderer.on('media-key-next', callback),
    onMediaKeyPrev: (callback) => ipcRenderer.on('media-key-prev', callback),
    incrementNotificationStat: () => ipcRenderer.send('increment-notification-stat')
    }
  );