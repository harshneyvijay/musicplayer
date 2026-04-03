# 🎧 Web Music Player

This is a simple and clean web-based music player built using Flask, HTML, CSS, and JavaScript. It lets you play songs from a playlist with basic controls like play, pause, next, previous, volume, and progress tracking.

---

## 🚀 Features

* Play and pause songs
* Skip to next or previous track
* Progress bar with seek functionality
* Volume control
* Auto-play next song
* Clean and modern UI inspired by Spotify

---

## 🛠️ Tech Stack

* Backend: Flask (Python)
* Frontend: HTML, CSS, JavaScript
* Audio: HTML5 audio element

---

## 📁 Project Structure

music-player/
│
├── app.py
├── songs/
│   ├── song1.mp3
│   ├── song2.mp3
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── requirements.txt
└── README.md

---

## ⚙️ How to Run

1. Clone the repo
   git clone https://github.com/your-username/music-player.git

2. Go into the folder
   cd music-player

3. Create virtual environment
   python -m venv venv

4. Activate it (Windows)
   venv\Scripts\activate

5. Install dependencies
   pip install -r requirements.txt

6. Run the app
   python app.py

7. Open in browser
   http://127.0.0.1:5000

---

## 🎧 How it works

Songs are stored in the `songs` folder. Flask sends the list of songs to the frontend, and JavaScript plays them using the browser’s audio player.

---

## ⚠️ Note

This is a basic version where songs are loaded from the server. Uploading songs is not supported in deployed versions unless cloud storage is added.

---

## 🌍 Deployment

You can deploy this using platforms like Render or Railway.

---

## 💡 Future Improvements

* Add user login
* Upload songs using cloud storage
* Add search feature
* Add album covers
* Create playlists

---

## 👨‍💻 Author

Harshney

---

If you like this project, feel free to star it ⭐
