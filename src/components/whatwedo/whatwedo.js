import OfferCard from '../../shared/serviceOffer'
import '../../assets/styles/services.css'
import bg from '../../assets/images/product_2.png'
import Quality from '../../shared/qualities'

import {TbTruckDelivery} from 'react-icons/tb'
import {PiDressFill} from 'react-icons/pi'
import {MdLocalOffer} from 'react-icons/md'

const businessInfo = [
    {
        Icon: TbTruckDelivery,
        info: 'Nationwide Shipping',
        desc: 'Pay part of the fee and we\'ll handle the rest.'
    },
    {
        Icon: PiDressFill,
        info: 'Best quality',
        desc: 'We selected the best makers of smock in the north.'
    },
    {
        Icon: MdLocalOffer,
        info: 'Best offers',
        desc: 'The most affordable prices in the market today.'
    },
]

const afferService = businessInfo.map(({info, desc, Icon}) => <Quality heading={info} body={desc} Icon={Icon}/>)



const WhatWeDo = () => {
    return (
        <div className="services-page">
            <div className='header'>
                <h2>What we do best</h2>
                <p>Unlock your best looks with our comprehensive range of tailored services</p>
            </div>

            <div className='content'>
                <OfferCard headingText={'Makeup'} bodyText ={'Best in the area'} bgImage ={bg}/>
                <OfferCard headingText={'Makeup'} bodyText ={'Best in the area'} bgImage ={bg}/>
                <OfferCard headingText={'Makeup'} bodyText ={'Best in the area'} bgImage ={bg}/>
            </div>

            <div className='how-it-work'>
                {/* <h3 className='intro-text'>How we work</h3> */}
                {/* <Quality Icon ={TbTruckDelivery} heading={'Nationwwide Shipping'} body={'Just tell your address, pay part of the shipping fee'}/> */}
                <div className='how-it-work-content'>
                    {afferService}
                </div>

            </div>
        </div>
    )
}

export default WhatWeDo;