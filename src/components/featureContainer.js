import React from 'react'

import Styles from './featureContainer.module.css'

export default function FeatureContainer({children}) {
    return (
        <section>
            <div className={Styles.container}>
                {
                    children
                }
            </div>
        </section>
    )
}