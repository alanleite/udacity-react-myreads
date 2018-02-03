import React from 'react'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const JumboDiv = styled.div`
    display: block;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`

export default ({ title }) => (
    <JumboDiv>
        <Container>
            <h2>{title}</h2>
        </Container>
    </JumboDiv>
)