import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" placeholder="username" />
                <input required type="text" placeholder="password" />
                <button>Login</button>
                <p>this is an error</p>
                <span>Don't have an account ? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login;