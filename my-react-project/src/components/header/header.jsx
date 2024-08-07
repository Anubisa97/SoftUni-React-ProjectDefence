import { useLocation, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";

import Banner from "../banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);

    const { pathname: pathName } = useLocation();
    const showBanner = pathName === "/";

    return (
        <div className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" />
                    </Link>

                    <div className="mobile-nav">
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Menu"
                            variant="Secondary"
                        >
                            <Dropdown.Item href="/">Home</Dropdown.Item>
                            <Dropdown.Item href="/properties">Properties</Dropdown.Item>
                            {/* <Dropdown.Item href="/about">About</Dropdown.Item> */}
                            {/* <Dropdown.Item href="#/action-4">Testimonial</Dropdown.Item> */}
                            <Dropdown.Item href="/blog">Book</Dropdown.Item>
                            <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
                            <NavDropdown.Divider />
                            {isAuthenticated ? (
                                <div>
                                    <Dropdown.Item href="/saved-properties">
                                        <i
                                            className="fa fa-heart"
                                            style={{ paddingRight: "5px" }}
                                            aria-hidden="true"
                                        ></i>
                                        Saved
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/my-properties">
                                        <i
                                            className="fa fa-list"
                                            style={{ paddingRight: "5px" }}
                                            aria-hidden="true"
                                        ></i>
                                        My Properties
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/create">
                                        <i
                                            className="fa fa-pencil-square-o"
                                            style={{ paddingRight: "5px" }}
                                            aria-hidden="true"
                                        ></i>
                                        Add Offer
                                    </Dropdown.Item>
                                    <NavDropdown.Divider />
                                    <Dropdown.Item href="/logout">
                                        <i
                                            className="fa fa-sign-out"
                                            style={{ paddingRight: "5px" }}
                                            aria-hidden="true"
                                        ></i>
                                        Logout
                                    </Dropdown.Item>
                                </div>
                            ) : (
                                <div>
                                    <Dropdown.Item href="/login">
                                        <i
                                            className="fa fa-user"
                                            style={{ paddingRight: "5px" }}
                                            aria-hidden="true"
                                        ></i>
                                        Log in
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/register">
                                        <i
                                            className="fa fa-user"
                                            style={{ paddingRight: "5px" }}
                                            aria-hidden="true"
                                        ></i>
                                        Register
                                    </Dropdown.Item>
                                </div>
                            )}
                        </DropdownButton>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item" + (pathName === "/" && "active")}>
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className={
                                    "nav-item" + (pathName === "/properties" && "active")
                                }
                            >
                                <Link className="nav-link" to="/properties">
                                    Properties
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="testimonial.html">Testimonial</Link>
                            </li> */}
                            <li className={"nav-item" + (pathName === "/blog" && "active")}>
                                <Link className="nav-link" to="/blog">
                                    Book
                                </Link>
                            </li>
                            <li
                                className={
                                    "nav-item" + (pathName === "/contact-us" && "active")
                                }
                            >
                                <Link className="nav-link" to="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {isAuthenticated ? (
                                <div className="user-btn">
                                    {" "}
                                    <span>
                                        <Link to="/saved-properties">
                                            <span className="user_icon">
                                                <i
                                                    className="fa fa-heart"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                            Saved
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to="/my-properties">
                                            <span className="user_icon">
                                                <i
                                                    className="fa fa-list"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                            My Properties
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to="/create">
                                            <span className="user_icon">
                                                <i
                                                    className="fa fa-pencil-square-o"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                            Add Offer
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to="/logout">
                                            <span className="user_icon">
                                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                            </span>
                                            Logout
                                        </Link>
                                    </span>{" "}
                                </div>
                            ) : (
                                <div className="user-btn">
                                    {" "}
                                    <span>
                                        <Link to="/login">
                                            <span className="user_icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                            Log in
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to="/register">
                                            <span className="user_icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                            Register
                                        </Link>
                                    </span>{" "}
                                </div>
                            )}
                        </form>
                    </div>
                </nav>
            </div>

            {showBanner && <Banner />}
        </div>
    );
}

// TODO
// Route guard
// 404 page
// confirm deletion modal
//
// CAN DO
// Sort properties
//
//
//
