// AddCakes.js

import React, { useState } from 'react';
import '../Dashstyle/AddCake.css';
import DashNav from './DashNav';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';




const AddCakes = () => {
    const [image, setImage] = useState("");
    const [name, setCakeName] = useState('');
    const [description, setDescription] = useState('');
    // const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleAddCake = async (event) => {
        event.preventDefault();
        
        try {
          const formData = new FormData();
          formData.append("image", image);
          formData.append("name", name);
          formData.append("description", description);
          formData.append("category", category);
          formData.append("price", parseFloat(price));
      
          const response = await axios.post(
            "http://localhost:8001/products/addproduct",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
      
          if (response.status === 201) {
            const data = response.data;
      
            if (data.price) {
              setPrice(data.price);
            }
      
            console.log(formData);
            toast.success("Cake added successfully!");
          } else {
            throw new Error("Network response was not ok");
          }
        } catch (error) {
          console.error("Error:", error);
        toast.error("Error adding cake. Please try again later.");
        }
      };
      
    return (
        <div>
            <DashNav />
            <div className='AddCakepage'>
                <div className='Addtitle'>Add Cake</div>
                <div className='AddCakeborder'>
                    <form className='addform'  >
                        <table className='table'>
                        <tbody>

                            <tr>
                                <td className='addtxtdeco'>Cake Name</td>
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
                                <td className='addtxtdeco'>Description</td>
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
                                <td className='addtxtdeco'>Price</td>
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
                                <td className='addtxtdeco'>Image</td>
                                <td colSpan="2">
                                    <input type="file" onChange={(e) => setImage(e.target.files[0])}  />
                                </td>
                            </tr>
                            <tr>
                                <td className='addtxtdeco'>Category</td>
                                <td className='check'> <textarea
                                        className='dashinputs'
                                        rows="1"
                                        cols="4"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    ></textarea></td>
                                   
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <button className='btn'onClick={handleAddCake}>Add</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default AddCakes;


 {/* <input type="checkbox" id="myCheckbox" /> Cake<br />
                                    <input type="checkbox" id="myCheckbox" className='dashinputs' /> Cupcake<br />
                                    <input type="checkbox" id="myCheckbox" className='check' /> Cookies
                                </td>
                                <td className='check'>
                                    <input type="checkbox" id="myCheckbox" /> Birthdays<br />
                                    <input type="checkbox" id="myCheckbox" /> Weddings<br />
                                    <input type="checkbox" id="myCheckbox" /> Christmas<br />
                                    <input type="checkbox" id="myCheckbox" /> Easter
                                </td> */}