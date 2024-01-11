import React  from 'react';
import '../Dashstyle/DashAllProducts.css';
import DashNav from './DashNav';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import cake from '../Images/chocolate.jpg'
import bin from '../Images/bin.png'
import edit from '../Images/edit.png'


const DashAllProducts = () => {
  return (
  <div className='prodash'>
    <DashNav/>
    <div className='title'>All Products </div>
    <div className='prodcardmain'>
      <div className='prodcard'>
        <img src={cake} className='dashprodimg'/>
        <div className='proddiv2'>
          <span className='smalltitle'>Cake Name</span>
          <img src={edit} className='editmg'/>
          <img src={bin} className='deletemg'/>
        </div>
      </div>


      <div className='prodcard'>
        <img src={cake} className='dashprodimg'/>
        <div className='proddiv2'>
          <span className='smalltitle'>Cake Name</span>
          <img src={edit} className='editmg'/>
          <img src={bin} className='deletemg'/>
        </div>
      </div>


      <div className='prodcard'>
        <img src={cake} className='dashprodimg'/>
        <div className='proddiv2'>
          <span className='smalltitle'>Cake Name</span>
          <img src={edit} className='editmg'/>
          <img src={bin} className='deletemg'/>
        </div>
      </div>



      <div className='prodcard'>
        <img src={cake} className='dashprodimg'/>
        <div className='proddiv2'>
          <span className='smalltitle'>Cake Name</span>
          <img src={edit} className='editmg'/>
          <img src={bin} className='deletemg'/>
        </div>
      </div>


      <div className='prodcard'>
        <img src={cake} className='dashprodimg'/>
        <div className='proddiv2'>
          <span className='smalltitle'>Cake Name</span>
          <img src={edit} className='editmg'/>
          <img src={bin} className='deletemg'/>
        </div>
      </div>



      <div className='prodcard'>
        <img src={cake} className='dashprodimg'/>
        <div className='proddiv2'>
          <span className='smalltitle'>Cake Name</span>
          <img src={edit} className='editmg'/>
          <img src={bin} className='deletemg'/>
        </div>
      </div>


    </div>
    </div>
  )
}

export default DashAllProducts