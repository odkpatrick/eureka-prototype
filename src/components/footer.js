import React from 'react'

import { 
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter
 } from 'react-icons/io'

import Style from './footer.module.css'

export default function Footer() {
    return (
        <div>
            <div>
                <div className={Style.placeholder}>
                    <h4>More links and details</h4>
                    <p>
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur.
                    </p>
                </div>
                <div>
                    {/* download links */}
                </div>
                <div>
                    {/* logo */}
                </div>
                <div>
                    {/* legal, help, links */}
                </div>
            </div>
            <div className={Style.bottom}>
                <div className={Style.attribution}>
                    <span>made with <span role="img" aria-label="heart emoji">❤️</span></span>
                </div>
                <div className={Style.socials}>
                    <IoLogoFacebook />
                    <IoLogoInstagram />
                    <IoLogoTwitter />
                </div>
                <div className={Style.copyright}>
                    <span>&#169; 2020 EUREKA, All rights reserved</span>
                </div>
            </div>
        </div>
    )
}