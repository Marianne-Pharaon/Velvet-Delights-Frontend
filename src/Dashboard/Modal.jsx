import React, { useState } from 'react';
import axios from 'axios';
import '../Dashstyle/modal.css';

const Modal = ({ closeModal, productId }) => {
  const [name, setCakeName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState("");


  const handleUpdateCake = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);

      const response = await axios.post(
        `http://localhost:8001/products/updateproducts/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        console.log(formData);
        window.alert("Cake updated successfully!");
        closeModal(); 
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error updating cake. Please try again later.");
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
                {/* <tr>
                  <td className='addtextdecomodal'>Size</td>
                  <td>
                    <textarea
                      className='dashinputs'
                      rows="1"
                      cols="4"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    ></textarea>
                  </td>
                </tr> */}
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
