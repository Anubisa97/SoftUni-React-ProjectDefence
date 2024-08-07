import { Link } from "react-router-dom";


export default function Blog() {
    return (
        <div className="blog_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="blog_taital_main">
                            <h1 className="blog_taital">Book Now Property</h1>
                            <hr className="blog_border_main" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog_section_2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blog_text_main">
                                <p className="blog_text">Get in touch with our dedicated support team for any inquiries or assistance regarding our real estate services. We`&apos;`re here to help you every step of the way, ensuring a smooth and satisfying experience.</p>
                                <div className="readmore_bt"><Link to="/contact-us">Contact Us</Link></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog_img"><img src="images/blog-img.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}