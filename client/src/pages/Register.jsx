import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const Api_URL = "http://localhost:3000/api/v1";

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [responseError, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        // e.preventDefault();
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const req = 
            await axios.post(`${Api_URL}/auth/register`, inputs);
            navigate('/login');
            // console.log(req);
        } catch (error) {
            // console.log(error);
            setError(error.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" placeholder="email" name="email" onChange={handleChange} />
                <input required type="text" placeholder="username" name="username" onChange={handleChange} />
                <input required type="text" placeholder="password" name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
                {responseError && <p>{responseError}</p>}
                <span>have an account ? <Link to="/login">LogIn</Link></span>
            </form>
        </div>
    )
}

export default Register;