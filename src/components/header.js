import React, { useState, useRouter, useEffect } from 'react'

import Style from './header.module.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import Logo from '../../public/favicon.ico'

export default function Header() {
    const [toggleOpen, setToggleOpen] = useState(false)
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggle = () => {
        setToggleOpen(!toggleOpen)
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className={toggleOpen ? Style.dropDownOpen : ''}>
                <a href="/" aria-label="homepage" className={Style.logo}>
                    <img alt="logo" src={Logo} />
                </a>
                <button 
                    className={Style.toggleBtn} 
                    area-hidden="true"
                    onClick={handleToggle}
                >
                    {
                        (!toggleIcon) ?
                        <AiOutlineMenu /> :
                        <AiOutlineClose />
                    }
                </button>
                <div className={Style.dropDown}>
                    <a href="/" aria-label="home page">Home</a>
                    <a href="/" aria-label="about eureka">About</a>
                    <a href="/" aria-label="contact us">Contact Us</a>
                </div>
            </nav>
        </div>
    )
}