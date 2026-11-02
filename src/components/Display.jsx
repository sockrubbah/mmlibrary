import "./Display.css";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "../styles/tooltip.css";

const videos = [
    {
        title: "Featured Video 1",
        url: "https://www.youtube.com/embed/cNpEVPiaCSA"
    },
    {
        title: "Featured Video 2",
        url: "https://www.youtube.com/embed/7EZn8Ctx_Pw"
    },
    {
        title: "Featured Video 3",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

const Display = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slideForward = () => {
        setSlideIndex((current) => (current + 1) % videos.length);
    };

    const slideBackward = () => {
        setSlideIndex(
            (current) => (current - 1 + videos.length) % videos.length
        );
    };

    const currentSlide = videos[slideIndex];

    return (
        <section className="video-slideshow" aria-label="Featured videos">
            <div className="video-slideshow-player">
                <button
                    className="slide-arrow"
                    type="button"
                    onClick={slideBackward}
                    aria-label="Previous video"
                    data-tooltip-id="music-tooltip"
                    data-tooltip-content="Previous video">
                    ❮
                </button>
                <iframe
                    key={currentSlide.url}
                    className="homepage-video"
                    src={currentSlide.url}
                    title={currentSlide.title}
                    allowFullScreen />
                <button
                    className="slide-arrow"
                    type="button"
                    onClick={slideForward}
                    aria-label="Next video"
                    data-tooltip-id="music-tooltip"
                    data-tooltip-content="Next video">
                    ❯
                </button>
            </div>
            <Tooltip id="music-tooltip" className="music-tooltip" />
        </section>
    );
};

export default Display;