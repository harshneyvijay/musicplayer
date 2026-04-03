let currentIndex = -1;
let isPlaying = false;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

// PLAY SONG
function playSong(song) {
    currentIndex = songs.indexOf(song);

    audio.src = "/songs/" + song;
    audio.play();

    title.innerText = song.replace(".mp3", "");
    playBtn.innerText = "⏸";
    isPlaying = true;
}

// TOGGLE PLAY/PAUSE
function toggle() {
    if (!audio.src) return;

    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶";
    } else {
        audio.play();
        playBtn.innerText = "⏸";
    }

    isPlaying = !isPlaying;
}

// NEXT
function next() {
    if (songs.length === 0) return;
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(songs[currentIndex]);
}

// PREVIOUS
function prev() {
    if (songs.length === 0) return;
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[currentIndex]);
}

// AUTO NEXT
audio.addEventListener("ended", next);

// PROGRESS BAR
audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    progress.value = (audio.currentTime / audio.duration) * 100;

    document.getElementById("time").innerText =
        format(audio.currentTime) + " / " + format(audio.duration);
});

// SEEK
progress.addEventListener("input", () => {
    if (!audio.duration) return;
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// VOLUME
volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

// FORMAT TIME
function format(time) {
    let m = Math.floor(time / 60);
    let s = Math.floor(time % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
}