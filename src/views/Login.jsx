import React, { Component } from 'react';
import styled from 'styled-components'

const LoginContent = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    height: 100%;
    background-image: linear-gradient(60deg, #8cc17b 0%, #5b874d 100%);
`;

const LoginBlock = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    padding-top: 10em;
    color: #FEFEFE;
`;

class App extends Component {

    state = {

    }

    render() {

        return (
            <LoginContent>
                <LoginBlock>
                    <h1>My Reads</h1>
                </LoginBlock>
            </LoginContent>
        );
    }

}

export default App;
