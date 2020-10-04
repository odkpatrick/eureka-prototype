import React from 'react'

import { Button } from 'antd'

export default function AppBtn({ icon, title }) {
    return (
        <Button 
            icon={icon}
        >
            {title}
        </Button>
    )
}