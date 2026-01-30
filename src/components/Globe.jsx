import globeImg from '../assets/images/globe.webp';
import libraryLabel from '../assets/images/library-label.webp';

const Globe = () => {
    const handleClick = () => {
        window.open('https://libraryiam.org', '_blank');
    };

    return (
        <div className="globe-section">
            <div className="globe-wrapper" onClick={handleClick}>
                <img src={globeImg} alt="Globe" className="globe-image" loading="lazy" />
                <img src={libraryLabel} alt="Library I AM" className="library-label" loading="lazy" />
            </div>
        </div>
    );
};

export default Globe;
