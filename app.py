from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

SONG_FOLDER = "songs"

@app.route("/")
def index():
    songs = [f for f in os.listdir(SONG_FOLDER) if f.endswith(".mp3")]
    return render_template("index.html", songs=songs)

@app.route("/songs/<filename>")
def get_song(filename):
    return send_from_directory(SONG_FOLDER, filename)

if __name__ == "__main__":
    app.run(debug=True)