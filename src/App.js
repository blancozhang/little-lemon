
import './App.css';
import About from './components/About';
import FooterNavigation from './components/FooterNavigation';
import HeroSection from './components/HeroSection';
import Hightlights from './components/Hightlights';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='main'>
      <Navigation/>
      <HeroSection/>
      <Hightlights/>
      <About/>
      <FooterNavigation/>
    </div>
  );
}

export default App;
