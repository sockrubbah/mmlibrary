import SongPost from "../components/SongPost";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="page-profile">
      <main>
        <section className="profile-hero">
          <img
            className="cover-image"
            src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
            alt="Close-up of a vintage turntable"/>

          <div className="profile-summary">
            <img
              className="profile-photo"
              src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
              alt="Alex Chen holding a camera"/>

            <div className="profile-copy">
              <h1>Alex Chen</h1>
              <a className="username" href="#">
                @desert_sander
              </a>
              <p>
                Sound designer &amp; cassette collector. Excavating rare
                post-punk, shoegaze, and classic 90s ambient. Always digging.
              </p>

              <dl className="profile-stats">
                <div>
                  <dt>142</dt>
                  <dd>Shares</dd>
                </div>
                <div>
                  <dt>1.4k</dt>
                  <dd>Followers</dd>
                </div>
                <div>
                  <dt>380</dt>
                  <dd>Following</dd>
                </div>
              </dl>
            </div>

            <div className="profile-actions">
              <a className="edit-button" href="#">
                Edit Profile
              </a>
              <a className="share-crate" href="#">
                Share Crate
              </a>
            </div>
          </div>
        </section>

        <section className="profile-content">
          <aside className="profile-sidebar">
            <section className="sidebar-card">
              <h2>Preferred Vibes</h2>
              <div className="vibe-tags">
                <a className="selected" href="#">Post-Punk</a>
                <a className="selected" href="#">Shoegaze</a>
                <a className="selected" href="#">Ambient</a>
                <a href="#">IDM</a>
                <a href="#">Slowcore</a>
              </div>
            </section>

            <section className="sidebar-card links-card">
              <h2>Links</h2>
              <a href="https://bandcamp.com/desert_sander">
                bandcamp.com/desert_sander
              </a>
              <a href="https://soundcloud.com/sand-drift">
                soundcloud.com/sand-drift
              </a>
            </section>
          </aside>

          <section className="profile-library">
            <nav className="library-tabs">
              <a className="active" href="#shared-tracks">
                Shared Tracks (42)
              </a>
              <a href="#">Playlists (8)</a>
              <a href="#">Favorites</a>
            </nav>

            <div id="shared-tracks">
              <SongPost/>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Profile;