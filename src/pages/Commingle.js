import SongPost from "../components/SongPost";
import "../styles/commingle.css";

function Commingle() {
  return (
    <div className="page-commingle">
      <main>
        <section className="page-intro">
          <h1>Commingle Feed</h1>
          <p>
            The continuous stream of community discoveries, reactions, and
            sonic discourse.
          </p>
        </section>

        <section className="commingle-layout">
          <div className="feed-column">
            <section className="create-post">
              <img
                src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                alt="Your profile picture"/>
              
              <div className="post-fields">
                <div className="static-field">
                  What are you listening to right now?
                </div>

                <div className="post-tools">
                  <button className="add-track" type="button">
                    ♫ Add Track Link
                  </button>
                  <button className="add-artwork" type="button">
                    ▧ Artwork
                  </button>
                  <button className="post-button" type="button">
                    Post to Feed
                  </button>
                </div>
              </div>
            </section>

            <div id="feed-posts">
              <SongPost/>
            </div>

            <section className="live-room">
              <h2>Join Commingle Live</h2>
              <p>
                Drop into a live listening room with the community and react
                in real time.
              </p>

              <div className="live-session">
                <div>
                  <h3>Ambient Techno Session</h3>
                  <p>Starts in 15 minutes</p>
                </div>
                <a href="#">▷ Join Live</a>
              </div>
            </section>
          </div>

          <aside className="sidebar">
            <section className="trending">
              <h2>Trending Waves</h2>
              <ul>
                <li>
                  <strong>#Shoegaze</strong>
                  <span>1.2k tracks</span>
                </li>
                <li>
                  <strong>#Breakcore</strong>
                  <span>840 tracks</span>
                </li>
                <li>
                  <strong>#Ethereal</strong>
                  <span>620 tracks</span>
                </li>
                <li>
                  <strong>#IDM</strong>
                  <span>590 tracks</span>
                </li>
              </ul>
            </section>

            <section className="follow-card">
              <h2>Diggers to Follow</h2>

              <article>
                <img
                  src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                  alt="Acid Jerk profile picture"/>
                <div>
                  <h3>@acid_jerk</h3>
                  <p>Rare vinyl &amp; house digger.</p>
                </div>
                <button type="button">Follow</button>
              </article>

              <article>
                <img
                  src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                  alt="Shoegazer 99 profile picture"/>
                <div>
                  <h3>@shoegazer_99</h3>
                  <p>Wall of sound archivist.</p>
                </div>
                <button type="button">Follow</button>
              </article>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default Commingle;