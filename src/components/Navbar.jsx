import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import _404_three from "../assets/img/logo/115x40.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact us", path: "/contact" },
    ];

    return (
        <header className="header ">
            <div className="header-menu header-menu-4" id="sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand sticky_logo" to="/">
                            <img
                                className="main"
                                src={_404_three}
                                srcSet={_404_three}
                                alt="logo"
                            />
                        </Link>
                        <button
                            className={`navbar-toggler ${
                                isMenuOpen ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div
                            className={`collapse navbar-collapse right-nav mb-3 ${
                                isMenuOpen ? "show" : ""
                            }`}
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav menu ms-auto">
                                {navLinks.map((link) => (
                                    <li
                                        className="nav-item dropdown submenu"
                                        key={link.path}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`nav-link dropdown-toggle ${
                                                location.pathname === link.path
                                                    ? "active"
                                                    : ""
                                            }`}
                                            role="button"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
