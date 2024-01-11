import React  from 'react';
import '../Dashstyle/DashUsers.css';
import DashNav from './DashNav';
import { Link } from 'react-router-dom';

const DashUsers = () => {
  return (
    <div className='dashusers'>
      <DashNav/>
  <div className='title4'>Users </div>
  <div className='usersmain1'>
    <div className='usersmain2'>
      <table className='userstab'>

        <tr>
          <th className='utableth'>Name</th>
          <th className='utableth'>Phone Number</th>
          <th className='utableth'>Email</th>
          <th className='utableth'>Address</th>

        </tr>
        <tr>
          <td className='utableth'>marianne</td>
          <td className='utableth'>78846575</td>
          <td className='utableth'>mariannepharaon@gmail.com</td>
          <td className='utableth'>zahle bekaa lebanon</td>

        </tr>
      </table>
      
</div>



    </div>
    </div>
  )
}

export default DashUsers;