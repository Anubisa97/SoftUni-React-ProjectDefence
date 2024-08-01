import { useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Banner from '../banner/Banner';

export default function Header() {
    const { pathname } = useLocation();
    const showBanner = pathname === "/"

    return (
        <div className="header_section">


            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src="images/logo.png" /></a>

                    <div className='mobile-nav'>
                        <DropdownButton id="dropdown-basic-button" title="Menu" variant="Secondary">
                            <Dropdown.Item href="/">Home</Dropdown.Item>
                            <Dropdown.Item href="/properties">Property</Dropdown.Item>
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-4">Testimonial</Dropdown.Item> */}
                            <Dropdown.Item href="/blog">Blog</Dropdown.Item>
                            <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
                            <Dropdown.Item href="/login"><i className="fa fa-user" style={{ paddingRight: "5px" }}></i>Login</Dropdown.Item>
                            <Dropdown.Item href="/register"><i className="fa fa-user" style={{ paddingRight: "5px" }}></i>Register</Dropdown.Item>
                            <Dropdown.Item href="/logout"><i className="fa fa-user" style={{ paddingRight: "5px" }}></i>Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/properties">Properties</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="testimonial.html">Testimonial</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="user-btn">
                                <span>
                                    <a href="/login"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a>
                                </span>
                                <span>
                                    <a href="/register"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Register</a>
                                </span>
                                <span>
                                    <a href="/logout"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Logout</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

            {/* <!-- banner section start -->  */}
            {showBanner && <Banner />}
            {/* <!-- banner section end --> */}
        </div>

    );
}