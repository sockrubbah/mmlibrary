import song from "../components/fillerSong";
import SongPost from "../components/SongPost";
import "../styles/share.css";

function Share() {
  return (
    <div className="page-share">
      <main>
        <section className="page-intro">
          <h1>Share a Record</h1>
          <p>Put your favorite new discoveries on the collective radar.</p>
        </section>

        <div className="share-layout">
          <section className="record-form">
            <section className="form-section">
              <p>Song Info</p>
              <p>Track Title</p>
              <div className="static-field">{song.title}</div>

              <p>Streaming Link (Bandcamp, SoundCloud, Spotify)</p>
              <div className="static-field">Track link preview</div>

              <p>
                About the Track (Tell the community why you're sharing this)
              </p>
              <div className="static-field">{song.description}</div>
            </section>

            <section className="form-section genre-section">
              <p>Classify Song</p>
              <p>Select primary genres</p>

              <div className="genre-options">
                <p><span>Ambient</span></p>
                <p><span>Post-Punk</span></p>
                <p><span>IDM</span></p>
                <p><span>Shoegaze</span></p>
                <p><span>Hyperpop</span></p>
              </div>

              <p>Add custom descriptors (comma separated)</p>
              <div className="static-field">
                e.g., tape-hiss, raw-drums, lo-fi
              </div>
            </section>

            <div className="form-actions">
              <button className="draft-button" type="button">
                Save as Draft
              </button>
              <button className="publish-button" type="button">
                Publish Curated Song
              </button>
            </div>
          </section>

          <aside className="preview-column">
            <h2>Visual Preview</h2>
            <SongPost/>

            <section className="verification-card">
              <h3>Track Preview</h3>
              <p>Preview of the community’s featured track.</p>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Share;