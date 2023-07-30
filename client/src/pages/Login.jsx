import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const Api_URL = import.meta.env.VITE_SERVER_BASE_URL;

    const [inputs, setInputs] = useState({
        usernamme: "",
        password: ""
    });

    const [responseError, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e)=> {
        setInputs((prev)=> ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            const req = await axios.post(`${Api_URL}/auth/login`, inputs) 
            console.log(req);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError(error.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
                <input required type="text" placeholder="password" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {responseError && <p>{responseError}</p>}
                <span>Don't have an account ? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login;