import '../index.css';
import { TypeAnimation } from "react-type-animation";

function Presentation() {
    return (
        <>
            <main>
                <div className="hero-image">
                <div className="hero-h1 hero-text">
                    <TypeAnimation sequence={[
                        'Me llamo Alejandro Moreno', 2000, 
                        'I am Alejandro Moreno', 2000, 
                        'Em dic Alejandro Moreno', 2000,
                        'Me llamo Alejandro Moreno', 2000]} wrapper="h1" className='hero-h1'></TypeAnimation>
                    <p className="hero-p">Junior Programmer &#8594; Front-End, Game Dev</p>
                    <button className='hero-button'>Conoceme</button>
                </div>
                </div>
            </main>
        </>
    );
}

export default Presentation;