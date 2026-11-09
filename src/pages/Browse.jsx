import { Link } from "react-router-dom";
import SongPost from "../components/SongPost";
import "../styles/browse.css";
import { useEffect, useState } from "react";

const API_LINK = "https://musicmultiversebackend.onrender.com";

function Browse() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSongs() {
      try {
        setLoading(true);
        const response = await fetch(`${API_LINK}/api/songs`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch songs from server.");
        }
        
        const data = await response.json();
        setSongs(data);
      } catch (err) {
        console.error("Error loading songs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSongs();
  }, []);

  return (
    <div className="page-browse">
      <main>
        <section className="browse-hero">
          <div className="hero-copy">
            <p className="eyebrow">EDITOR'S SELECTION</p>
            <h1>
              The Sound of the
              <br/>
              Digital Underground
            </h1>
            <p className="hero-description">
              Unearth the finest independent releases selected by a community
              of meticulous diggers. No corporate algorithms. Just pure human
              frequency.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#recent-curations">
                Start Digging
              </a>
              <a className="secondary-button" href="#radar">
                Curator Rankings
              </a>
            </div>
          </div>

          <img
            className="hero-art"
            src={`${API_LINK}/images/digital-underground.svg`}
            alt="Abstract violet and blue sound waves with geometric shapes" 
          />
        </section>

        <section className="filter-bar">
          <div className="genre-filters">
            <button className="selected" type="button">All Genres</button>
            <button type="button">Ambient</button>
            <button type="button">Post-Punk</button>
            <button type="button">Shoegaze</button>
            <button type="button">Hyperpop</button>
            <button type="button">UK Garage</button>
            <button type="button">IDM</button>
            <button type="button">Acid House</button>
            <button type="button">Slowcore</button>
            <button type="button">Dreampop</button>
          </div>

          <div className="track-search">
            <span>⌕</span>
            <div className="static-field">
              Search tracks, artists, curators...
            </div>
          </div>
        </section>

        <section className="browse-content">
          <div className="curations" id="recent-curations">
            <h2>Recent Curations</h2>

            <div id="song-box">
              {loading && <p>Loading tracks from the underground...</p>}
              {error && <p style={{ color: "red" }}>Error: {error}</p>}
              
              {!loading && !error && songs.length === 0 && (
                <p>No tracks found in the archives.</p>
              )}

              {!loading && songs.map((song) => (
                <div key={song._id} style={{ marginBottom: "20px" }}>
                  <SongPost song={song} apiLink={API_LINK} />
                </div>
              ))}
            </div>
          </div>

          <aside className="radar-column" id="radar">
            <h2>On the Radar</h2>
            <section className="radio-card">
              <h3>Crate Diggers Radio</h3>
              <p>
                Tune into our 24/7 collective stream. Tracks added live by
                active moderators.
              </p>
              <Link to="/commingle">Tune In Live</Link>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default Browse;