import React from 'react'

import FeatureContainer from './featureContainer'

import MockupImg from './mockupImg'
import Img from '../../static/U19_iphonexspacegrey_portrait.png'

export default function BuyAndSell() {
    return (
        <FeatureContainer>
            <div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
            </div>
            <h1>Buy and Sell</h1>
            <MockupImg alttext="app login screen" source={Img} />
            <p>
                Whether you're buying or selling. Eureka is easy to use,
                fast and elegent. Perfect for all business needs.
            </p>
        </FeatureContainer>
    )
}