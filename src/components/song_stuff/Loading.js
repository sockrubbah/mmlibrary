import React, { useState, useEffect } from 'react';

const MySongs = () => {
    const [songList, setSongList] = useState(null)

    useEffect(() => {
        const base_url = "https://sockrubbah.github.io/projects/part7/song.json";

        const getSongs = async () => {
            const response = await fetch(base_url);
            const result = await response.json()

            if (!response.ok) {
                throw new Error("Could not load song data.");
            }

            setSongList(result)
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
        <div>
            {songlist ? (
                <div>
                    <h3>{item.song_name}</h3>
                    <p>{item.song_artist}</p>
                    <span>{item.song_genre}</span>
                </div>) : (
                <p> Loading posts...</p>
            )}
            </div>
    )
}

export default MySongs