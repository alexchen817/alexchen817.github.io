import '../styles/Experience.css'
import Description from './Description';
export default function Experience() {

    const vexPoint1 = `• Utilized advanced autonomous navigation algorithms in C++ for the Robot Skills Challenge 
          and won 1st place in the Robot Skills Challenge at the 2025 VEX U World Championship.`;
    const vexPoint2 = `• Integrated an optical tracking odometry sensor to achieve high-precision positioning 
          and rapid autonomous movements, enhancing robot performance under competition constraints.`;
    const vexPoint3 = `• Contributed to team’s achievement of the Excellence Award and Overall 1st place win 
          at the VEX U 2025 World Championship.`;
    const vexPoint4 = `• Featured on CBC News for innovative robotics solutions 
          and global competition success, highlighting impact and technical leadership.`;

    const pianoPoint1 = `• Personalized piano and robotics lessons, adapting methods to support student growth and skill development.`;
    const pianoPoint2 = `• Mentored students in VEX IQ and V5 robotics, focusing on mechanical design, programming, and problem-solving.`;
    const pianoPoint3 = `• Monitored student progress and provided structured feedback to parents to support skill development.`;

    return (

        <div className='experience-layout' id="experience">
            <h1>Experience</h1>
            <h2>Software Developer | VEX U TNTN Robotics</h2>
            <Description point1={vexPoint1} point2={vexPoint2} point3={vexPoint3} point4={vexPoint4} />
            <h2>Piano Teacher & Robotics Tutor</h2>
            <Description point1={pianoPoint1} point2={pianoPoint2} point3={pianoPoint3} />
        </div >
    );
}