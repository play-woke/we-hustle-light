import { useState, useRef } from 'react';
import helicopterImg from '../assets/images/helicopter.png';
import helicopterSound from '../assets/audio/helicopter-sound.mp3';

const Helicopter = () => {
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log('Audio play failed:', e));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="helicopter-section">
            <div
                className="helicopter-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={helicopterImg}
                    alt="Helicopter"
                    className="helicopter-image helicopter-shake"
                />
                <div className="play-button"></div>
            </div>
            <audio ref={audioRef} src={helicopterSound} loop />
        </div>
    );
};

export default Helicopter;
