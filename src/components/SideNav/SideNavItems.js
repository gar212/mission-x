import React from 'react'

const SideNavItems = (props) => {
    const centerSideNavIcons = () => {
        return props.sideNavState ? {} : { justifyContent: "center" } 
    }

    const enlargeSideNavIcons = () => {
        return props.sideNavState ? {} : { height: "35px" } 
    }

    return (
        <div>
            <li style={centerSideNavIcons()}><img style={enlargeSideNavIcons()} src={props.image} alt={props.name + " Icons"}/>{props.sideNavState ? props.name : ''}</li>
        </div>
    )
}

export default SideNavItems
