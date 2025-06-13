import '../styles/About.css'
import Photo from '../assets/headshotPhoto.JPG'
export default function About() {
    return (

        <div id='about' className='about-container'>
            <h1 className='title'>About Me</h1>
            <div className="about-layout">
                <div className="about-text-box">
                    <p className='overlay-text'>
                        Hi, I’m Alex, a software developer with a passion for creating practical,
                        user-focused solutions. I am currently building web applications using React,
                        Next.js, and Firebase, and I plan to learn Kotlin in the near future.
                        My journey into tech started with competitive robotics, where I competed at the
                        VEX Worlds Championship in high school and discovered a love for embedded systems
                        and problem-solving under pressure. Since then, I’ve expanded into web development
                        and control theory. I'm currently pursuing a degree in Computer Science,
                        with plans to continue into cybersecurity, where I can bridge my interests in systems,
                        security, and real-world impact. Thanks for stopping by!
                    </p>
                </div>
                <img className="image" src={Photo} alt="Headshot Photo" />
            </div>
        </div>

    );
}