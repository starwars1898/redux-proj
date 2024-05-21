import React from 'react'

function Icon(props) {

    const {
        icon = null,
        className,
        onClick
    } = props

    return (
        <div 
            className={className}
            onClick={onClick}
        >
            {icon !== null && icon}
        </div>
    )
}

export default Icon