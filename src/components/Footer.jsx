import '../styles/Footer.css'
import emailLogo from '../assets/emailLogo.svg'
export default function Footer() {
    return (
        <footer className='footer-style'>
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
        </footer >
    );
}