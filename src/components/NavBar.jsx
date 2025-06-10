import '../styles/NavBar.css'
import Resume from '../assets/AlexResume.pdf'
export default function NavBar() {
    return (
        <nav className='navbar'>
            <a href='#hero'>Home</a>
            <a href='#about'>About</a>
            <a href='#experience'>Experience</a>
            <a href='#tools'>Tools/Technologies</a>
            <a href='#projects'>Projects</a>
            <a href='#awards'>Awards</a>
            <a href={Resume} target='_blank'>Resume</a>
        </nav>
    );
}