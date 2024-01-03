import React from 'react';
import '../Assets/Css/login.css';
import Sign_up from './Sign_up';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="logincontainer">
        <div className="login-item">
          <div className="logo">Sign in</div>

          <form action="" method="post" className="form form-login" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="user" htmlFor="login-username">
                <span className="hidden">Username</span>
              </label>
              <input id="login-username" type="text" className="form-input" placeholder="Username" required />
            </div>

            <div className="form-field">
              <label className="lock" htmlFor="login-password">
                <span className="hidden">Password</span>
              </label>
              <input id="login-password" type="password" className="form-input" placeholder="Password" required />
            </div>

            <div className="form-field">
              <a href="#">Forgot password?</a>
            </div>

            <div className="form-field">
              <input type="submit" value="Log in" />
            </div>
          </form>

          <div className="links">
            <p>
              Create new account? <Link to="/Sign_up">REGISTER</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
// Login.js

/*import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/login.css'; // Assuming you have a separate CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic, for example, checking the username and password
    if (username === 'user' && password === 'password') {
      toast.success('Login successful!');
      // You can redirect the user or perform other actions upon successful login
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;*/

