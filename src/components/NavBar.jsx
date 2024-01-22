import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import image from '../Images/logo.png';
import { getUserRole, clearUserData } from '../Util/GetUsersData'; 

function NavBar() {
  const history = useHistory();
  const userRole = getUserRole();
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    if (userRole === 'admin') {
      history.push('/DashAllProducts');
    } else {
      history.push('/');
    }
  };

  const handleLogin = () => {
    history.push('/Login');

    console.log('Login clicked');
  };

  const handleLogout = () => {
   
    clearUserData(); // Assuming there is a function to clear user data
    history.push('/');

    console.log('Logout clicked');
    // Redirect to the home page or any other desired page after logout
    history.push('/');
  };

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Catalog', link: '/AllProducts' },
    { name: 'About Us', link: '/AboutUsPage' },
    { name: 'Contact Us', link: '/SMTP' },
    { name: 'Order Now', link: '/Customorder' },
    { name: 'Cart', link: '/Checkout' },
    { name: userRole ? 'Logout' : 'Login', onClick: userRole ? handleLogout : handleLogin },
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2' onClick={handleLogoClick}>
            <img src={image} alt='Logo' style={{ width: '250px', height: '50px' }} />
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
    {link.onClick ? (
      <a
        href={link.link}
        onClick={(e) => {
          e.preventDefault();
          link.onClick();
        }}
        style={{ color: 'rgb(187, 0, 9)', cursor: 'pointer' }}
        className='hover:text-gray-800 duration-500'
      >
        {link.name}
      </a>
    ) : (
      <Link
        to={link.link}
        style={{ color: 'rgb(187, 0, 9)', cursor: 'pointer' }}
        className='hover:text-gray-800 duration-500'
      >
        {link.name}
      </Link>
    )}
  </li>
))}
          
        </ul>
      </div>
    </div>
  );
}

export default NavBar;



// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import image from '../Images/logo.png';
// import { getUserRole } from '../Util/GetUsersData'; 


// function NavBar() {
//   let Links = [
//     { name: 'Home', link: '/' },
//     { name: 'Catalog', link: '/AllProducts' },
//     { name: 'About Us', link: '/AboutUsPage' },
//     { name: 'Contact Us', link: '/SMTP' },
//     { name: 'Order Now', link: '/Customorder' },
//     { name: 'Cart', link: '/Checkout' },
//     { name: 'Login', link: '/Login' },
//   ];

//   let [open, setOpen] = useState(false);
//   const history = useHistory();


//   const handleLogoClick = () => {
//     const userRole = getUserRole();

//     if (userRole === 'admin') {
//       history.push('/DashAllProducts');
//     } else {
//       history.push('/');
//     }
//   };

//   return (
//     <div className='shadow-md w-full fixed top-0 left-0 '>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//         <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
//           <span className='text-3xl text-indigo-600 mr-1 pt-2'  onClick={handleLogoClick}>
//          <img src={image} alt='Logo' style={{ width: '250px', height: '50px' }} />
//           </span>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
//         >
//           <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
//         </div>
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? 'top-20 opacity-100' : 'top-[-490px] '
//           }`}
//         >
//           {Links.map((link) => (
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a
//                 href={link.link}
//                 style={{ color: 'rgb(187, 0, 9)' }}
//                 className='hover:text-gray-800 duration-500'
//               >
//                 {link.name }
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
