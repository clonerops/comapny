import React from 'react'
// import Image from 'next/image'
// import twitterIcon from '../assets/images/twitter.png'
// import instagramIcon from '../assets/images/instagram.png'

const Social = () => {
    return (
        <div className='social'>
            <span className='social__copyright'>© 2023 by Marketing Solutions. Proudly created with <span className='social__copyright-created'>CLONER</span></span>
            <div className='social__icons'>
                {/* <Image src={twitterIcon} width={20} height={20} className="social__icon" />
                <Image src={instagramIcon} width={20} height={20} className="social__icon" /> */}
            </div>

        </div>
    )
}

export default Social