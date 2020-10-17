import React from 'react'

import FeatureContainer from './featureContainer'

import MockupImg from './mockupImg'
import Img from '../../static/U5_iphonexspacegrey_portrait.png'

export default function Events() {
    return (
        <FeatureContainer>
            <div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
            </div>
            <h1>Eureka Events</h1>
            <MockupImg alttext="app events screen" source={Img}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. 
            </p>
        </FeatureContainer>
    )
}