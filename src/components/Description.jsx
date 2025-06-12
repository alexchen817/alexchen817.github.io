import '../styles/Description.css'

export default function Description(props) {
    return (
        <div className='description-box'>
            <p className='description-text'> {props.point1}</p>
            <p className='description-text'> {props.point2}</p>
            <p className='description-text'> {props.point3}</p>
            <p className='description-text'> {props.point4}</p>
        </div>
    );
}