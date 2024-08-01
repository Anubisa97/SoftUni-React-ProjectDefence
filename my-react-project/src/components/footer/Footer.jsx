import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="location_text">
                            <ul>
                                <li>
                                    <Link to="#"><i className="fa fa-map-marker" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-phone" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-envelope" aria-hidden="true"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social_icon">
                        <ul>
                            <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
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
                                <li className="active"><Link to="index.html">Home</Link></li>
                                <li><Link to="about.html">About</Link></li>
                                <li><Link to="blog.html">Blog</Link></li>
                                <li><Link to="property.html">Property</Link></li>
                                <li><Link to="testimonial.html">Testimonial</Link></li>
                                <li><Link to="contact.html">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}