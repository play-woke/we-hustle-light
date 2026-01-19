import globeImg from '../assets/images/globe.png';
import libraryLabel from '../assets/images/library-label.png';

const Globe = () => {
    const handleClick = () => {
        window.open('https://library-iam.vercel.app/', '_blank');
    };

    return (
        <div className="globe-section">
            <div className="globe-wrapper" onClick={handleClick}>
                <img src={globeImg} alt="Globe" className="globe-image" />
                <img src={libraryLabel} alt="Library I AM" className="library-label" />
            </div>
        </div>
    );
};

export default Globe;
