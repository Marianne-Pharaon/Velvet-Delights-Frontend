import React, { useEffect, useState } from 'react';
import '../Dashstyle/DashUsers.css';
import DashNav from './DashNav';
import axios from 'axios';  



const DashOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('${process.env.REACT_APP_API_URL}/checkout/getcheckouts');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='dashusers'>
      <DashNav />
      <div className='title4'>Orders </div>
      <div className='usersmain1'>
        <div className='usersmain2'>
          <table className='userstab'>
            <thead>
              <tr>
                <th className='utableth'>Name</th>
                <th className='utableth'>Phone Number</th>
                <th className='utableth'>Email</th>
                <th className='utableth'>Delivery Address</th>
                <th className='utableth'>Due Date</th>
                <th className='utableth'>order</th>
                <th className='utableth'>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.user_id}>
                  <td className='utableth'>{order.fullName}</td>
                  <td className='utableth'>{order.phoneNumber}</td>
                  <td className='utableth'>{order.email}</td>
                  <td className='utableth'>{order.address}</td>
                  <td className='utableth'>{order.Due_Date}</td>
                  <td className='utableth'>{order.total}</td>
                  <td className='utableth'>{order.total}</td>
                  <td className='utableth'>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashOrders;

