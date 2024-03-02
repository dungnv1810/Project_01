import React from "react";
import {Link, NavLink} from "react-router-dom";
import PropStyles from 'prop-types';
import { NavbarWrapper } from "./style";
const Navbar = () => {
    return(
        <React.Fragment>
            <NavbarWrapper>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <div className="navbar-left">
                            <NavLink className="nav-link" to="#">
                                <i className="fa-brands fa-twitter"></i>
                            </NavLink>
                            <NavLink className="nav-link" to="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </NavLink>
                            <NavLink className="nav-link" to="#">
                                <i className="fa-brands fa-github-alt"></i>
                            </NavLink>
                            <NavLink className="nav-link" to="#">
                                <i className="fa-brands fa-stack-overflow"></i>
                            </NavLink>
                            <NavLink className="nav-link" to="#">
                                <i className="fa-brands fa-codepen"></i>
                            </NavLink>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse navbar-right" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/">ABOUNT</NavLink>
                                </li>
                                <li className="nav-item"> 
                                    <NavLink className="nav-link" to="/projects">PROJECTS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/talks">TALKS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blogs">BLOG</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/resumes">RESUME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contacts">CONTACT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pages">PAGES
                                        <i className="fa-solid fa-caret-down"></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </NavbarWrapper>
        </React.Fragment>
    )
}
Navbar.prototype={

}
export default Navbar;