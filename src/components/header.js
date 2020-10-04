import React from 'react'

import Style from './header.module.css'

export default function Header() {
    return (
        <div>
            <nav className={Style.navigation}>
                <li className={Style.logoContainer}>
                    <a href="/" aria-label="homepage">Home</a>
                </li>
                <li>
                    <a href="/" aria-label="about eureka">About</a>
                </li>
                <li>
                    <a href="/" aria-label="contact us">Contact Us</a>
                </li>
            </nav>
        </div>
    )
}