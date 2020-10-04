import React from 'react'

import { AndroidOutlined } from '@ant-design/icons'

import AppBtn from './appBtn'

export default function AndroidAppBtn() {
    const icon = <AndroidOutlined />

    return (
        <AppBtn icon={icon} title="Google Play"/>
    )
}