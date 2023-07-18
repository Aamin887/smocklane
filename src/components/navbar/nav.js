import '../../assets/styles/nav.css'
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu} from "react-icons/gi";
import { FaTimes} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = ({logo}) => {
    return (
        <nav >
            <div className='nav-container'>
                <h1 className='logo'><a href='/'>{logo}</a></h1>

                <div className='nav-items close'>
                    <div className='nav-links '>
                        <span className='times'>
                            <FaTimes />
                        </span>
                        <ul className='service-links links'>
                            <li className='link'>
                                <NavLink>Everything</NavLink>
                            </li>

                            <li className='link'>
                                <NavLink>Makeup</NavLink>
                            </li>
                        </ul>

                        <ul className='business-links links'>
                            <li className='link'>
                                <NavLink>About</NavLink>
                            </li>

                            <li className='link'>
                                <NavLink>Contact us</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='hamburger'>
                        <GiHamburgerMenu className='hamburger-icon'/>
                    </div>

                    <div className='checkout'>
                        <h5 className='checkout-price'>GH¢0.00</h5>

                        <p className='checkout-icon'>
                            <p className='items'>0</p>
                            <BsCart3 className='icons'/>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;