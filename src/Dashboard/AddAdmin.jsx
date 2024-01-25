import React, { useState } from 'react';
import style from '../style/Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashNav from './DashNav';


const AddAdmin = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const history = useHistory();

  const handleAdminRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!name  || !age || !email || !password || !phoneNumber) {
      setError('All fields are required');
      toast.error('All fields are required');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/addAdmin`, {
        fullName: name,
        age,
        email,
        password,
        phoneNumber,
        role: 'admin', 
            });
  
      if (response.status === 201) {
        console.log('Registration successful');
        toast.success('Admin added successfully');
        setName('');
        setAge('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
      } else {
        setError('Unable to AddAdmin user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
  
      setError(error.response?.data?.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className='registerdiv'>
      <form onSubmit={handleAdminRegister}>
        <div className='registerborder'>
          <span className='logintitle'>AddAdmin</span>
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
            {loading ? 'Loading...' : 'Add Admin'}
          </button>
          <span className='phrase'>
            Already have an account?
            <Link to="/Login">
              <span className='reglink'>Login</span>
            </Link>
          </span>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default AddAdmin;
