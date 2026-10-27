import Waveform from "./Waveform";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
    <header className="site-header">
        <Link className="brand" to="/" aria-label="Music Multiverse home">
            <img src={`${process.env.PUBLIC_URL}/images_working/logo.svg`} alt="Music Multiverse"/>
        </Link>



        <nav aria-label="Main navigation" className="main-nav">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/browse">Browse</NavLink></li>
                <li><NavLink to="/commingle">Commingle</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/share" className={({ isActive }) => `share-button${isActive ? ' active' : ''}`}>+ Share a Song</NavLink></li>
            </ul>
        </nav>
        <Waveform/>
    </header>
    );
}

export default Header;