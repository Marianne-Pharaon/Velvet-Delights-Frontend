import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../style/Checkout.css';


const CartDetails = ({ cartData }) => (
  <div className="col-25">
    <div className="container">
      <h4>
        Cart
        <span className="price" style={{ color: 'black' }}>
          <i className="fa fa-shopping-cart"></i>
        </span>
      </h4>
      {cartData.map((product, index) => (
        <p key={index}>
          <a href="#">{product.product_name}</a>{' '}
          <span className="price">${product.price}</span>
        </p>
      ))}
      <hr />
      <p>
        Total{' '}
        <span className="price" style={{ color: 'rgb(187, 0, 9)' }}>
          <b>${cartData.reduce((total, product) => total + product.price, 0)}</b>
        </span>
      </p>
    </div>
  </div>
);

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dueDate: '',
    email: '',
    address: '',
    card: {
      nameOnCard: '',
      cardNumber: '',
    },
    cashOnDel: false,
  });

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const userId = 'user_id';

    axios.get(`https://velvetdelights-backend-4qfo.onrender.com/getcarts/${userId}`)
      .then((response) => {
        setCartData(response.data);
      })
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/checkout', formData);

      if (response.data.success) {
        toast.success('Order Received. Thank you for choosing us!');
      } else {
        toast.error('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error during order placement:', error.message);
      toast.error('An error occurred during order placement.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const verifyEmail = () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      document.getElementById('verificationMessage').textContent = 'Email is valid!';
    } else {
      document.getElementById('verificationMessage').textContent =
        'Invalid email format. Please enter a valid email address.';
    }
  };

  return (
    <div className="page">
      <NavBar />
      <div className="cbody">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form className="cform" onSubmit={handleFormSubmit}>
                <div className="row">
                  {/* Left column */}
                  <div className="col-50">
                    <h3>Checkout</h3>
                    <br />
                    <label htmlFor="fname">Full Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <label htmlFor="date">Due Date</label>
                    <input
                      type="date"
                      id="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="adr">Delivery Address</label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <input
                      type="submit"
                      value="Place order"
                      className="btn"
                      onClick={verifyEmail}
                    />
                  </div>

                  {/* Right column */}
                  <div className="col-50">
                    <h3>Payment</h3>
                    {/* radio buttons */}
                    {/* option 1: CASH ON DEL */}
                    {/* option 2: ONLINE --> LABEL AND INPUTS SHOULD DISLAY */}
                    <br />
                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="nameOnCard"
                      value={formData.card.nameOnCard}
                      onChange={handleChange}
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardNumber"
                      placeholder="1111-2222-3333-4444"
                      value={formData.card.cardNumber}
                      onChange={handleChange}
                    />
                    <label>
                      <br />
                      <input
                        type="checkbox"
                        checked={formData.cashOnDel}
                        name="cashOnDel"
                        onChange={handleChange}
                      />{' '}
                      Cash on delivery
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Cart details */}
          <CartDetails cartData={cartData} />

        </div>
      </div>
      <div className="footercheckout">
        <ToastContainer />
        <MiniFooter />
      </div>
    </div>
  );
};

export default Checkout;










// import React, { useState, useEffect } from 'react';
// import style from '../style/Checkout.css';
// import NavBar from './NavBar';
// import MiniFooter from './MiniFooter';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// const Checkout = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dueDate: '',
//     email: '',
//     address: '',
//     card: {
//       nameOnCard: '',
//       cardNumber: '',
//     },
//     cashOnDel: false,
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Send data to backend
//       const response = await axios.post('/api/checkout', formData);

//       // Handle success
//       if (response.data.success) {
//         toast.success('Order Received. Thank you for choosing us!');
//         // Handle any other logic after successful order placement
//       } else {
//         toast.error('Failed to place order. Please try again.');
//         // Handle error cases
//       }
//     } catch (error) {
//       console.error('Error during order placement:', error.message);
//       toast.error('An error occurred during order placement.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const verifyEmail = () => {
//     const emailInput = document.getElementById('email');
//     const email = emailInput.value;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailRegex.test(email)) {
//       document.getElementById('verificationMessage').textContent = 'Email is valid!';
//     } else {
//       document.getElementById('verificationMessage').textContent =
//         'Invalid email format. Please enter a valid email address.';
//     }
//   };


//   const CartDetails = () => {
//     const [cartData, setCartData] = useState([]);
  
//     useEffect(() => {
//       const userId = 'user_id';
  
//       axios.get(`  https://velvetdelights-backend-4qfo.onrender.com/getcarts/${userId}`)
//         .then((response) => {
//           setCartData(response.data);
//         })
//         .catch((error) => console.error('Error fetching cart:', error));
//     }, []);
//    } // The empty dependency array ensures the effect runs only once, similar to componentDidMount

//   return (
//     <div className="page">
//       <NavBar />
//       <div className="cbody">
//         <div className="row">
//           <div className="col-75">
//             <div className="container">
//               <form className="cform" onSubmit={handleFormSubmit}>
//                 <div className="row">
//                   {/* Left column */}
//                   <div className="col-50">
//                     <h3>Checkout</h3>
//                     <br />
//                     <label htmlFor="fname">Full Name</label>
//                     <input
//                       type="text"
//                       id="fname"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="date">Due Date</label>
//                     <input
//                       type="date"
//                       id="date"
//                       name="dueDate"
//                       value={formData.dueDate}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="text"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="adr">Delivery Address</label>
//                     <input
//                       type="text"
//                       id="adr"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="submit"
//                       value="Place order"
//                       className="btn"
//                       onClick={verifyEmail}
//                     />
//                   </div>

//                   {/* Right column */}
//                   <div className="col-50">
//                     <h3>Payment</h3>
//                     <br />
//                     <label htmlFor="cname">Name on Card</label>
//                     <input
//                       type="text"
//                       id="cname"
//                       name="nameOnCard"
//                       value={formData.card.nameOnCard}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="ccnum">Credit card number</label>
//                     <input
//                       type="text"
//                       id="ccnum"
//                       name="cardNumber"
//                       placeholder="1111-2222-3333-4444"
//                       value={formData.card.cardNumber}
//                       onChange={handleChange}
//                     />
//                     <label>
//                       <br />
//                       <input
//                         type="checkbox"
//                         checked={formData.cashOnDel}
//                         name="cashOnDel"
//                         onChange={handleChange}
//                       />{' '}
//                       Cash on delivery
//                     </label>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>

// {/* 
//           {/* Cart details */}
//           <div className="col-25">
//             <div className="container">
//               <h4>
//                 Cart
//                 <span className="price" style={{ color: 'black' }}>
//                   <i className="fa fa-shopping-cart"></i>
//                 </span>
//               </h4>
//               {cartData.map((product, index) => (
//           <p key={index}>
//             <a href="#">{product.product_name}</a>{' '}
//             <span className="price">${product.price}</span>
//           </p>
//         ))}
//         <hr />
//         <p>
//           Total{' '}
//           <span className="price" style={{ color: 'rgb(187, 0, 9)' }}>
//             <b>${cartData.reduce((total, product) => total + product.price, 0)}</b>
//           </span>
//               </p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//       <div className="footercheckout">
//         <ToastContainer />
//         <MiniFooter />
//       </div>
//     </div>
//   );
// };

// export default Checkout;
