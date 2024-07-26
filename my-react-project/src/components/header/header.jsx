

export default function Header() {
    return (
        <div className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="property.html">Property</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="testimonial.html">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blog.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="login_bt">
                                <ul>
                                    <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                                    <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
            {/* <!-- banner section start -->  */}
            <div className="banner_section layout_padding">
                <div className="container">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Find A Property</h1>
                                        <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                        <div className="started_text"><a href="#">Contact Us</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Find A Property</h1>
                                        <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                        <div className="started_text"><a href="#">Contact Us</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Find A Property</h1>
                                        <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                        <div className="started_text"><a href="#">Contact Us</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </div>

    );
}