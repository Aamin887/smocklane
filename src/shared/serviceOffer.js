import '../assets/styles/offer.css'
import Button from "./button"

const ServiceCard = ({headingText, bodyText, bgImage, onClick}) => {
    return(
        <article className="offer-card" style={{backgroundImage:`url(${bgImage})`}}>
           <div className='offer-container'>
             <h3>
                {headingText}
            </h3>
            <small>{bodyText}</small>
            <Button text={'Add'} onClick={''} />
           </div>
        </article>
    )
};

export default ServiceCard;