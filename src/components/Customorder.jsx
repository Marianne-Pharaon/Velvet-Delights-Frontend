import React, { useState } from 'react';
import style from '../style/customorder.css'
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import { Link } from 'react-router-dom';




const Customorder = () => {

        const [selectedFile, setSelectedFile] = useState(null);
      
        const handleFileChange = (event) => {
          const file = event.target.files[0];
          
          setSelectedFile(file);
        };
      
  return (
    <div className='page2'>       <NavBar/>
    <div className='order'>
        <form className='orderform' >
            <table className='table1'>
              
<tr>
    <td className='txtdeco'>Filling</td>
    <td className='check' > <input type="checkbox" id="myCheckbox"  name="vanilla Cream"/>Snicker<br/><input type="checkbox" id="myCheckbox"  name="with nuts"/>Cherry bomb</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"  name="chocolate filling"/>Red Velvet<br/><input type="checkbox" id="myCheckbox"  name="chocolate chips"/>Berry</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"  name="strawberry"/>Oreo Cheese<br/> <input type="checkbox" id="myCheckbox"  name="ice cream"/>Ice Cream</td>
</tr>
<tr>
    <td className='txtdeco'>Topping</td>
    <td className='check' > <input type="checkbox" id="myCheckbox" name="sprinkles"/>sprinkles<br/><input type="checkbox" id="myCheckbox" name="chocolate"/>chocolate</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"  name="fruits"/>fruits<br/><input type="checkbox" id="myCheckbox"  name="vanilla cream"/>vanilla cream</td>
    <td className='check'>  <input type="checkbox" id="myCheckbox" name="sugar"/>sugar<br/><input type="checkbox" id="myCheckbox" name="design"/>design</td>
</tr>
<tr>
    <td className='txtdeco'>Flavor</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"  name="vanilla "/>vanilla<br/><input type="checkbox" id="myCheckbox" name="orange"/>orange</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"  name="chocolate "/>chocolate<br/><input type="checkbox" id="myCheckbox" name="berries"/>berries</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"  name="strawberry"/>strawberry<br/><input type="checkbox" id="myCheckbox" name="cheescake"/>cheescake</td>
</tr>
<tr>
    <td className='txtdeco'>Size</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"   /> 5 persons<br/><input type="checkbox" id="myCheckbox" className='check' name="orange"/>25 persons</td>
    <td className='check'> <input type="checkbox" id="myCheckbox"   />10 persons<br/><input type="checkbox" id="myCheckbox" name="berries"/>50 persons</td>
    <td className='check'> <input type="checkbox" id="myCheckbox" />15 persons<br/><input type="checkbox" id="myCheckbox"  name="cheescake"/>100 persons or more</td>
</tr>

<tr>
    <td className='txtdeco'>Add Description</td>
    <td colspan="3"><textarea className='descdiv' rows="4" cols="50"></textarea></td>
</tr>

<tr>
    <td className='txtdeco'>inspiration image</td>
    <td colspan="3">      <input type="file" onChange={handleFileChange} />
</td>
</tr>

<tr>
    <td className='txtdeco'>Price :</td>
  
    <td ></td>
</tr>
<tr>
    <td colSpan={4}> <Link to="/Checkout"><button className='btn'>Checkout</button></Link></td>
</tr>


            </table>
        </form>

    </div>
    
  
    <MiniFooter/>
    </div>
  )
}

export default Customorder

   
   


