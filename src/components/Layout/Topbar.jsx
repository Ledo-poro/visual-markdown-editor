import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Topbar() {
    const location = useLocation();

    return (
        <header className="topbar">
            <div className="brand">
                <div className="brand-mark">VM</div>
                <div>
                    <p className="eyebrow">CODIMP TEAM</p>
                    <h1>Waleed khaled</h1>
                </div>
            </div>
            <nav className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Editor</Link>
                <Link to="/settings" className={location.pathname === "/settings" ? "active" : ""}>Settings</Link>
                <Link to="/guide" className={location.pathname === "/guide" ? "active" : ""}>Guide</Link>
            </nav>
        </header>
    );
}
