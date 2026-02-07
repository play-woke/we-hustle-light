import './index.css';
import Helicopter from './components/Helicopter';
import DroppingItems from './components/DroppingItems';
import Globe from './components/Globe';
import TimeLocation from './components/TimeLocation';
import SocialFooter from './components/SocialFooter';
import LandscapeBlocker from './components/LandscapeBlocker';

// Import optimized WebP images
import logoImg from './assets/images/logo.webp';
import taglineImg from './assets/images/tagline.webp';

function App() {
  const handleLogoClick = () => {
    window.open('https://play-woke-sooty.vercel.app', '_blank');
  };

  return (
    <>
      <LandscapeBlocker />

      <div className="main-container">
        {/* Helicopter - now behind logo */}
        <Helicopter />

        {/* Dropping items animation */}
        <DroppingItems />

        {/* Logo section */}
        <div className="logo-section">
          <img
            src={logoImg}
            alt="PLAY-WOKE"
            className="logo-image"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
          <img src={taglineImg} alt="We Hustle Light" className="tagline-image" loading="lazy" />
          <TimeLocation />
        </div>

        {/* Globe section */}
        <Globe />

        {/* Footer with social bar and record player */}
        <SocialFooter />
      </div>
    </>
  );
}

export default App;

