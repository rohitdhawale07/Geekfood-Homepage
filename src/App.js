import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageTextSection from './components/ImageTextSection';
import CardSection from './components/CardSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <ImageTextSection/>
    <CardSection/>,
    <Footer/>
    </div>
  );
}

export default App;
