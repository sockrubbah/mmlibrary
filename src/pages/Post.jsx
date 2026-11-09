import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SongPost from "../components/SongPost";
import "../styles/post.css";

const API_LINK = "https://musicmultiversebackend.onrender.com/";

function Post() {
  const { id } = useParams();

  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadSong() {
      setLoading(true);
      setError("");
      setSong(null);

      try {
        const response = await fetch(`${API_ORIGIN}/api/songs`);

        if (!response.ok) {
          throw new Error("Could not load the post.");
        }

        const songs = await response.json();

        const selectedSong = songs.find(
          (item) => String(item._id) === id
        );

        if (!selectedSong) {
          throw new Error("Post not found.");
        }

        if (!ignore) {
          setSong(selectedSong);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadSong();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const comments = song.comments || [];
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
            <SongPost song={song} apiLink={API_LINK} />

            <section className="discussion">
              <div className="discussion-heading">
                <h2>
                  Discussion ({comments.length}{" "}
                  {comments.length === 1 ? "Reply" : "Replies"})
                </h2>
              </div>

              <section className="reply-form">
                <div className="reply-user">
                  <img
                    src={`${API_LINK
}/images/current-user.svg`}
                    alt="Your profile"
                  />
                  <strong>@you</strong>
                </div>

                <div className="static-field">
                  Write a reply...
                </div>

                <div className="reply-actions">
                  <button type="button" disabled>
                    Attach Record
                  </button>
                  <button type="button" disabled>
                    Post Reply
                  </button>
                </div>
              </section>

              {comments.length === 0 ? (
                <p>No comments.</p>
              ) : (
                comments.map((comment, index) => (
                  <article
                    className="comment"
                    key={comment._id || index}
                  >
                    <header>
                      {comment.user_picture && (
                        <img
                          src={
                            new URL(
                              comment.user_picture,
                              `${API_ORIGIN}/`
                            ).href
                          }
                          alt={`${comment.username || "User"} profile`}
                        />
                      )}

                      <div>
                        <h3>{comment.username || "Unknown user"}</h3>
                        <time>{comment.time}</time>
                      </div>
                    </header>

                    <p>{comment.text}</p>
                  </article>
                ))
              )}
            </section>
          </div>

          <aside className="sidebar">
            <section className="follow-card">
              <h2>Diggers to Follow</h2>

              <article>
                <img
                  src={`${API_LINK
}/images/acid-jerk.svg`}
                  alt="Acid Jerk profile picture" />
                <div>
                  <h3>@acid_jerk</h3>
                  <p>Rare vinyl &amp; house digger.</p>
                </div>
                <button type="button">Follow</button>
              </article>

              <article>
                <img
                  src={`${API_LINK
}/images/shoegazer-99.svg`}
                  alt="Shoegazer 99 profile picture" />
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
            <br />
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