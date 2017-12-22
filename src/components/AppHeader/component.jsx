import React from 'react'
import { Container, Menu, MenuHeader, MenuLink } from 'semantic-ui-react'

export default () => (
    <Menu size="massive">
        <Container>
            <Menu.Item header>AppName</Menu.Item>
            <Menu.Item to="/">Principal</Menu.Item>
            <Menu.Item to="/login">Login</Menu.Item>
        </Container>
    </Menu>
)
