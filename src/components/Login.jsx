import React, { useState } from 'react';
import style from '../style/Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`https://velvetdelights-backend-4qfo.onrender.com/user/loginusers`, {
        UserEmail: email,
        Password: password,
      });

      const data = response.data;

      if (response.status === 200) {
        const token = data.token;

        // Store the token in localStorage or a more secure storage solution
        localStorage.setItem('token', token);

        history.push('/HomePage');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response && error.response.status === 401) {
        setError('Incorrect email or password. Please try again.');
      } else {
        setError('An error occurred during login.');
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
          <input
            type="password"
            className='redLineInput'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className='loginbutton' disabled={loading}>
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
    </div>
  );
};

export default Login;
