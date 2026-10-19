import "./Navigation.css";

function Navigation() {
    return (
        <nav className="main-nav" aria-label="Main navigation">
            <ul>
                <li>
                    <a className="active" href={process.env.PUBLIC_URL + "/"} aria-current="page">Home</a>
                </li>
                <li><a href="#browse">Browse</a></li>
                <li><a href="#commingle">Commingle</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#about">About</a></li>
                <li>
                    <a className="share-button" href="#share"> + Share a Song </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;