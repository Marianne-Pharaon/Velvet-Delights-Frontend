// import React, { useState, useEffect } from 'react';
// import style from '../style/Checkout.css';
// import NavBar from './NavBar';
// import MiniFooter from './MiniFooter';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { getUserID } from '../Util/GetUsersData'; 




// const Checkout = () => {
//   const [cartData, setCartData] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dueDate: '',
//     email: '',
//     address: '',
//     paymentOption: '',
//     card: {
//       nameOnCard: '',
//       cardNumber: '',
//     },
//   });

//   const [product_cake, setProduct_cake] = useState([]);
//   const [error, setError] = useState(null);

//   const user_id = getUserID(); 

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8001/products/getproducts`);
//         setProducts(response.data);
        
//         const storedIds = localStorage.getItem('product_cake') || '';
        
//         setProduct_cake(storedIds.split(','));
//       } catch (error) {
//         console.error('Error fetching Products:', error);
//         setError('Error fetching products. Please try again later.');
//       }
//     };

//     fetchProducts();
//   }, [user_id]);

//   return (
//     <div className="page">
//       <NavBar />
//       <div className="cbody">
//         <div className="row">
//           {/* <div className="col-75">
//             <div className="container">
//               <form className="cform" onSubmit={handleFormSubmit}>
//                 <div className="row">
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
// />                  </div>

//                   <div className="col-50">
//                     <h3>Payment</h3>
//                     <div style={{ display: 'flex', flexDirection: 'column' }}>
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <input
//         type="radio"
//         id="cashOnDel"
//         name="paymentOption"
//         value="cashOnDel"
//         checked={formData.paymentOption === "cashOnDel"}
//         onChange={handleChange}
//       />
//       <label htmlFor="cashOnDel" style={{ marginLeft: '8px' }}>Cash on Delivery</label>
//     </div>

//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <input
//         type="radio"
//         id="card"
//         name="paymentOption"
//         value="card"
//         checked={formData.paymentOption === "card"}
//         onChange={handleChange}
//       />
//       <label htmlFor="card" style={{ marginLeft: '8px' }}>Credit Card</label>
//     </div>

//     {formData.paymentOption === "card" && (
//       <div>
//         <label htmlFor="cname">Name on Card</label>
//         <input
//           type="text"
//           id="cname"
//           name="nameOnCard"
//           value={formData.card.nameOnCard}
//           onChange={handleChange}
//         />
//         <label htmlFor="ccnum">Credit card number</label>
//         <input
//           type="text"
//           id="ccnum"
//           name="cardNumber"
//           placeholder="1111-2222-3333-4444"
//           value={formData.card.cardNumber}
//           onChange={handleChange}
//         />
//       </div>
//     )}

   
//   </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div> */}


//           {/* Cart details */}
//           <div className="col-25">
//             <div className="container">
//               <h4>
//                 Cart
//                 <span className="price" style={{ color: 'black' }}>
//                   <i className="fa fa-shopping-cart"></i>
//                 </span>
//               </h4>
//         {Ids.map((product_cake) => {
//         const item = products.find((product) => product._id === id);

//         return (
//           <div key={id}>
//             <p>
//               <a href="#">{item.name}</a> <span className="price">${item.price}</span>
//               <button onClick={() => handleRemoveItem(product_cake)}>Remove</button>
//             </p>
//           </div>
//         );
//       })}

//       {/* Display subtotal */}
//       <hr />
//       <p>
//         Total{' '}
//         <span className="price" style={{ color: 'rgb(187, 0, 9)' }}>
//           <b>${handleSubtotal()}</b>
//         </span>
//       </p>
//     </div>
//           </div>
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
// // // const Checkout = () => {
// //   //   const [formData, setFormData] = useState({
// //   //     fullName: '',
// //   //     dueDate: '',
// //   //     email: '',
// //   //     address: '',
// //   //     card: {
// //   //       nameOnCard: '',
// //   //       cardNumber: '',
// //   //     },
// //   //     cashOnDel: false,
// //   //   });
  
// //   //   const handleFormSubmit = async (event) => {
// //   //     event.preventDefault();
  
// //   //     try {
// //   //       const response = await axios.post('http://localhost:8001/checkout/addcheckouts', formData);
  
// //   //       if (response.data.success) {
// //   //         toast.success('Order Received. Thank you for choosing us!');
// //   //       } else {
// //   //         toast.error('Failed to place order. Please try again.');
// //   //       }
// //   //     } catch (error) {
// //   //       console.error('Error during order placement:', error.message);
// //   //       toast.error('An error occurred during order placement.');
// //   //     }
// //   //   };
  
// //   //   const handleChange = (e) => {
// //   //     const { name, value, type, checked } = e.target;
// //   //     setFormData((prevData) => ({
// //   //       ...prevData,
// //   //       [name]: type === 'checkbox' ? checked : value,
// //   //     }));
// //   //   };
  
// //   //   const verifyEmail = () => {
// //   //     const emailInput = document.getElementById('email');
// //   //     const email = emailInput.value;
  
// //   //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
// //   //     if (emailRegex.test(email)) {
// //   //       document.getElementById('verificationMessage').textContent = 'Email is valid!';
// //   //     } else {
// //   //       document.getElementById('verificationMessage').textContent =
// //   //         'Invalid email format. Please enter a valid email address.';
// //   //     }
// //   //   };
// //   //   const [cartData, setCartData] = useState([]);
  
  
// //   //   const CartDetails = () => {
  
// //   //     useEffect(() => {
// //   //       const userId = localStorage.getCarts("user_id");
  
// //   //       axios.get(`  http://localhost:8001/getcarts/${userId}`)
// //   //         .then((response) => {
// //   //           setCartData(response.data);
// //   //         })
// //   //         .catch((error) => console.error('Error fetching cart:', error));
// //   //     }, []);
// //   //   } 