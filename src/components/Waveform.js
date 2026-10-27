import { useEffect, useRef } from "react";
import "./Waveform.css";

function Waveform() {
    const waveformRef = useRef(null);

    useEffect(() => {
        const waveform = waveformRef.current;
        let bars = [];

        function createBars() {
            waveform.innerHTML = "";

            const barSpace = 12;
            const numBars = Math.ceil(waveform.clientWidth / barSpace);

            for (let i = 0; i < numBars; i++) {
                const bar = document.createElement("span");
                bar.style.height = "10px";
                waveform.appendChild(bar);
            }

            bars = waveform.querySelectorAll("span");
        }

        function moveBars(event) {
            bars.forEach((bar) => {
                const position = bar.getBoundingClientRect();
                const barCenter = position.left + position.width / 2;
                const distance = Math.abs(event.clientX - barCenter);

                const strength = Math.max(0, 1 - distance / 180);
                const height = 8 + (50 - 8) * strength;

                bar.style.height = `${height}px`;
            });
        }

        function resetBars() {
            bars.forEach((bar) => {
                bar.style.height = "10px";
            });
        }

        createBars();

        window.addEventListener("resize", createBars);
        document.addEventListener("mousemove", moveBars);
        document.addEventListener("mouseleave", resetBars);

        return () => {
            window.removeEventListener("resize", createBars);
            document.removeEventListener("mousemove", moveBars);
            document.removeEventListener("mouseleave", resetBars);
            waveform.innerHTML = "";
        };
    }, []);

    return (
        <div
            className="waveform"
            id="waveform"
            ref={waveformRef}
            aria-hidden="true">
        </div>
    );
}

export default Waveform;