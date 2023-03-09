import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/meanmenu.css";
import "../assets/css/responsive.css";
import "../assets/css/animate.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.css";
import "../assets/css/odometer.min.css";
import "../assets/css/slick.min.css";

import logo from "../assets/img/logo.png"

function Header() {
    return (
        // <nav>
        //     <NavLink exact activeclassNameName="active" to="/">
        //         Home
        //     </NavLink>
        //     <NavLink activeclassNameName="active" to="/appeals">
        //         Users
        //     </NavLink>
        //     <NavLink activeclassNameName="active" to="/services">
        //         Contact
        //     </NavLink>
        // </nav>
        <header className="header-area">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <ul className="header-contact-info">
                                <li><i className="far fa-clock"></i> Mon - Fri 09:00 - 19:00</li>
                                <li><i className="fas fa-phone"></i> Call Us: <a href="#">+07 554 332 322</a></li>
                                <li><i className="far fa-paper-plane"></i> <a href="#"><span className="__cf_email__" data-cfemail="096c646860656c71686479656c497c7b6768646c276a6664">[email&#160;protected]</span></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <div className="header-right-content">
                                <ul className="top-header-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>

                                {/* <div className="lang-select">
                                    <select>
                                        <option>Eng</option>
                                        <option>Spa</option>
                                        <option>Ara</option>
                                        <option>Fre</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="navbar-area">
                <div className="fovia-responsive-nav">
                    <div className="container">
                        <div className="fovia-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" width="100" height="50" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fovia-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} alt="logo" width="230" height="50" />
                            </a>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="index.html" className="nav-link active">Home</a></li>

                                    <li className="nav-item"><a href="#" className="nav-link">Department <i className="fas fa-plus"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="services-1.html" className="nav-link">Department 01</a></li>

                                            <li className="nav-item"><a href="services-2.html" className="nav-link">Department 02</a></li>

                                            <li className="nav-item"><a href="single-services.html" className="nav-link">Department Details</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><a href="#" className="nav-link">Doctor <i className="fas fa-plus"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="doctor.html" className="nav-link">Doctor</a></li>

                                            <li className="nav-item"><a href="doctor-details.html" className="nav-link">Doctor Details</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><a href="#" className="nav-link">Shop <i className="fas fa-plus"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="shop.html" className="nav-link">Shop</a></li>

                                            <li className="nav-item"><a href="single-product.html" className="nav-link">Single Products</a></li>

                                            <li className="nav-item"><a href="cart.html" className="nav-link">Cart</a></li>

                                            <li className="nav-item"><a href="checkout.html" className="nav-link">Checkout</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><a href="#" className="nav-link">Blog <i className="fas fa-plus"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="blog-1.html" className="nav-link">Blog Grid</a></li>

                                            <li className="nav-item"><a href="blog-2.html" className="nav-link">Blog Right Sidebar</a></li>

                                            <li className="nav-item"><a href="single-blog.html" className="nav-link">Blog Details</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><a href="#" className="nav-link">Pages <i className="fas fa-plus"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>

                                            <li className="nav-item"><a href="appointment.html" className="nav-link">Appointment</a></li>

                                            <li className="nav-item"><a href="timetable.html" className="nav-link">Time Table</a></li>

                                            <li className="nav-item"><a href="partner.html" className="nav-link">Partner</a></li>

                                            <li className="nav-item"><a href="error-404.html" className="nav-link">404 Error</a></li>

                                            <li className="nav-item"><a href="faq.html" className="nav-link">FAQ</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                                </ul>

                                <div className="others-options">
                                    <a href="cart.html" className="cart-btn"><i className="flaticon-shopping-bag"></i></a>

                                    <div className="option-item"><i className="search-btn fas fa-search"></i>
                                        <i className="search-close-btn fas fa-times"></i>

                                        <div className="search-overlay search-popup">
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />

                                                    <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="contact.html" className="btn btn-primary">Donate</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </header>
    );
}
export default Header;