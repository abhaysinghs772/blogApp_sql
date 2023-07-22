import React from "react";
import { Link } from "react-router-dom";


function Register() {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" placeholder="email" />
                <input required type="text" placeholder="username" />
                <input required type="text" placeholder="password" />
                <button>Register</button>
                <p>this is an error</p>
                <span>have an account ? <Link to="/login">LogIn</Link></span>
            </form>
        </div>
    )
}

export default Register;