import React from 'react'
import { Container, Menu, MenuHeader, MenuLink } from './Base'


export default () => (
    <Menu>
        <Container>
            <MenuHeader>AppName</MenuHeader>
            <MenuLink to="/">Principal</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
        </Container>
    </Menu>
)
