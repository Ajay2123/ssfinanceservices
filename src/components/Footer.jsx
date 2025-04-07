import React from "react";
import logo from "../assets/img/logo/115x40.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact us", path: "/contact" },
    ];

    return (
        <>
            <footer class="footer footer-3">
                <div class="footer-top ">
                    <div class="container">
                        <div class="row gx-0 pt-60 ">
                            <div class="col-lg-4 col-sm-6 text-center text-sm-start ms-0 ">
                                <div class="footer-widget wow fadeInLeft mb-30">
                                    <div class="footer-text mb-20">
                                        <p>
                                            SS Financial Services is India’s
                                            Leading Loan Distribution Channel
                                            Company
                                        </p>
                                    </div>

                                    <span class="overline">Since</span>

                                    <div class="footer-bold">
                                        <span class="counter">1994</span>
                                    </div>
                                    <p class="time">and counting</p>
                                </div>
                            </div>

                            <div class="col-lg-2 col-sm-6 text-center text-sm-start ms-lg-5 ">
                                <div
                                    class="footer-widget mb-30 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div class="f-widget-title">
                                        <h5>At a Glance</h5>
                                    </div>
                                    <div class="footer-link">
                                        <ul>
                                            {navLinks.map((link) => (
                                                <li
                                                    className="nav-item dropdown submenu"
                                                    key={link.path}
                                                >
                                                    <Link
                                                        to={link.path}
                                                        role="button"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2  col-sm-6 text-center text-sm-start ms-lg-5">
                                <div
                                    class="footer-widget mb-30 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div class="f-widget-title">
                                        <h5>Publications</h5>
                                    </div>
                                    <div class="footer-link">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    {" "}
                                                    Compliance Publications
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> Annual Reports</a>
                                            </li>
                                            <li>
                                                <a href="#"> CSR Reports</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {" "}
                                                    Financial documentation
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-6 text-center text-sm-start me-0 ms-lg-5">
                                <div
                                    class="footer-widget mb-30 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div class="f-widget-title">
                                        <h5>Direct Access</h5>
                                    </div>
                                    <div class="footer-link">
                                        <ul>
                                            <li>
                                                <a href="#">Our news</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Our press releases
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Our job offers</a>
                                            </li>
                                            <li>
                                                <a href="#">Our websites</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright pt-25 pb-25">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-3 text-center text-lg-start">
                                <a href="index.html" class="p-0 m-0">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <div class="col-lg-5 text-center my-3 my-sm-0">
                                <div class="copyright-text">
                                    <p>
                                        Copyright&copy; ssfinanceservices 2025.
                                        <br class="d-sm-none" />
                                        <a class="ms-2" href="#">
                                            Privacy
                                        </a>{" "}
                                        |
                                        <a class="ms-0" href="#">
                                            Term of Use
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 text-center text-lg-end ">
                                <div class="social-button">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-pinterest-p"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a id="back-to-top" title="Back to Top"></a>
        </>
    );
}
