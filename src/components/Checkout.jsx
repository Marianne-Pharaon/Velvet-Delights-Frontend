import React from 'react';
import style from '../style/Checkout.css'
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';



const Checkout = () => {
  function verifyEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      document.getElementById('verificationMessage').textContent = 'Email is valid!';
    } else {
      document.getElementById('verificationMessage').textContent = 'Invalid email format. Please enter a valid email address.';
    }
  }
  return (
    <div className='page'>       <NavBar />

      <div className='cbody'>

        <div className="row">
          <div className="col-75">
            <div className="container">
              <form className='cform'>
                <div className="row">
                  <div className="col-50">
                    <h3>Checkout</h3><br />
                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" />
                    <label htmlFor="date"><i className="fa fa-envelope"></i> Due Date</label>
                    <input type="date" id="date" name="date" />
                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" />
                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i>Delivery Address</label>
                    <input type="text" id="adr" name="address" />


                  </div>

                  <div className="col-50">
                    <h3>Payment</h3><br />
                    <label htmlFor="fname"> Card</label>

                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" /><br />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                    <label><br />
                      <input type="checkbox" defaultChecked={false} name="cashondel" /> Cash on delivery
                    </label>


                  </div>
                </div>

                <input type="submit" onclick="verifyEmail()" value="Place order" className="btn" />
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
              <p><a href="#">Product 1</a> <span className="price">$15</span></p>
              <p><a href="#">Product 2</a> <span className="price">$5</span></p>
              <p><a href="#">Product 3</a> <span className="price">$8</span></p>
              <p><a href="#">Product 4</a> <span className="price">$2</span></p>
              <hr />
              <p>Total <span className="price" style={{ color: 'rgb(187, 0, 9)' }}><b>$30</b></span></p>
            </div>
          </div>

        </div>
      </div>
      <div className='footercheckout'>
      <MiniFooter /></div>
    </div>
  );
};

export default Checkout;
