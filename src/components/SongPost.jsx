import { Link } from "react-router-dom";
import song from "./fillerSong";
import "../styles/songpost.css";

function SongPost() {
    return (
        <article className="song-post">
            <Link to="/post">
                <img
                    src={`${process.env.PUBLIC_URL}/${song.artwork}`}
                    alt={`${song.title} artwork`} />
            </Link>

            <div className="song-info">
                <h2>
                    <Link to="/post">{song.title}</Link>
                </h2>
                <p>by {song.artist}</p>
                <span className="song-genre">{song.genre}</span>
                <p>{song.description}</p>
                <p>Uploaded by {song.username}</p>
            </div>
        </article>
    );
}

export default SongPost;