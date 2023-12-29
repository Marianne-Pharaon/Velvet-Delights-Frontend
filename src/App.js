// import './App.css';
import Catalog from './components/Catalog';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Contact from './components/Contact';

function App() {
  return (
    <div>
  <NavBar/>
  <HeroSection/>
  <Catalog/>
  <AboutUs/>
  <Categories/>
  <Contact/>
  </div>
  );
}

export default App;
