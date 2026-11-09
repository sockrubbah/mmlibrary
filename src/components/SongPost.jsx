import { Link } from "react-router-dom";
import "../styles/songpost.css";

const API_LINK = "https://musicmultiversebackend.onrender.com/";

function SongPost({ song, apiLink }) {
    if (!song) return null;

    return (
        <article className="song-post">
            <Link to={`/post/${song._id}`}>
                {song.song_picture && (
                    <img
                        src={
                            new URL(
                                song.song_picture,
                                `${apiLink}/`
                            ).href
                        }
                        alt={`${song.song_name} artwork`}
                    />
                )}
            </Link>
            <div className="song-info">
                <h2>
                    <Link to={`/post/${song._id}`}>
                        {song.song_name}
                    </Link>
                </h2>
                <p>by {song.song_artist}</p>
                <span className="song-genre">
                    {song.song_genre}
                </span>
                {song.song_description && (
                    <p>{song.song_description}</p>
                )}
                <p>
                    Uploaded by {song.post?.username || "Unknown user"}
                </p>
                {song.post?.text && (
                    <p>{song.post.text}</p>
                )}
            </div>
        </article>
    );
}

export default SongPost;