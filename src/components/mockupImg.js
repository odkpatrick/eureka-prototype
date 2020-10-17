import React from 'react'

import Style from './mockupImg.module.css'

export default function MockupImg({ source, alttext }){
    return (
        <div className={Style.container}>
            <img src={source} alt={alttext}/>
        </div>
    )
}