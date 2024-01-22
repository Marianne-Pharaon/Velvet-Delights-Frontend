import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../style/Login.css';
import open from '../Images/show.png';
import hide from '../Images/hide.png';

import { getUserRole } from '../Util/GetUsersData'; 

// const handleLogin = (e) => {
//   e.preventDefault();
//   axios
//     .post(
//       `http://localhost:8001/user/loginusers`,
//       {
//         email: email,
//         Password: password,
//       }
//     )
//     .then((response) => {
//       const token = response.data.token;
//       const id = response.data.id;
//       toast.success("You logged in successfully!");
//       localStorage.setItem("token", token);
//       localStorage.setItem("id", id);
//       navigate('/');
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       throw error;
//     });
// };


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInput = () => {
    if (!email || !password) {
      setError('Email and Password are required :(');
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateInput()) return;

    try {
      const response = await axios.post(
        `http://localhost:8001/user/loginusers`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      if (response.status === 200) {
        const token = data.token;
        localStorage.setItem('authToken', token);

        const role = getUserRole();
        console.log(role)
        if (role === 'admin') {
          history.push('/DashAllProducts');
        } else if (role === 'user'){
          history.push('/HomePage');
        }

        toast.success('Login successful!');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Incorrect email or password. Please try again.');
        toast.error('Incorrect email or password. Please try again.');
      } else {
          console.error("Error:", error);
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);
          throw error;
       
        setError('An error occurred during login. Please try again.');
        toast.error('An error occurred during login. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='logindiv'>
      <form onSubmit={handleLogin}>
        <div className='loginborder'>
          <span className='logintitle'>Login</span>
          <input
            type="text"
            className='redLineInput'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="rounded-full mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="redLineInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img
                  src={open}
                  alt="show-password"
                  height="16"
                  width="20"
                  viewBox="0 0 640 512"
                />
              ) : (
                <img
                  src={hide}
                  alt="hide-password"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            {loading && (
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            )}
          </div>

          <button type="submit" className='loginbutton'
            disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <span className='phrase'>
            Don't have an account?
            <Link to="/Register">
              <span className='reglink'>Register</span>
            </Link>
          </span>
          {error && <p className='error-message'>{error}</p>}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
