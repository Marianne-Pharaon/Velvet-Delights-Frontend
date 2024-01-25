import React, { useState } from 'react';
import axios from 'axios';
import '../Dashstyle/modal.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ closeModal, productId,onUpdate }) => {
  const [name, setCakeName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  
  const handleUpdateCake = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/products/updateproducts/${productId}`,
        {
          name: name,
          description: description,
          category: category,
          price:price,
          // Add other fields you want to update
        }
      );
  
      if (response.status === 200) {
        toast.success("Cake updated successfully!");
        closeModal();
        onUpdate(); 
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating cake. Please try again later.");
    }
  };
  


  

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>

        <div className='AddCakepage'>
          <div className='AddCakeborder'>
            <form className='addform'>
              <table className='table'>
                <tr>
                  <td className='addtextdecomodal'>Cake Name</td>
                  <td>
                    <textarea
                      className='dashinputs'
                      rows="1"
                      cols="4"
                      value={name}
                      onChange={(e) => setCakeName(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className='addtextdecomodal'>Description</td>
                  <td>
                    <textarea
                      className='dashinputs'
                      rows="4"
                      cols="50"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className='addtextdecomodal'>Price</td>
                  <td>
                    <textarea
                      className='dashinputs'
                      rows="1"
                      cols="4"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                </tr>
                <tr>
                  <td className='addtextdecomodal'>Category</td>
                  <td className='check'>
                    <textarea
                      className='dashinputs'
                      rows="1"
                      cols="4"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    ></textarea>
                  </td>

                </tr>
               
                <tr>
                  <td colSpan={4}>
                    <button className='btn' onClick={handleUpdateCake}>
                      Update
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
