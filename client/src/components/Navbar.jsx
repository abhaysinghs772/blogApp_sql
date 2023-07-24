import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";


function NavBar(){
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <p className="logo-title">devLok</p>
                    <img className="logoImg" src={logo} alt="logo" />
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>Art</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>Science</h6>
                    </Link>
                    <Link className="link" to="/?cat=tech">
                        <h6>Tech</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>Design</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>Food</h6>
                    </Link>

                    <span>Jhon</span>
                    <span>logout</span>
                    <span className="write">
                        <Link className="link" to="/write" >Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;