export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="location_text">
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social_icon">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="footer_text">About Us</h3>
                        <p className="lorem_text">Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `&apos;`Content here, content here`&apos;`, making it look like readable English. Many desktop publishing packages and web</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="footer_text">Recent Properties</h3>
                        <div className="image_main">
                            <div className="image_10"><img src="images/img-10.png" /></div>
                            <div className="image_10"><img src="images/img-10.png" /></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className="footer_text">Useful Links</h3>
                        <div className="footer_menu">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="property.html">Property</a></li>
                                <li><a href="testimonial.html">Testimonial</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}