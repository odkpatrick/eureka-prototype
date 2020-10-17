import React from 'react'

import IosAppBtn from '../components/iosAppBtn'
import AndroidAppBtn from '../components/androidAppBtn'
import FeatureContainer from './featureContainer'

import Styles from './intro.module.css'

import MockupImg from './mockupImg'
import Img from '../../static/U1_iphonexspacegrey_portrait.png'

export default function Intro() {
    return (
        <FeatureContainer>
            <div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
            </div>
            <h1>Eureka is here</h1>
            <MockupImg alttext="app homescreen" source={Img}/>
            <p>
                Buying and selling has never been easier, connect with
                 your audience and grow your brand.
            </p>
            <div className={Styles.buttons}>
                <IosAppBtn />
                <AndroidAppBtn />
            </div>
        </FeatureContainer>
    )
}