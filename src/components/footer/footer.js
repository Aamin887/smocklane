import '../../assets/styles/footer.css'
import Button from '../../shared/button'
import {date} from '../../utils/datetime'

import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa'

let socials =[
    {
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100041698285157',
    Icon: AiFillFacebook
},
    {
    name: 'whatsapp',
    url: 'https://api.whatsapp.com/send?phone=%2B233502799995&app=facebook&entry_point=page_cta&fbclid=IwAR29vE7UedHfgHJdHWV0tpl5XfF01VtsgXAAQN9fBy8idWynAM6hUVNY5Ss',
    Icon: FaWhatsappSquare
},
  {
    name: 'instagram',
    url: 'https://www.instagram.com/smocklane/?hl=en-gb',
    Icon: FaInstagramSquare
}
]

let formattedSocials = socials.map(({name, url, Icon}) => {
    return(<span className='icons'>
        <a href={url} target='_blank' rel={'noreferrer'}>{<Icon />}</a>
    </span>)
})

const Footer = () => {
    return(
        <footer className='footer'>
            {/* header */}
            <div className='footer-container'>

                <div className='footer-header col'>
                    <h2>SmockLane</h2>
                    <small>The best, most affordable northen clothes for everyone.</small>
                </div>

                {/* nav */}
                <nav className='col footer-nav'>
                    {/* mens sections */}
                    <div className='site-map'>
                        <h3>Pages</h3>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">EVERYTHING</a></li>
                            <li><a href="/">ABOUT</a></li>
                            <li><a href="/">CONTACT</a></li>
                            <li><a href="/">MAKEUP</a></li>
                        </ul>
                    </div>
                </nav>
                {/*  */}
                <div className='col subscribe'>
                        <h3>Subscribe</h3>
                        <small>Get a monthly newsletter on the best fashion trends</small>
                        <div className="form-control">
                            <input type="text" name="email" placeholder="Your email address...."/>
                        </div>
                        <Button text='Subscribe' onClick={''}/>
                </div>
            </div>
            <div className='footer-footer'>
                <div className='copyright'>
                    <small>Copyright © {date()} SmockLane.</small>
                    <p>Build by<a className='creator' href='https://aminmakes.vercel.app/'>Amin</a></p>
                </div> 

                <div className='social-media'>
                    {formattedSocials}
                </div>
            </div>

        </footer>
    )
}

export default Footer;