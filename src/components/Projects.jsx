import Description from './Description'
import openNewTabIcon from '../assets/openNewTabIcon.svg';
import '../styles/Projects.css'

export default function Projects() {
    const flowDescription = `FlowSense is a mobile app built with React Native + Expo that connects 
          to a smart device via Bluetooth to monitor real-time water usage. 
          It helps users understand their freshwater consumption and promotes sustainable habits through 
          live data visualization and insights.`;
    const portfolioDescription = `My personal portfolio showcases my projects, tools, and experience
          as a developer. I built this website with Vite + React, and deployed it with Github Pages.`;
    const hackathonDescription = `SystemHacks is an annual hackathon that brings together
          over 200 participants to innovate and collaborate on tech solutions. I developed the event 
          website using HTML, CSS, and JavaScript.`;
    return (
        <div className='projects-box' id='projects'>
            <h1>
                Projects
            </h1>
            <div className='project-header'>
                <h2>FlowSense</h2>
                <a href='https://github.com/flowsense2025/FLOW-MA' target='_blank' rel='noopener noreferrer'>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt='Github icon'
                        className='github-icon' height="45px"
                    />
                </a>
            </div>
            <Description point1={flowDescription} />
            <div className='project-header'>
                <h2>Personal Portfolio</h2>
                <a href='https://github.com/alexchen817/alexchen817.github.io' target='_blank' rel='noopener noreferrer'>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt='Github icon'
                        className='github-icon' height="40px"
                    />
                </a>
                <a href='https://alexchen817.github.io/' target='_blank' rel='noopener noreferrer'>
                    <img src={openNewTabIcon} alt="Open Link in New Tab" height="45px"></img>
                </a>
            </div>
            <Description point1={portfolioDescription} />
            <div className='project-header'>
                <h2>SystemHacks Website</h2>
                <a href='https://github.com/ssss-sfu/2025-dreamhacks' target='_blank' rel='noopener noreferrer'>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt='Github icon'
                        className='github-icon' height="45px"
                    />
                </a>
                <a href='https://systemshacks.com/' target='_blank' rel='noopener noreferrer'>
                    <img src={openNewTabIcon} alt="Open Link in New Tab" height="45px"></img>
                </a>
            </div>
            <Description point1={hackathonDescription} />
        </div >
    );
}