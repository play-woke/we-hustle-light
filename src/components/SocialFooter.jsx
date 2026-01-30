import { useState, useRef } from 'react';
import tiktokIcon from '../assets/images/tiktok.webp';
import instagramIcon from '../assets/images/instagram.webp';
import youtubeIcon from '../assets/images/youtube.webp';
import recordImg from '../assets/images/record.webp';
import helicopterSound from '../assets/audio/helicopter-sound.mp3';

const SocialFooter = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const socialLinks = [
        { id: 'tiktok', icon: tiktokIcon, url: 'https://tiktok.com/@play_woke', alt: 'TikTok' },
        { id: 'instagram', icon: instagramIcon, url: 'https://instagram.com/play_woke', alt: 'Instagram' },
        { id: 'youtube', icon: youtubeIcon, url: 'https://youtube.com/@play-woke', alt: 'YouTube' },
    ];

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(e => console.log('Audio play failed:', e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <footer className="footer-container">
            {/* Social bar on the left */}
            <div className="social-bar">
                {socialLinks.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={social.icon}
                            alt={social.alt}
                            className="social-icon"
                            loading="lazy"
                        />
                    </a>
                ))}
            </div>

            {/* Record player button on the right */}
            <div className="record-player" onClick={toggleAudio}>
                <img
                    src={recordImg}
                    alt="Listen"
                    className={`record-image ${isPlaying ? 'spinning' : ''}`}
                />
                <div className={`play-triangle ${isPlaying ? 'hidden' : ''}`}></div>
            </div>

            <audio ref={audioRef} src={helicopterSound} loop />
        </footer>
    );
};

export default SocialFooter;
