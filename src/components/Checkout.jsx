import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getUserID } from '../Util/GetUsersData';
import { Link } from 'react-router-dom';

import style from '../style/Checkout.css';

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    dueDate: '',
    email: '',
    address: '',
    paymentOption: 'cashOnDel',
    card: {
      nameOnCard: '',
      cardNumber: '',
    },
  });

  const [product_cake, setProduct_cake] = useState([]);
  const [error, setError] = useState(null);

  const user_id = getUserID();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/products/getproducts`);
        setProducts(response.data);
  
        const storedIds = localStorage.getItem('product_cake') || '';
        const productIdsArray = storedIds.split(',');
  
        // Filter the products based on the stored product IDs
        const cartProducts = products.filter(product => productIdsArray.includes(product._id));
        setProduct_cake(cartProducts);
      } catch (error) {
        console.error('Error fetching Products:', error);
        setError('Error fetching products. Please try again later.');
      }
    };
  
    fetchProducts();
  }, [user_id]);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const product = localStorage.getItem("product_cake");
const productName = product.name;
const productPrice = product.price;


console.log(productName)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8001/checkout/addcheckouts`, {
        userData: formData,
        cartItems: product_cake,
      });
console.log(response)
      toast.success('Order placed successfully!');
      localStorage.removeItem('product_cake');
      setProduct_cake([]);
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Error placing order. Please try again later.');
    }
  };

  const productIds = localStorage.getItem("product_cake") || '';
const productIdsArray = productIds.split(',');

const productsInCart = products.filter(products => productIdsArray.includes(products._id));

const totalCartPrice = productsInCart.reduce((total, products) => {
  return total + (product?.price || 0);
}, 0);
// ...

console.log("productIds", productIds); 
console.log("productIdsArray", productIdsArray); 
console.log("productsInCart", productsInCart); 





    return (
        <div className="page">
            <NavBar />
            <div className="cbody">
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <form className="cform" onSubmit={handleFormSubmit}>
                                <div className="row">
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
                                        <h3 className='pymnt'>Payment</h3>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <input
                                                    type="radio"
                                                    id="cashOnDel"
                                                    name="paymentOption"
                                                    value="cashOnDel"
                                                    checked={formData.paymentOption === "cashOnDel"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="cashOnDel" style={{ marginLeft: '8px' }}>Cash on Delivery</label>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <input
                                                    type="radio"
                                                    id="card"
                                                    name="paymentOption"
                                                    value="card"
                                                    checked={formData.paymentOption === "card"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="card" style={{ marginLeft: '8px' }}>Credit Card</label>
                                            </div>

                                            {formData.paymentOption === "card" && (
                                                <div>
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
                                                </div>
                                            )}
                                        </div>
                                       
                                        <input
                                            type="submit"
                                            value="Place order"
                                            className="btn"
                                        />
                                    </div>

                                    <div className="col-50">
                                         <label className='el' htmlFor="email">Email</label>
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
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-25">
    <div className="container">
      <h4>
        Cart
        <span className="price" style={{ color: 'black' }}>
          <i className="fa fa-shopping-cart"></i>
        </span>
      </h4>

      {product_cake.map(product => (
      <div key={product._id}>
        <p>
          {product.name}
          <span className="price">${product.price}</span>
        </p>
      </div>
    ))}

    <hr />
    <p>${totalCartPrice}</p>
    </div>
  </div>

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
