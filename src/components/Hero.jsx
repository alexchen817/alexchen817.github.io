import '../styles/Hero.css'
import emailLogo from '../assets/emailLogo.svg'
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <>
            <div className="hero" id='hero'>
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
                <div className='hero-icons'>
                    <a href='https://github.com/alexchen817' target='_blank' >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                            alt='Github icon' />
                    </a>

                    <a href='https://linkedin.com/in/alexchen817' target='_blank' >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                            alt='Linkedin icon' />
                    </a>
                    <a href="mailto:aca343@sfu.ca" target="_blank">
                        <img src={emailLogo}
                            alt='Mail icon' />
                    </a>
                </div>
            </div>
        </>
    );
}