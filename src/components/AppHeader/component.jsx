import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu, MenuHeader, MenuLink } from 'semantic-ui-react'

export default () => (
    <Menu size="massive">
        <Container>
            <Menu.Item header>My Reads</Menu.Item>
            <Menu.Item
                as={NavLink}
                exact
                to="/">
                <span>Principal</span>
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                exact
                to="/search">
                <span>Search</span>
            </Menu.Item>
        </Container>
    </Menu>
)
