import { motion } from 'framer-motion';
import bucketImg from '../assets/images/bucket.png';
import watergunImg from '../assets/images/watergun.png';
import sandwichImg from '../assets/images/sandwich.png';
import skiMaskImg from '../assets/images/ski-mask.png';

const DroppingItems = () => {
    const items = [
        { id: 'sandwich-1', src: sandwichImg, delay: 0, type: 'sandwich' },
        { id: 'watergun-1', src: watergunImg, delay: 0.5, type: 'watergun' },
        { id: 'bucket-1', src: bucketImg, delay: 1.0, type: 'bucket' },
        { id: 'skimask-1', src: skiMaskImg, delay: 1.5, type: 'skimask' },
        { id: 'sandwich-2', src: sandwichImg, delay: 2.0, type: 'sandwich' },
        { id: 'watergun-2', src: watergunImg, delay: 2.5, type: 'watergun' },
        { id: 'bucket-2', src: bucketImg, delay: 3.0, type: 'bucket' },
        { id: 'skimask-2', src: skiMaskImg, delay: 3.5, type: 'skimask' },
        { id: 'sandwich-3', src: sandwichImg, delay: 4.0, type: 'sandwich' },
        { id: 'watergun-3', src: watergunImg, delay: 4.5, type: 'watergun' },
    ];

    const dropAnimation = {
        initial: {
            y: -100,
            opacity: 0,
            rotate: 0
        },
        animate: (customDelay) => ({
            y: [-100, 200, 400, 600, 800, 1000],
            opacity: [1, 1, 1, 1, 1, 1],
            rotate: [0, 90, 180, 270, 360],
            transition: {
                duration: 5.4,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0,
                delay: customDelay
            }
        })
    };

    return (
        <div className="dropping-items-container">
            {items.map((item) => (
                <motion.img
                    key={item.id}
                    src={item.src}
                    alt={item.id}
                    className={`dropping-item item-${item.type}`}
                    custom={item.delay}
                    initial="initial"
                    animate="animate"
                    variants={dropAnimation}
                />
            ))}
        </div>
    );
};

export default DroppingItems;
