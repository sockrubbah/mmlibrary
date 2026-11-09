import { useState, useEffect } from 'react';

const MySongs = () => {
    const [songList, setSongList] = useState([]);

    useEffect(() => {
        const base_url = "https://musicmultiversebackend.onrender.com/";

        const getSongs = async () => {
            const response = await axios.get(base_url);
            if (!response.ok) {
                throw new Error("Could not load song data.");
            }

            setSongList(response.data);
        }

        const createImage = (src, alt, className = "") => {
            const image = document.createElement("img");
            image.src = src;
            image.alt = alt;

            if (className) {
                image.classList.add(className);
            }

            return image;
        }

        getSongs()
    }, [])

    return (
        <div id="song-list" className="song">
            {songList.map((song) => (
                <Song
                    name = {song.song_name}
                    artist = {song.song_artist}
                    genre = {song.song_genre}
                />
            ))}

        </div>
    )
}

export default MySongs