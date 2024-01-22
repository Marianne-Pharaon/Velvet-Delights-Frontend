import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Checkout from './components/Checkout';
import AllProducts from './components/AllProducts';
import Cake from './components/Cake';
import Customorder from './components/Customorder';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Weddings from './components/Weddings';
import Birthdays from './components/Birthdays';
import Christmas from './components/Christmas';
import Easter from './components/Easter';
import Types from './components/Types';
import PageNotFound from './components/PageNotFound';
import SMTP from './components/SMTP';
import AboutUsPage from './components/AboutUsPage';
import DashNav from './Dashboard/DashNav';
import AddCakes from './Dashboard/AddCakes';
import DashAllProducts from './Dashboard/DashAllProducts';
import DashOrders from './Dashboard/DashOrders';
import DashUsers from './Dashboard/DashUsers';


function App() {
  return (
   
    <Router >

    <div>
      <Switch>
<Route exact path="/" ><HomePage/></Route>
 <Route path="/AllProducts"><AllProducts/></Route> 
 <Route path="/Checkout"><Checkout/></Route> 
 <Route path="/Cake"><Cake/></Route> 
 <Route path="/CustomOrder"><Customorder/></Route> 
 <Route path="/Login"><Login/></Route> 
 <Route path="/Register"><Register/></Route> 
 <Route path="/AboutUs"><AboutUs/></Route> 
 <Route path="/Contact"><Contact/></Route> 
 <Route path="/Birthdays"><Birthdays/></Route> 
 <Route path="/Weddings"><Weddings/></Route> 
 <Route path="/Easter"><Easter/></Route> 
 <Route path="/Christmas"><Christmas/></Route> 
 <Route path="/Types"><Types/></Route> 
 <Route path="/SMTP"><SMTP/></Route> 
 <Route path="/AboutUsPage"><AboutUsPage/></Route> 
 <Route path="/Cake/:productId"><Cake/></Route> 



 
  <Route exact path="/HomePage" ><HomePage/></Route> 

        <Route path="/AddCakes"><AddCakes/></Route>
        <Route path="/DashAllProducts"><DashAllProducts/></Route>
        <Route path="/DashOrders"><DashOrders/></Route>
        <Route path="/DashUsers"><DashUsers/></Route> 
         <Route path="*"><PageNotFound/></Route> 

        

</Switch>
  </div>
  </Router>

  );
}

export default App;
