import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

{/* <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Link to="/awesome-post">
</BrowserRouter> */}

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

                            <li><Link className="nav-link" to="/">gallery</Link></li>
                            <li><Link className="nav-link" to="/about">about me</Link></li>
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
                <p className="p_footer">&copy; 2025 Elizabeth Stephenson - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Layout;
