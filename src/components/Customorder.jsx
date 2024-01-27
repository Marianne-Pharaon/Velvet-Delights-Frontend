import React, { useEffect, useState } from 'react';
import style from '../style/customorder.css'
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fillings, toppings, sizes, flavours } from './options';




const Customorder = () => {
    const [fillingOption, setFillingOption] = useState({})
    const [toppingOption, setToppingOption] = useState({})
    const [SizeOption, setSizeOption] = useState({})
    const [flavourOption, setFlavourOption] = useState({});
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOrderCake = async (e) => {
        e.preventDefault();
        const otherBody = { image };
        console.log(otherBody);
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("description", description);
            // formData.append("totalPrice", price);
            console.log( flavourOption, toppingOption,SizeOption,fillingOption);
            formData.append("user_id",localStorage.getItem("user_id")); 
            formData.append("flavor", JSON.stringify(flavourOption));
            formData.append("topping", JSON.stringify(toppingOption));
            formData.append("filling", JSON.stringify(fillingOption));
            formData.append("size", JSON.stringify(SizeOption));

            const totalPrice = (
                parseFloat(fillingOption.price) +
                parseFloat(toppingOption.price) +
                parseFloat(SizeOption.price) +
                parseFloat(flavourOption.price)
            ).toFixed(2);
            setTotalPrice(totalPrice);

            formData.append("totalPrice", totalPrice)

console.log(formData);
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/custom-orders/addcustomOrders`, formData , {
                headers: {
             "Content-Type":'multipart/form-data',
                }
        });

            if (response.status === 201) {
                const data = response.data;


                console.log(data);
               toast.success("Order added successfully!");
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Please log in first .");
        }
    };

    const [selectedOptions, setSelectedOptions] = useState({
        filling: [],
        topping: [],
        flavour: [],
        size: [],
    });



    return (
        <div>
            <NavBar />
            <div className='page2'>

            <div  style={{ marginTop: '10%' }} className='grid-container'>
            <div style={{ margin: '10%' }} className="grid-item">

                <label className='txtdeco'>Flavors</label>
                
                {flavours.map((flavour, index) => (<div>
                    <input
                        type="radio"
                        key={index}
                        id="100personsCheckbox"
                        name='flavour'
                        value={flavour.price}
                        onChange={(e) => {
                            setFlavourOption(flavour)
                        }}
                    />
                    {flavour.name}
                </div>
                ))}
            </div>
            <div style={{ margin: '10%' }} className="grid-item">

                <label className='txtdeco'>Filling</label>
                
                {fillings.map((filling, index) => (<div>
                    <input
                        type="radio"
                        key={index}
                        id="100personsCheckbox"
                        name='filling'
                        value={filling.price}
                        onChange={(e) => {
                            setFillingOption(filling)
                        }}
                    />
                    {filling.name}
                </div>
                ))}
            </div>
            <div style={{ margin: '10%' }}>
            <div className="grid-item">


                <label className='txtdeco'>Topping</label>
                {toppings.map((toppings, index) => (<div>
                    <input
                        type="radio"
                        key={index}
                        id="100personsCheckbox"
                        name='Topping'
                        value={toppings.price}
                        onChange={(e) => {
                            setToppingOption(toppings)
                        }}
                    />
                    {toppings.name}
                </div>
                ))}
            </div></div>

            <div style={{ margin: '10%' }}>
            <div className="grid-item">


                <label className='txtdeco'>Size</label>

                {sizes.map((size, index) => (<div>
                    <input
                        type="radio"
                        key={index}
                        id="size"
                        value={size.price}
                        onChange={() => setSizeOption(size)}
                    />
                    {size.name}
                </div>
                ))}
            </div></div>
            </div>








<div className='flexbox'>
            <label className='txtdeco1'>Add Description</label>
            <textarea className='descdiv' rows="4" cols="50"
                onChange={(e) => setDescription(e.target.value)}></textarea></div>

<div className='flexbox'>
            <label className='txtdeco1'>inspiration image:</label>
               <input className="file"type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>


            <div className='flexbox'>
            <label className='txtdeco1'>Price :</label>
            <label className='txtdeco1'>{totalPrice !== null ? `$${totalPrice}` : 'Calculating...'} </label>          
</div>









            <button  className='btn1'onClick={handleOrderCake}>Place Order</button>
            </div>
<ToastContainer/>
            <MiniFooter />
           </div>
    )
}

export default Customorder





