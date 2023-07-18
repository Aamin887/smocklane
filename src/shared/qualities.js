import '../assets/styles/quality.css'


const Quality = ({Icon, heading, body}) => {
    return(
        <div className='quality'>
            <p className='icon'>{<Icon/>}</p>
            <h4>{heading}</h4>
            <p>{body}</p>
        </div>
    )
}


export default Quality;