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
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!name  || !age || !email || !password || !phoneNumber) {
      setError('All fields are required');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/addusers`, {
        fullName: name,
        age,
        email,
        password,
        phoneNumber,
        role: 'user', 
            });
  
      if (response.status === 201) {
        console.log('Registration successful');
        history.push('/Login');
        setName('');
        setAge('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
      } else {
        setError('Unable to register user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
  
      // Display a meaningful error message to the user
      setError(error.response?.data?.message || 'An error occurred during registration');
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
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            className='redLineInput'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
