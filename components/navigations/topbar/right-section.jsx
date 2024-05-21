import React from 'react'
import Icon from '@/components/icons'
import { FiMenu } from "react-icons/fi"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showMobileMenu, hideMobileMenu } from '../../../pages/home/reducer'

export const RightSection = (props) => {

    const { showMobileMenu, hideMobileMenu } = props

    // const handleShowMobileMenu = () => {
    //     showMobileMenu()
    // }

    const classes = {
        RightSectionMainBody: `h-full w-[50%] flex items-center justify-end`,
        TopBarLinksMainBody: `flex mx-2`,
        list: `mx-2 hidden lg:flex text-lg hover:cursor-pointer`,
        icon: `flex lg:hidden text-3xl hover:cursor-pointer my-auto`
    }

    return (
        <div className={classes.RightSectionMainBody}>
            <ul className={classes.TopBarLinksMainBody}>
                <Icon 
                    icon={<FiMenu />} 
                    className={classes.icon}
                    // onClick={handleShowMobileMenu}
                />
                <li className={classes.list}>Home</li>
                <li className={classes.list}>About</li>
                <li className={classes.list}>Project</li>
            </ul>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     showMobileMenu: state.showMobileMenu,
//     hideMobileMenu: state.hideMobileMenu
// })

// const mapDispatchToProps = {
//     showMobileMenu,
//     hideMobileMenu
// }
  
// export default connect(mapStateToProps, mapDispatchToProps)(RightSection)

// RightSection.propTypes = {
//     showMobileMenu: PropTypes.bool,
//     hideMobileMenu: PropTypes.bool
// }

const mapStateToProps = (state) => ({
    // MobileMenu: state.MobileMenuModel.isVisible
})

const mapDispatchToProps = {
    showMobileMenu,
    hideMobileMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSection)
