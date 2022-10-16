import React from 'react'

const Nav = () => {
    return (
        <div className='nav'>
            <ul className='nav__lists'>
                <li className='nav__list'><a className='nav__link'>HOME</a></li>
                <li className='nav__list'><a className='nav__link'>ABOUT</a></li>
                <li className='nav__list'><a className='nav__link'>CLIENT</a></li>
                <li className='nav__list'><a className='nav__link'>SOULTION</a></li>
                <li className='nav__list'><a className='nav__link'>CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Nav