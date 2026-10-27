import "Song.css";

const Song = (item) => {
    return (
        <section className="song">
            <h3>{item.song_name}</h3>
            <p>{item.song_artist}</p>
            <span>{item.song_genre}</span>
        </section>
    )
}

export default Song;