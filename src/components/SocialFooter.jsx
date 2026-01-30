import tiktokIcon from '../assets/images/tiktok.png';
import instagramIcon from '../assets/images/instagram.png';
import youtubeIcon from '../assets/images/youtube.png';

const SocialFooter = () => {
    const socialLinks = [
        { id: 'tiktok', icon: tiktokIcon, url: 'https://tiktok.com/@play_woke', alt: 'TikTok' },
        { id: 'instagram', icon: instagramIcon, url: 'https://instagram.com/play_woke', alt: 'Instagram' },
        { id: 'youtube', icon: youtubeIcon, url: 'https://youtube.com/@play-woke', alt: 'YouTube' },
    ];

    return (
        <footer className="social-footer">
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
                    />
                </a>
            ))}
        </footer>
    );
};

export default SocialFooter;
