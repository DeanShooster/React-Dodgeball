
import './ball.scss';

const Ball = ({x,y}) => {
    return <div className="ball" style={{top: x , left: y}}></div>
};

export default Ball;