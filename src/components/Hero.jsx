import '../styles/Hero.css'
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <div className="hero">
            <h1>Hi! I'm Alexander</h1>
            <h2 className="text">
                and I am
                <Typewriter
                    options={{
                        strings: ['a Software Developer', 'a Competitive Robotics Veteran', 'Always Learning'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2 >
        </div>
    );
}