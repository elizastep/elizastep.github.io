import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    {/* Your name in big font */}
                    <h1 className="site-name">Elizabeth R. Stephenson</h1>

                    {/* Navigation menu */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><Link to="/">gallery</Link></li>
                            <li><Link to="/about">about me</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="main-content">
                {children}
            </main>

            {/* Footer */}
            <footer className="footer">
                <p className="p_footer">&copy; 2024 Elizabeth Stephenson - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Layout;
