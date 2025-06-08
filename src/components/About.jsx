import '../styles/About.css'

export default function About() {
    console.log("rendered!");
    return (
        <div className="layout" id='about'>
            <h1 className='title'>About Me</h1>
            <div className="text">
                Hi!
            </div>
            <img src="../assets/headshotPhoto.JPG" alt="Headshot Photo" />
        </div>

    );
}