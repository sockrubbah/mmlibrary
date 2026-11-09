import Waveform from "./Waveform";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "../styles/tooltip.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <Link className="brand" to="/" aria-label="Music Multiverse home">
                <img src={`${process.env.PUBLIC_URL}/images_working/logo.svg`} alt="Music Multiverse" />
            </Link>

            <nav aria-label="Main navigation" className="main-nav">
                <button
                    id="mobile-nav"
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-controls="navigation-links"
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
                    {menuOpen ? "⌃" : "⌄"}
                </button>
                <ul id="navigation-links" className={menuOpen ? "nav-open" : ""} onClick={() => setMenuOpen(false)}>
                    <li><NavLink to="/" end data-tooltip-id="music-tooltip"
                        data-tooltip-content="Homepage">Home</NavLink></li>
                    <li><NavLink to="/browse" data-tooltip-id="music-tooltip"
                        data-tooltip-content="Browse Users' Posts!">Browse</NavLink></li>
                    <li><NavLink to="/commingle" data-tooltip-id="music-tooltip"
                        data-tooltip-content="Join the Discourse!">Commingle</NavLink></li>
                    <li><NavLink to="/profile" data-tooltip-id="music-tooltip"
                        data-tooltip-content="View Your Profile!">Profile</NavLink></li>
                    <li><NavLink to="/about" data-tooltip-id="music-tooltip"
                        data-tooltip-content="About Us!">About</NavLink></li>
                    <li><NavLink to="/share" className={({ isActive }) => `share-button${isActive ? " active" : ""}`} data-tooltip-id="music-tooltip"
                        data-tooltip-content="Share a Song!">+ Share a Song</NavLink></li>
                </ul>
            </nav>
            <Waveform />
            <Tooltip id="music-tooltip" className="music-tooltip" />
        </header>
    );
}

export default Header;