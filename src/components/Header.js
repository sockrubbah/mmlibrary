import Navigation from "./Navigation";
import Waveform from "./Waveform";
import "./Header.css";

function Header() {
    return (
        <header className="site-header">
            <a className="brand" href={process.env.PUBLIC_URL + "/"}>
                <img src={process.env.PUBLIC_URL + "/images_working/logo.svg"} alt="Music Multiverse"/>
            </a>
            <Navigation />
            <Waveform />
        </header>
    );
}

export default Header;