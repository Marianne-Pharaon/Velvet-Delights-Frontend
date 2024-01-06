import React from 'react'
import style from '../style/footer.css'
import location from '../Images/location.png'
import email from '../Images/email.png'
import phone from '../Images/phone.png'
import logo from '../Images/logo.png'


const MiniFooter = () => {
  return (
    <div className='footer'>
        <div className='footlogo'>< img  src={logo} className='ftlogo'/></div>
        <div className='footpn'>< img className="footmg" src={phone}/> <span className='randomtxt1'>78 846-575</span></div>
        <div className='footemail'>< img className="footmg" src={email}/><span className='randomtxt1'>Velvetdelights@gmail.com</span></div>
        <div className='footaddress'>< img className="footmg" src={location}/><span className='randomtxt1'>8326 Maroon Ave 
Corona NY, 1368<br/>728 Howard street
Staten island, NY 10374</span></div>
        
        
        
        </div>
  )
}

export default MiniFooter