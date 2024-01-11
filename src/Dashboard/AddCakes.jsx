// AddCakes.js

import React, { useState } from 'react';
import '../Dashstyle/AddCake.css';
import DashNav from './DashNav';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";



const AddCakes = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [cakeName, setCakeName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        toast.success("Cake Added successfully");
    };
    return (
        <div>
            <DashNav />
            <div className='AddCakepage'>
                <div className='Addtitle'>Add Cake</div>
                <div className='AddCakeborder'>
                    <form className='addform' onSubmit={handleFormSubmit} >
                        <table className='table'>
                            <tr>
                                <td className='addtxtdeco'>Cake Name</td>
                                <td>
                                    <textarea
                                        className='dashinputs'
                                        rows="1"
                                        cols="4"
                                        value={cakeName}
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
                                <td className='addtxtdeco'>Size</td>
                                <td>
                                    <textarea
                                        className='dashinputs'
                                        rows="1"
                                        cols="4"
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
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
                                    <input type="file" onChange={handleFileChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='addtxtdeco'>Category</td>
                                <td className='check'>
                                    <input type="checkbox" id="myCheckbox" /> Cake<br />
                                    <input type="checkbox" id="myCheckbox" className='dashinputs' /> Cupcake<br />
                                    <input type="checkbox" id="myCheckbox" className='check' /> Cookies
                                </td>
                                <td className='check'>
                                    <input type="checkbox" id="myCheckbox" /> Birthdays<br />
                                    <input type="checkbox" id="myCheckbox" /> Weddings<br />
                                    <input type="checkbox" id="myCheckbox" /> Christmas<br />
                                    <input type="checkbox" id="myCheckbox" /> Easter
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <button className='btn'>Add</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                    <ToastContainer/>

                </div>
            </div>
        </div>
    );
};

export default AddCakes;
