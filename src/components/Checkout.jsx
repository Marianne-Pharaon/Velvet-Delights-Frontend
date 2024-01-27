import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getUserID } from '../Util/GetUsersData';

import '../style/Checkout.css';

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [Due_date, setDue_date] = useState('');
  const [email, setEmail] = useState('');
  const user_id = getUserID();
  const [product_cake, setProduct_cake] = useState([]);
  const [error, setError] = useState(null);
  const [Payment, setPayment] = useState(null);
  const [nameOnCard, setNameOnCard] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !address || !Due_date) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/checkout/addcheckouts`, {
        user_id: user_id,
        fullName,
        address,
        email,
        Due_date,
        paymentOption: 'cashOnDel',
        card: {
          nameOnCard: '',
          cardNumber: '',
        },
      });
      console.log(response);

      if (response.status === 201) {
        toast.success('Order Added Successfully');

        console.log('Order added successfully');
        setFullName('');
        setEmail('');
        setDue_date('');
        setAddress('');
        setNameOnCard ('');
        setCardNumber ('')
      } else {
        setError('Unable to place order');
        toast.error('Unable to place order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  const [customOrders, setCustomOrders] = useState([]);

  const fetchCustomOrders = async () => {
    try {
      if (!user_id) {
        return;
      }
  
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/custom-orders/getcustomOrders/${user_id}`);
      console.log(response);
      const ordersArray = Array.isArray(response.data) ? response.data : [];
      setCustomOrders(ordersArray);
    } catch (error) {
      console.error('Error fetching custom orders:', error);
    }
  };
  

  return (
    <div className="page">
      <NavBar />
      <div className="cbody">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form className="cform" onSubmit={handleCheckout}>
                <div className="row">
                  <div className="col-50">
                    <h3>Checkout</h3>
                    <br />
                    <label htmlFor="fname">Full Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label htmlFor="date">Due Date</label>
                    <input
                      type="date"
                      id="date"
                      name="dueDate"
                      value={Due_date}
                      onChange={(e) => setDue_date(e.target.value)}
                    />
                    <h3 className="pymnt">Payment</h3>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="radio"
                          id="cashOnDel"
                          name="paymentOption"
                          value="cashOnDel"
                          // checked={Payment === 'cashOnDel'}
                          // onChange={(e) => setPayment('cashOnDel')}
                        />
                        <label htmlFor="cashOnDel" style={{ marginLeft: '8px' }}>
                          Cash on Delivery
                        </label>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="radio"
                          id="card"
                          name="paymentOption"
                          value="card"
                          checked={Payment === 'card'}
                          onChange={(e) => setPayment('card')}
                        />
                        <label htmlFor="card" style={{ marginLeft: '8px' }}>
                          Credit Card
                        </label>
                      </div>

                      {Payment === 'card' && (
                        <div>
                          <label htmlFor="cname">Name on Card</label>
                          <input
                            type="text"
                            id="cname"
                            name="nameOnCard"
                            value={nameOnCard}
                            onChange={(e) => setNameOnCard(e.target.value)}
                          />
                          <label htmlFor="ccnum">Credit card number</label>
                          <input
                            type="text"
                            id="ccnum"
                            name="cardNumber"
                            placeholder="1111-2222-3333-4444"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                    <input type="submit" value="Place order" className="btn" />
                  </div>

                  <div className="col-50">
                    <label className="el" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="adr">Delivery Address</label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
              <div>
<p>Chocolate cake</p></div>
              {customOrders.map((order, index) => (
  <div key={index}>
    <img src={order.product_image} alt="Product" style={{ maxWidth: '100px', maxHeight: '100px' }} />
    <p>Price: ${order.totalPrice}</p>
    <hr />
  </div>
))}

    
  
  

    
    <hr />
       <p>Total Price: ${customOrders.reduce((total, order) => total + order.totalPrice, 0)}</p>

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
