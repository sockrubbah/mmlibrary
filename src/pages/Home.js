import song from "../components/fillerSong";
import { Link } from "react-router-dom";
import SongPost from "../components/SongPost";
import "../styles/home.css";

function Home() {
  return (
    <div className="page-home">
      <main>
        <section id="first-section">
          <div id="hero-text">
            <h1 id="main-text">
              Discover and share the infinite sounds of the Music Multiverse.
            </h1>
            <p>
              Explore a vast library of songs, connect with fellow listeners,
              and find your next favorite track.
            </p>

            <div id="searchbar">
              <div id="search-symbol">🔍︎</div>
              <div className="static-field">
                Search for a song, artist, or playlist...
              </div>
            </div>
          </div>

          <img
            className="homepage-video"
            src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
            alt={`${song.title} featured artwork`}/>
        </section>

        <section className="section-header">
          <p>SONG OF THE DAY</p>
        </section>

        <section className="homepage-content">
          <div id="sotd-content">
            <SongPost/>
          </div>
        </section>

        <section className="section-header">
          <p>EXPLORE GENRES</p>
          <span id="browse-button">
            <Link to="/browse">browse →</Link>
          </span>
        </section>

        <section className="genre-content">
          <div className="genre-box">
            <img
              className="genre-icon"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Headphones icon"/>
            <h3>Lo-fi</h3>
            <p className="genre-desc">Shared by @chillbeats</p>
          </div>

          <div className="genre-box">
            <img
              className="genre-icon"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Violin icon"/>
            <h3>Indie Rock</h3>
            <p className="genre-desc">Shared by @indiemusic</p>
          </div>

          <div className="genre-box">
            <img
              className="genre-icon"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Microphone icon"/>
            <h3>Jazz</h3>
            <p className="genre-desc">Shared by @jazzmaster</p>
          </div>

          <div className="genre-box">
            <img
              className="genre-icon"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Electronic music icon"/>
            <h3>Electronic</h3>
            <p className="genre-desc">Shared by @technozone</p>
          </div>

          <div className="genre-box">
            <img
              className="genre-icon"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Speaker icon"/>
            <h3>Hip Hop</h3>
            <p className="genre-desc">Shared by @hiphopcentral</p>
          </div>

          <div className="genre-box">
            <img
              className="genre-icon"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Classical music icon"/>
            <h3>Classical</h3>
            <p className="genre-desc">Shared by @classical</p>
          </div>
        </section>

        <section className="section-header">
          <p>COMMINGLE</p>
          <span id="commingle-browse-button">
            <Link to="/commingle">browse →</Link>
          </span>
        </section>

        <section className="commingle-content">
          <div id="left-commingle">
            <h1>Join the Commingle</h1>
            <p>
              Commingle is a live listening party where users share and
              discover music together in real time. Drop into a room, share
              your favorite tracks, and vibe with the community.
            </p>
            <Link id="enter-commingle" to="/commingle">
              ▷ Enter Commingle
            </Link>
          </div>

          <div id="right-commingle">
            <div id="right-commingle-header">
              <h3>
                The Daily Groove
                <br/>
                <span id="listener-count">1,240 listeners</span>
              </h3>
              <p>LIVE NOW</p>
            </div>

            <div id="commingle-song-group">
              <img
                id="live-image"
                src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                alt={`${song.title} artwork`}/>
              <div id="commingle-live-info">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </div>

            <p id="commingle-participants">
              Active participants:
              <img
                className="commingle-icon"
                src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                alt="Listening group icons"/>
            </p>
          </div>
        </section>

        <div id="share-a-song-footer">
          <h3>Help Contribute To The Multiverse</h3>
          <p>
            Share your music with others by uploading your first song!
          </p>
          <Link id="upload-first-track" to="/share">
            Upload Your First Track!
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;