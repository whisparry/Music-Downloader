// This file contains all logic for the music player view.

let ctx = {}; // To hold context (elements, state, helpers)
const audio = new Audio();

// --- Helper Functions ---
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- UI Update Functions ---
function updatePlayPauseButton(isPlaying) {
    const { playPauseBtn } = ctx.elements;
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    playIcon.classList.toggle('hidden', isPlaying);
    pauseIcon.classList.toggle('hidden', !isPlaying);
}

function updateUI() {
    const { progressBar, currentTime, totalDuration } = ctx.elements;
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress || 0}%`;
    currentTime.textContent = formatTime(audio.currentTime);
    totalDuration.textContent = formatTime(audio.duration || 0);
}

// --- Player Actions ---
function play() {
    if (audio.src) {
        audio.play().catch(e => console.error("Error playing audio:", e));
    }
}

function pause() {
    audio.pause();
}

function togglePlayPause() {
    if (audio.paused) {
        play();
    } else {
        pause();
    }
}

function seek(event) {
    const { progressBarContainer } = ctx.elements;
    const bounds = progressBarContainer.getBoundingClientRect();
    const percentage = (event.clientX - bounds.left) / bounds.width;
    audio.currentTime = audio.duration * percentage;
}

function setVolume(level) {
    audio.volume = level;
    const { volumeIconUp, volumeIconMute } = ctx.elements;
    audio.muted = level === 0;
    volumeIconUp.classList.toggle('hidden', audio.muted);
    volumeIconMute.classList.toggle('hidden', !audio.muted);
}

function toggleMute() {
    audio.muted = !audio.muted;
    const { volumeSlider, volumeIconUp, volumeIconMute } = ctx.elements;
    volumeSlider.value = audio.muted ? 0 : audio.volume;
    volumeIconUp.classList.toggle('hidden', audio.muted);
    volumeIconMute.classList.toggle('hidden', !audio.muted);
}

// --- Initialization ---
export function initializePlayer(context) {
    ctx = context;
    const { 
        playPauseBtn, prevBtn, nextBtn,
        progressBarContainer, volumeSlider, volumeIconContainer,
        shuffleBtn, repeatBtn
    } = ctx.elements;

    // --- Event Listeners for Audio Element ---
    audio.addEventListener('play', () => updatePlayPauseButton(true));
    audio.addEventListener('pause', () => updatePlayPauseButton(false));
    audio.addEventListener('timeupdate', updateUI);
    audio.addEventListener('loadedmetadata', updateUI);
    audio.addEventListener('volumechange', () => {
        if (volumeSlider) volumeSlider.value = audio.muted ? 0 : audio.volume;
    });
    // audio.addEventListener('ended', playNext); // TODO: Implement queue and playNext

    // --- Event Listeners for UI Controls ---
    playPauseBtn.addEventListener('click', togglePlayPause);
    progressBarContainer.addEventListener('click', seek);
    volumeSlider.addEventListener('input', (e) => setVolume(e.target.value));
    volumeIconContainer.addEventListener('click', toggleMute);

    // prevBtn.addEventListener('click', playPrev); // TODO
    // nextBtn.addEventListener('click', playNext); // TODO
    // shuffleBtn.addEventListener('click', toggleShuffle); // TODO
    // repeatBtn.addEventListener('click', cycleRepeat); // TODO

    // --- Initial State ---
    setVolume(volumeSlider.value);
    updatePlayPauseButton(false);
}