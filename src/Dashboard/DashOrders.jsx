import React, { useEffect, useState } from 'react';
import '../Dashstyle/DashUsers.css';
import DashNav from './DashNav';
import axios from 'axios';  

const DashOrders = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8001/checkout/getCheckoutById'); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='dashusers'>
      <DashNav />
      <div className='title4'>Orders </div>
      <div className='usersmain1'>
        <div className='usersmain2'>
          <table className='userstab'>
            <tr>
              <th className='utableth'>Name</th>
              <th className='utableth'>Order</th>
              <th className='utableth'>Phone Number</th>
              <th className='utableth'>Email</th>
              <th className='utableth'>Delivery Address</th>
              <th className='utableth'>Due Date</th>
              <th className='utableth'>Name on Card</th>
              <th className='utableth'>Card Number</th>
              <th className='utableth'>Cash On Delivery</th>
              <th className='utableth'>Total Price</th>
            </tr>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td className='utableth'>{user.fullName}</td>
                <td className='utableth'>{user.phoneNumber}</td>
                <td className='utableth'>{user.email}</td>
                <td className='utableth'>{user.address}</td>
                <td className='utableth'>{user.Due_Date}</td>
                <td className='utableth'>{user.total}</td>

              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashOrders;
