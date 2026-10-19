import { useEffect, useRef, useState } from "react";
import "./Waveform.css";

function Waveform() {
    const waveformRef = useRef(null);
    const [barCount, setBarCount] = useState(0);
    const [mouseX, setMouseX] = useState(null);

    useEffect(() => {
        const createBars = () => {
            const width = waveformRef.current.clientWidth;

            // Each bar is 8px wide, with a 4px gap.
            setBarCount(Math.ceil(width / 12));
            setMouseX(null);
        };

        const moveBars = (event) => {
            const position = waveformRef.current.getBoundingClientRect();
            setMouseX(event.clientX - position.left);
        };

        const resetBars = () => {
            setMouseX(null);
        };

        createBars();

        window.addEventListener("resize", createBars);
        document.addEventListener("mousemove", moveBars);
        document.addEventListener("mouseleave", resetBars);

        return () => {
            window.removeEventListener("resize", createBars);
            document.removeEventListener("mousemove", moveBars);
            document.removeEventListener("mouseleave", resetBars);
        };
    }, []);

    return (
        <div
            className="waveform"
            id="waveform"
            ref={waveformRef}
            aria-hidden="true"
        >
            {Array.from({ length: barCount }, (_, index) => {
                let height = 10;

                if (mouseX !== null) {
                    const barCenter = index * 12 + 4;
                    const distance = Math.abs(mouseX - barCenter);
                    const strength = Math.max(0, 1 - distance / 180);

                    height = 8 + (50 - 8) * strength;
                }

                return (
                    <span
                        key={index}
                        style={{ height: `${height}px` }}
                    />
                );
            })}
        </div>
    );
}

export default Waveform;