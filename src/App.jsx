import './index.css';
import Helicopter from './components/Helicopter';
import DroppingItems from './components/DroppingItems';
import Globe from './components/Globe';
import TimeLocation from './components/TimeLocation';
import SocialFooter from './components/SocialFooter';
import LandscapeBlocker from './components/LandscapeBlocker';

// Import images
import logoImg from './assets/images/logo.png';
import taglineImg from './assets/images/tagline.png';

function App() {
  return (
    <>
      <LandscapeBlocker />

      <div className="main-container">
        {/* Helicopter with play button */}
        <Helicopter />

        {/* Dropping items animation */}
        <DroppingItems />

        {/* Logo section */}
        <div className="logo-section">
          <img src={logoImg} alt="PLAY-WOKE" className="logo-image" />
          <img src={taglineImg} alt="We Hustle Light" className="tagline-image" />
          <TimeLocation />
        </div>

        {/* Globe section */}
        <Globe />

        {/* Social footer */}
        <SocialFooter />
      </div>
    </>
  );
}

export default App;
