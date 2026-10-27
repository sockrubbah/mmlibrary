import { Link } from "react-router-dom";
import SongPost from "../components/SongPost";
import "../styles/post.css";

function Post() {
  return (
    <div className="page-post">
      <main>
        <section className="page-heading">
          <p>
            <Link to="/commingle">Commingle Feed</Link>
            {" "}<span>/</span> Post Details
          </p>
          <h1>Record Discovery</h1>
        </section>

        <div className="post-layout">
          <div className="main-column">
            <SongPost/>

            <section className="discussion">
              <div className="discussion-heading">
                <h2>Discussion (9 Replies)</h2>
                <button type="button">Newest first</button>
              </div>

              <section className="reply-form">
                <div className="reply-user">
                  <img
                    src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                    alt="Your profile picture"/>
                  <strong>@you</strong>
                </div>

                <div className="static-field">
                  Write a respectful reply... (Use Markdown-like references
                  or share a track)
                </div>

                <div className="reply-actions">
                  <button type="button">Attach Record</button>
                  <button type="button">Post Reply</button>
                </div>
              </section>

              <article className="comment">
                <header>
                  <img
                    src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                    alt="Acid Jerk profile picture"/>
                  <div>
                    <h3>
                      @acid_jerk <span>MODERATOR</span>
                    </h3>
                    <time dateTime="PT1H">1 hour ago</time>
                  </div>
                  <button type="button">♡ 18</button>
                </header>

                <p>
                  Agreed! The sub-bass on this is incredibly well-controlled.
                  Tokyo's underground is carrying the torch for deep ambient
                  right now. Reminds me of classic 90s Susumu Yokota releases.
                </p>
              </article>

              <article className="comment">
                <header>
                  <img
                    src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                    alt="Shoegazer 99 profile picture"/>
                  <div>
                    <h3>
                      @shoegazer_99 <span>TOP DIGGER</span>
                    </h3>
                    <time dateTime="PT45M">45 mins ago</time>
                  </div>
                  <button type="button">♡ 11</button>
                </header>

                <p>
                  The synth textures are so lush and layered. Feels like
                  walking through a neon-drenched rainy street. Instant
                  bookmark for my midnight commute playlists.
                </p>
              </article>

              <article className="comment">
                <header>
                  <img
                    src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                    alt="Fuzz Lord profile picture"/>
                  <div>
                    <h3>
                      @Fuzz_Lord <span>DIGGER</span>
                    </h3>
                    <time dateTime="PT20M">20 mins ago</time>
                  </div>
                  <button type="button">♡ 6</button>
                </header>

                <p>
                  I was skeptical at first, but the mid-track modulation
                  totally won me over. Absolute structural mastery here.
                </p>
              </article>
            </section>
          </div>

          <aside className="sidebar">
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
                <li>
                  <strong>#Ambient</strong>
                  <span>480 tracks</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div>
          <h2>Music Multiverse</h2>
          <p>
            A modular archive curated by human hands. Dedicated to
            <br/>
            independent artists and active music explorers.
          </p>
        </div>

        <nav>
          <h3>Company</h3>
          <Link to="/about">About us</Link>
          <a href="#">Press kit</a>
        </nav>

        <nav>
          <h3>Resources</h3>
          <a href="#">Guidelines</a>
          <a href="#">Support</a>
        </nav>
      </footer>
    </div>
  );
}

export default Post;