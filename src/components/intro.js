import React from 'react'

import IosAppBtn from '../components/iosAppBtn'
import AndroidAppBtn from '../components/androidAppBtn'
import FeatureContainer from './featureContainer'

import Styles from './intro.module.css'

export default function Intro() {
    return (
        <FeatureContainer>
            <div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
                <div><span role="img" aria-label="placeholder">🚀</span></div>
            </div>
            <h1>Eureka is here</h1>
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