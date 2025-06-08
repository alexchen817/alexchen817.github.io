import '../styles/NavBar.css'
import Resume from '../assets/AlexResume.pdf'
export default function NavBar() {
    return (
        <nav className='navbar'>
            <a href='#hero'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Experience</a>
            <a href='#tools'>Tools/Technologies</a>
            <a href='#'>Projects</a>
            <a href='#'>Awards</a>
            <a href={Resume} target='_blank'>Resume</a>
        </nav>
    );
}