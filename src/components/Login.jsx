import React from 'react'
import style from '../style/Login.css'


const Login = () => {
  return (
    <div className='logindiv'>
        <form>
        <div className='loginborder'>
            <span className='logintitle'>Login</span>
            <input type="text" className='redLineInput' placeholder='email' />
            <input type="text"  className='redLineInput'   placeholder='password' />
            <button className='loginbutton'>Login</button>
            <span className='phrase'>Don't have an account?<span className='reglink'>Register</span></span>
        </div>

        </form>
    </div>
  )
}

export default Login