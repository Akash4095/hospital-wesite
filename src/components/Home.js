import Carousel from "nuka-carousel/lib/carousel";
import React from "react";
import circleshape1 from "../assets/img/circle-shape1.png";
import circleshape2 from "../assets/img/circle-shape2.png";
import shape1 from "../assets/img/shape/1.png";
import shape2 from "../assets/img/shape/2.png";
import shape3 from "../assets/img/shape/3.png";
function Home() {
    return (
        <div>
            <div className="home-slides owl-carousel owl-theme">
                <Carousel>
                    <div>
                        <img src="https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg" />
                        <a href="https://helpinghandf.org/services"><span style={{ margin: -300 }}>Image 1</span></a>
                    </div>
                    <div>
                        <img src="https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg" />
                        <span>Image 2</span>
                    </div>
                    <div>
                        <img src="https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg" />
                        <span>Image 3</span>
                    </div>
                </Carousel>

            </div>
            <section className="main-services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Main Features</span>
                        <h2>Our Main Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="main-services-box">
                                <div className="icon">
                                    <i className="flaticon-doctor"></i>
                                </div>
                                <h3><a href="#">Advanced Care</a></h3>
                                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="main-services-box">
                                <div className="icon">
                                    <i className="flaticon-dental-chair"></i>
                                </div>
                                <h3><a href="#">Internal Medicine</a></h3>
                                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="main-services-box">
                                <div className="icon">
                                    <i className="flaticon-care"></i>
                                </div>
                                <h3><a href="#">Otolaryngology</a></h3>
                                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="main-services-box">
                                <div className="icon">
                                    <i className="flaticon-brain"></i>
                                </div>
                                <h3><a href="#">Ophthalmology</a></h3>
                                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape2"><img src={shape2} alt="image" /></div>
            </section>

            <section class="about-area">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="about-image">
                                <img src="assets/img/about-img1.jpg" alt="image" />
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="about-content">
                                <span>About Us</span>
                                <h2>Short Story About Fovia Clinic Since 1999</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <ul>
                                    <li><i class="flaticon-check-mark"></i> Scientific Skills For getting a better result</li>
                                    <li><i class="flaticon-check-mark"></i> Communication Skills to getting in touch</li>
                                    <li><i class="flaticon-check-mark"></i> A Career Overview opportunity Available</li>
                                    <li><i class="flaticon-check-mark"></i> A good Work Environment For work</li>
                                </ul>

                                <a href="#" class="btn btn-primary">Learn More <i class="flaticon-right-chevron"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="our-mission-area ptb-100">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="our-mission-content">
                                <span class="sub-title">Our Mission & Vision</span>
                                <h2>Better Information, Better Health</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-doctor"></i>
                                        </div>
                                        <span>Professional Staff</span>

                                        Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                    </li>

                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-newborn"></i>
                                        </div>
                                        <span>Newborn Care</span>

                                        Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                    </li>

                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-laboratory"></i>
                                        </div>
                                        <span>Sufficient Lab Tests</span>

                                        Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                    </li>

                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-extraction"></i>
                                        </div>
                                        <span>Tooth Extraction</span>

                                        Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="our-mission-image">
                                <img src="assets/img/mission-img1.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shape3"><img src="assets/img/shape/3.png" class="wow fadeInLeft" alt="image" /></div>
            </section>

            <section class="fun-facts-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-doctor-1"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="540"></span>
                                    <span class="optional-icon">+</span>
                                </h3>
                                <p>Expert Doctors</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-light-bulb"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="899"></span>
                                    <span class="optional-icon">K</span>
                                </h3>
                                <p>Problem Solve</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-science"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="100"></span>
                                    <span class="optional-icon">+</span>
                                </h3>
                                <p>Award Winning</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-trophy"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="56"></span>
                                    <span class="optional-icon">K</span>
                                </h3>
                                <p>Experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services-area ptb-100 bg-f4f9fd">
                <div class="container">
                    <div class="section-title">
                        <span>Our Services</span>
                        <h2>Our Healthcare Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-services-box bg-1">
                                <div class="icon">
                                    <i class="flaticon-cancer"></i>
                                </div>
                                <h3><a href="#">Cancer Services</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-services-box bg-2">
                                <div class="icon">
                                    <i class="flaticon-liver"></i>
                                </div>
                                <h3><a href="#">Liver Transplant</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-services-box bg-3">
                                <div class="icon">
                                    <i class="flaticon-kidney"></i>
                                </div>
                                <h3><a href="#">Kidney Cancer</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-services-box bg-4">
                                <div class="icon">
                                    <i class="flaticon-ekg"></i>
                                </div>
                                <h3><a href="#">Cardiac Arrhythmia</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-services-box bg-5">
                                <div class="icon">
                                    <i class="flaticon-tooth"></i>
                                </div>
                                <h3><a href="#">Dental Services</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-services-box bg-6">
                                <div class="icon">
                                    <i class="flaticon-radiation"></i>
                                </div>
                                <h3><a href="#">Radiation Oncology</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="more-services-btn">
                                <a href="#" class="btn btn-primary">More Services <i class="flaticon-right-chevron"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="doctor-area ptb-100 bg-fefefe">
                <div class="container">
                    <div class="section-title">
                        <span>Doctors</span>
                        <h2>Meet Our Qualified Doctors</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div class="doctor-slides owl-carousel owl-theme">
                        <div class="single-doctor-box">
                            <div class="doctor-image">
                                <img src="assets/img/doctor/1.jpg" alt="image" />

                                <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                            </div>

                            <div class="doctor-content">
                                <h3><a href="#">Dr. Addison Smith</a></h3>
                                <span>Cardiologists</span>

                                <ul class="social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="single-doctor-box">
                            <div class="doctor-image">
                                <img src="assets/img/doctor/5.jpg" alt="image" />

                                <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                            </div>

                            <div class="doctor-content">
                                <h3><a href="#">Dr. Sarah Taylor</a></h3>
                                <span>Nephrologists</span>

                                <ul class="social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="single-doctor-box">
                            <div class="doctor-image">
                                <img src="assets/img/doctor/2.jpg" alt="image" />

                                <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                            </div>

                            <div class="doctor-content">
                                <h3><a href="#">Dr. Aiken Ward</a></h3>
                                <span>Dermatologists</span>

                                <ul class="social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="single-doctor-box">
                            <div class="doctor-image">
                                <img src="assets/img/doctor/3.jpg" alt="image" />

                                <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                            </div>

                            <div class="doctor-content">
                                <h3><a href="#">Babatunde Jon</a></h3>
                                <span>Endocrinologists</span>

                                <ul class="social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="single-doctor-box">
                            <div class="doctor-image">
                                <img src="assets/img/doctor/4.jpg" alt="image" />

                                <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                            </div>

                            <div class="doctor-content">
                                <h3><a href="#">Eachann Jhon</a></h3>
                                <span>Gastroenterologists</span>

                                <ul class="social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="appointment-area ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
                <div class="container">
                    <div class="appointment-content">
                        <span class="sub-title">Book Appointment</span>
                        <h2>We are here for you</h2>

                        <form>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <div class="icon">
                                            <i class="flaticon-user"></i>
                                        </div>
                                        <label>Your Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Your Name" id="name" name="name" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <div class="icon">
                                            <i class="flaticon-envelope"></i>
                                        </div>
                                        <label>Your Email</label>
                                        <input type="email" class="form-control" placeholder="Enter Email Address" id="email" name="email" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <div class="icon">
                                            <i class="flaticon-support"></i>
                                        </div>
                                        <label>Select Your Services</label>

                                        <select>
                                            <option>Cardiology</option>
                                            <option>Urologic Oncology</option>
                                            <option>Neurology</option>
                                            <option>Medicine</option>
                                            <option>Surgery</option>
                                            <option>Urology</option>
                                            <option>Radiology</option>
                                            <option>Neurosurgery</option>
                                            <option>Bariatric Surgery</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <div class="icon">
                                            <i class="flaticon-phone-call"></i>
                                        </div>
                                        <label>Your Phone</label>
                                        <input type="text" class="form-control" placeholder="Enter Your Phone" id="text" name="text" />
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="submit-btn">
                                        <button class="btn btn-primary">Make Appointment <i class="flaticon-right-chevron"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section class="faq-area">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="faq-image">
                                <img src="assets/img/faq-img1.jpg" alt="image" />
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="faq-accordion">
                                <span class="sub-title">Frequently Asked Questions</span>
                                <h2>Get Every Single Answers There if you want</h2>

                                <ul class="accordion">
                                    <li class="accordion-item">
                                        <a class="accordion-title active" href="javascript:void(0)">
                                            <i class="fas fa-plus"></i>
                                            My physician is a faculty member???what does that mean?
                                        </a>

                                        <p class="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </li>

                                    <li class="accordion-item">
                                        <a class="accordion-title" href="javascript:void(0)">
                                            <i class="fas fa-plus"></i>
                                            What is an academic medical center?
                                        </a>

                                        <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </li>

                                    <li class="accordion-item">
                                        <a class="accordion-title" href="javascript:void(0)">
                                            <i class="fas fa-plus"></i>
                                            What doctor will I see?
                                        </a>

                                        <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </li>

                                    <li class="accordion-item">
                                        <a class="accordion-title" href="javascript:void(0)">
                                            <i class="fas fa-plus"></i>
                                            What is a medical student?
                                        </a>

                                        <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </li>

                                    <li class="accordion-item">
                                        <a class="accordion-title" href="javascript:void(0)">
                                            <i class="fas fa-plus"></i>
                                            How are residents supervised?
                                        </a>

                                        <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="partner-area ptb-100 bg-f4f9fd">
                <div class="container">
                    <div class="section-title">
                        <h2>Featured Customers & Partners</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div class="customers-partner-list">
                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/1.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/2.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/3.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/4.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/5.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/6.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/7.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/8.png" alt="image" />
                            </a>
                        </div>

                        <div class="partner-item">
                            <a href="#">
                                <img src="assets/img/partner/9.png" alt="image" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-area ptb-100">
                <div class="container">
                    <div class="section-title">
                        <span>News & Blog</span>
                        <h2>The News from Our Blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <a href="#"><img src="assets/img/blog/1.jpg" alt="image" /></a>
                                </div>

                                <div class="post-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li>By: <a href="#">John Smith</a></li>
                                            <li>June 19, 2021</li>
                                        </ul>
                                    </div>

                                    <h3><a href="#">250+ Medical Tips We Just Had to Share</a></h3>
                                    <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <a href="#"><img src="assets/img/blog/2.jpg" alt="image" /></a>
                                </div>

                                <div class="post-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li>By: <a href="#">Steven Hobb</a></li>
                                            <li>June 10, 2021</li>
                                        </ul>
                                    </div>

                                    <h3><a href="#">12 Ways You Can Cut Your Prescription Costs</a></h3>
                                    <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <a href="#"><img src="assets/img/blog/3.jpg" alt="image" /></a>
                                </div>

                                <div class="post-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li>By: <a href="#">Sarah Taylor</a></li>
                                            <li>June 24, 2021</li>
                                        </ul>
                                    </div>

                                    <h3><a href="#">10 Tips to Live Better With Psoriatic Arthritis</a></h3>
                                    <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;