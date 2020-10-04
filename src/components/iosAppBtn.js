import React from 'react'

import { AppleOutlined } from '@ant-design/icons'

import AppBtn from './appBtn'

export default function IosAppBtn() {
    const icon = <AppleOutlined />

    return (
        <AppBtn icon={icon} title="App Store"/>
    )
}