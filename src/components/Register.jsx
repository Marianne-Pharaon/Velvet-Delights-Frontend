import React from 'react'
import style from '../style/Login.css'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='registerdiv'>
        <form>
        <div className='registerborder'>
            <span className='logintitle'>Register</span>
            <input type="text" className='redLineInput' placeholder='Name' />
            <input type="text" className='redLineInput' placeholder='address' />
            <input type="text" className='redLineInput' placeholder='age' />
            <input type="text" className='redLineInput' placeholder='email' />
            <input type="text"  className='redLineInput'   placeholder='password' />
            <button className='loginbutton'>Register</button>
            <span className='phrase'>already have an account?<Link to="/Login"><span className='reglink'>Login</span></Link></span>
        </div>

        </form>
    </div>
  )
}

export default Login