import '../styles/Description.css'

export default function Description(props) {
    return (
        <div className='description-box'>
            <p> {props.point1}</p>
            <p> {props.point2}</p>
            <p> {props.point3}</p>
            <p> {props.point4}</p>
        </div>
    );
}