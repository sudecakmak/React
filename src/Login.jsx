import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

  
export const Login = (props) => {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return(
        <div className="auth-form">
        <h2>Login</h2>
        <form 
        className="login-form" 
        onSubmit={handleSubmit}>

            <label htmlFor="Username">Username</label>
            <input 
            value={username} onChange={(e) => setUsername(e.target.value)}
            type="username" 
            placeholder="Enter your username" 
            id="username" 
            name="username" />

            <label htmlFor="Password">Password</label>
            <input 
            value={password} onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder="********" 
            id="password" 
            name="password" />

            <button type="submit">Login</button>
        </form>
        <button className="btnregister" onClick={ () => props.onFormSwitch('register') }>Don't have an account? Register here.</button>
        <button className="btnforgot">Forgot your password?</button>
        </div>
    )
} 