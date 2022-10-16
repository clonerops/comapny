import Image from 'next/image'
import React from 'react'
import LogoImage from '../assets/images/logo.webp'

const Logo = () => {
    return (
        <div className='logo'>
            <Image src={LogoImage} />
            <h2 className='logo__title'>VIGOROUS</h2>
        </div>
    )
}

export default Logo