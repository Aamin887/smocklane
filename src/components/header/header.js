import '../../assets/styles/header.css'
import Button from '../../shared/button';
const Header = () => {
    return(
        <header className='header'>
            <div className='header-container'> 
                <h1>Discover the Perfect Blend of Style and Comfort </h1>
                <small>- Shop Our Premium Collection of Fashionable Clothing Today!</small>

                <div className='cta-btns'>
                    <Button text={'Buy now'} onClick={''}/>
                    <Button text={'Contact Us'} onClick={''}/>
                </div>
            </div>
        </header>
    )
}

export default Header;