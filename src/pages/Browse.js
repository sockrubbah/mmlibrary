import song from "../components/fillerSong";
import { Link } from "react-router-dom";
import SongPost from "../components/SongPost";
import "../styles/browse.css";

function Browse() {
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
            src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
            alt="Abstract violet and blue sound waves with geometric shapes" />
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
              <SongPost/>
            </div>
          </div>

          <aside className="radar-column" id="radar">
            <h2>On the Radar</h2>

            <ol className="radar-list">
              <li>
                <span className="rank">01</span>
                <div>
                  <strong>{song.title}</strong>
                  <span>{song.artist}</span>
                </div>
                <div className="score">
                  <strong>4.2k</strong>
                  <span>+12%</span>
                </div>
              </li>

              <li>
                <span className="rank">02</span>
                <div>
                  <strong>{song.title}</strong>
                  <span>{song.artist}</span>
                </div>
                <div className="score">
                  <strong>3.8k</strong>
                  <span>+8%</span>
                </div>
              </li>

              <li>
                <span className="rank">03</span>
                <div>
                  <strong>{song.title}</strong>
                  <span>{song.artist}</span>
                </div>
                <div className="score">
                  <strong>3.1k</strong>
                  <span>+24%</span>
                </div>
              </li>

              <li>
                <span className="rank">04</span>
                <div>
                  <strong>{song.title}</strong>
                  <span>{song.artist}</span>
                </div>
                <div className="score">
                  <strong>2.9k</strong>
                  <span>-2%</span>
                </div>
              </li>
            </ol>

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