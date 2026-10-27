import "../styles/about.css";

function About() {
  return (
    <div className="page-about">
      <main>
        <section className="manifesto">
          <p className="eyebrow">OUR MANIFESTO</p>
          <h1>Against automated taste. Built for human connection.</h1>
          <p className="manifesto-text">
            Music Multiverse is a non-commercial web community of independent
            music archivers, bedroom diggers, and casual listeners who believe
            that the best music discovery happens through human passion, not
            telemetry curves.
          </p>
        </section>

        <section className="principles">
          <h2>Why We Excavate</h2>

          <div className="principle-list">
            <article className="principle-card">
              <span className="icon-circle">
                <img
                  src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                  alt=""/>
              </span>
              <h3>No Algorithms</h3>
              <p>
                Every song on our platform was hand-selected by an actual
                human who fell in love with it.
              </p>
            </article>

            <article className="principle-card">
              <span className="icon-circle">
                <img
                  src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                  alt=""/>
              </span>
              <h3>Zero Ads</h3>
              <p>
                No corporate takeover. Our platform is completely funded by
                the community, for the community.
              </p>
            </article>

            <article className="principle-card">
              <span className="icon-circle">
                <img
                  src={`${process.env.PUBLIC_URL}/images_working/sotd.svg`}
                  alt=""/>
              </span>
              <h3>Artist Direct</h3>
              <p>
                We direct all traffic straight to the artist's Bandcamp,
                SoundCloud, or custom stores.
              </p>
            </article>
          </div>
        </section>

        <section className="community-stats">
          <dl>
            <div>
              <dt>10k+</dt>
              <dd>Active Listeners</dd>
            </div>
            <div>
              <dt>80k+</dt>
              <dd>Songs Unearthed</dd>
            </div>
            <div>
              <dt>140+</dt>
              <dd>Countries Represented</dd>
            </div>
          </dl>
        </section>

        <section className="curator-callout">
          <h2>Help build the sound archive.</h2>
          <p>
            Music Multiverse thrives on curations from passionate listeners.
            Join our crew of invite-only curators today to start submitting.
          </p>
          <button
            className="contact-button"
            id="open-contact"
            type="button"
            disabled
            title="Static preview">
            Contact Us!
          </button>
        </section>
      </main>
    </div>
  );
}

export default About;