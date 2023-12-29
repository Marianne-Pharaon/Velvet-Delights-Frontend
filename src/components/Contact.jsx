import React from 'react'
import style from '../style/contact.css'
import location from '../Images/location.png'
import email from '../Images/email.png'
import phone from '../Images/phone.png'
import whiteline from '../Images/whiteline.png'




const Contact = () => {
  return (
    <div className='contactimg'>
        <div className='empty'></div>
        <div className='contactinfo'>
          
            <span className='title1'>Contact Us</span>
            <table className='table1'>
            <tr>
              <td><img src={phone} className='pngs'/></td>
               <td><span className='randomtxt'>78 846-575</span></td>
               </tr>

<tr>
               <td><img src={email} className='pngs'/></td>

            <td><span className='randomtxt'>Velvetdelights@gmail.com</span></td>

            </tr>
           
<tr>
            <td><img src={location} className='pngs'/></td>

            <td><span className='randomtxt'>8326 Maroon Ave 
Corona NY, 1368
</span></td>

</tr>

            
<tr>
<td><img src={location} className='pngs'/></td>

            <td><span className='randomtxt'>728 Howard street
Staten island, NY 10374</span></td></tr>


            

</table>
        </div>

        

    </div>
  )
}

export default Contact;