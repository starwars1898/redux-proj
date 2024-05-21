import React from 'react'
import RightSection from './right-section'
import LeftSection from './left-section'

function TopBar() {
    
    const classes = {
        TopMainBody: `w-full h-[4rem] lg:h-[5rem] flex content-color1-top white1`
    }

    return (
        <div className={classes.TopMainBody}>
            <LeftSection />
            <RightSection />
        </div>
    )
}

export default TopBar