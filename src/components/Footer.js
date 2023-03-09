import React from "react";

function Footer() {
    return (
        <section className="footer-area">
            <div className="container">
                <div className="subscribe-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="newsletter-content">
                                <h2>Join Our Newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />

                                <button type="submit">Subscribe <i className="fas fa-paper-plane"></i></button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <a href="#"><img src="assets/img/white-logo.png" alt="image" /></a>
                                <p>Powerfully flexible html template for medical & health related organizations, institutes, clinics and businesses.</p>
                            </div>

                            <ul className="social">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Departments</h3>

                            <ul className="departments-list">
                                <li><a href="#">Surgery and Radiology</a></li>
                                <li><a href="#">Departments</a></li>
                                <li><a href="#">Family</a></li>
                                <li><a href="#">Our Doctors</a></li>
                                <li><a href="#">Woman's Health</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Links</h3>

                            <ul className="links-list">
                                <li><a href="#">Optician</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Pediatrics</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Dermatology</a></li>
                                <li><a href="#">Doctors</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Opening Hours</h3>

                            <ul className="opening-hours">
                                <li>Mon - Tues <span>9.00AM - 17.00PM</span></li>
                                <li>Wednesday <span>9.00AM - 17.00PM</span></li>
                                <li>Thursday <span>9.00AM - 17.00PM</span></li>
                                <li>Friday <span>9.00AM - 17.00PM</span></li>
                                <li>Saturday <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <p>© Fovia is Proudly Owned by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                </div>
            </div>
        </section>
    );
}
export default Footer;