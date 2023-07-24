import React from "react";
import logo from "../img/logo.png";

function Footer(){
    return (
        <footer>
            <div className="logo">
                <p className="logo-title">devLok</p>
                <img className="logoImg" src={logo} alt="logo" />
            </div>
            <span>Made with ❤️ and <b>React.js</b></span>
        </footer>
    )
}

export default Footer;