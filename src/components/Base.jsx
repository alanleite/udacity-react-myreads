import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

/*
#8cc17b	(140,193,123)
#5b874d	(91,135,77)
#2d6365	(45,99,101)
#68b8ba	(104,184,186)
#b7d0d4	(183,208,212)
linear-gradient(120deg, #f5b041 0%, #f7dc6f 100%);
*/

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const Menu = styled.div`
    width: 100%;
    display: block;
    background-color: #b7d0d4;
    box-shadow: 0 4px 8px 0 rgba(174, 174, 174, 0.2);
`;

export const MenuHeader = styled.span`
    display: inline-block;
    padding: 20px;
    margin: 0px;
    font-weight: bold;
    color: #2d6365;
`;

export const MenuLink = styled(NavLink)`
    display: inline-block;
    padding: 20px;
    margin: 0px;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    text-decoration: none;
    color: #2d6365;
`;
