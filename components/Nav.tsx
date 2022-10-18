import React from 'react'
import { Bars2Icon } from '@heroicons/react/24/solid'

const Nav = () => {
    return (
        <div className='nav'>
            <input type='checkbox' className='nav__menu' id='menu' />
            <label htmlFor='menu' className='nav__label'>
                <span></span>
                <span></span>
            </label>

            <div className='nav__responsive'>
                <ul className='nav__lists'>
                    <li className='nav__list'><a className='nav__link'>HOME</a></li>
                    <li className='nav__list'><a className='nav__link'>ABOUT</a></li>
                    <li className='nav__list'><a className='nav__link'>CLIENT</a></li>
                    <li className='nav__list'><a className='nav__link'>SOULTION</a></li>
                    <li className='nav__list'><a className='nav__link'>CONTACT</a></li>
                </ul>

            </div>

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