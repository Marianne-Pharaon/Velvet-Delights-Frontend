import React, { useEffect, useState } from 'react';
import '../Dashstyle/DashUsers.css';
import DashNav from './DashNav';
import axios from 'axios';

const DashUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8001/user/getusers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8001/user/deleteusers/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='dashusers'>
      <DashNav />
      <div className='title4'>Users </div>
      <div className='usersmain1'>
        <div className='usersmain2'>
          <table className='userstab'>
            <tr>
              <th className='utableth'>Name</th>
              <th className='utableth'>Phone Number</th>
              <th className='utableth'>Email</th>
              <th className='utableth'>Age</th>
              <th className='utableth'>Delete User</th>
            </tr>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td className='utableth'>{user.fullName}</td>
                <td className='utableth'>{user.phoneNumber}</td>
                <td className='utableth'>{user.email}</td>
                <td className='utableth'>{user.age}</td>

                <td className='utableth'>
                  <button onClick={() => handleDeleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashUsers;
