import helicopterImg from '../assets/images/helicopter.webp';

const Helicopter = () => {
    return (
        <div className="helicopter-section">
            <div className="helicopter-wrapper">
                <img
                    src={helicopterImg}
                    alt="Helicopter"
                    className="helicopter-image helicopter-shake"
                />
            </div>
        </div>
    );
};

export default Helicopter;
