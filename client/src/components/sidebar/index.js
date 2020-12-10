import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper,SidebarMenu, SidebarLink, SidebarBtn, SidebarBtnLink } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon/>
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='/about' onClick={toggle}>About us</SidebarLink>
        <SidebarLink to='/contact' onClick={toggle}>Contact</SidebarLink>
        <SidebarLink to='/gallery' onClick={toggle}>Gallery</SidebarLink>
        <SidebarLink to='/services' onClick={toggle}>Our Services</SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
        <SidebarBtnLink to="/signin" onClick={toggle}>Sign in</SidebarBtnLink>
        </SidebarBtn>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
