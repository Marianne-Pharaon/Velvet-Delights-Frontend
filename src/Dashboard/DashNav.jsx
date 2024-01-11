import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/logo.png';
const DashNav = () => {

         let Links = [
    { name: 'All Products', link: '/DashAllProducts' },
    { name: 'Users', link: '/DashUsers' },
    { name: 'Add Cakes', link: '/AddCakes' },
    { name: 'Orders', link: '/DashOrders' },
   
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <Link to="/HomePage"><img src={image} alt='Logo' style={{ width: '250px', height: '50px' }} /></Link>
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px] '
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                style={{ color: 'rgb(187, 0, 9)' }}
                className='hover:text-gray-800 duration-500'
              >
                {link.name }
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DashNav;