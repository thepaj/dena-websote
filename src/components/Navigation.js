import {
    Link
} from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation=container">
            <nav className="navigation">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </div>
    )
}

export default Navigation;