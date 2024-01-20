import React, { useState } from 'react';
import style from '../style/Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); 

    if (!name || !address || !age || !email || !password) {
      console.error('All fields are required');
      setLoading(false); 
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/addusers`, {
        fullName: name,
        age,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('Registration successful');
        history.push('/Login');
        setName('');
        setAddress('');
        setAge('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Unable to register user');
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='registerdiv'>
      <form onSubmit={handleRegister}>
        <div className='registerborder'>
          <span className='logintitle'>Register</span>
          <input
            type="text"
            className='redLineInput'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className='redLineInput'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            className='redLineInput'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
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
            {loading ? 'Loading...' : 'Register'}
          </button>
          <span className='phrase'>
            Already have an account?
            <Link to="/Login">
              <span className='reglink'>Login</span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
