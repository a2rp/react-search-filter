import { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="header-inner">
                <a className="brand" href="#top" onClick={closeMenu}>
                    <img src="/logo.png" alt="" />
                    <span>
                        <strong>Search Filter</strong>
                        <small>React word explorer</small>
                    </span>
                </a>
                <nav className="desktop-nav" aria-label="Primary navigation">
                    <a href="#search">Search</a>
                    <a href="#results">Results</a>
                </nav>
                <button
                    className="menu-button"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <div className={"mobile-menu " + (menuOpen ? "is-open" : "")}>
                <a href="#search" onClick={closeMenu}>
                    <FiSearch />
                    Search words
                </a>
                <a href="#results" onClick={closeMenu}>
                    <FiSearch />
                    Browse results
                </a>
            </div>
        </header>
    );
}

export default Header;
