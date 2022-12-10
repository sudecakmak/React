import React, { useState } from "react"

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }


    return(
        <div className="auth-form">
        <h2>Register</h2>
        <form 
        className="register-form"
        onSubmit={handleSubmit}>

            <label htmlFor="Username">Username</label>
            <input 
            value={username} onChange={(e) => setUsername(e.target.value)}
            type="username" 
            placeholder="Enter your username" 
            id="username" 
            name="username" />

            <label htmlFor="Email">Email</label>
            <input 
            value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="Enter your email" 
            id="email" 
            name="email" />
               
            <label htmlFor="Password">Password</label>
            <input 
            value={password} onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder="********" 
            id="password" 
            name="password" />

            <button type="submit">Register</button>
        </form>
        <button className="btnlogin" onClick={ () => props.onFormSwitch('login') }>Already have an account? Login here.</button>
        </div>
    )
} 