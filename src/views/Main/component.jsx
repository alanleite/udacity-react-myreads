import React from 'react';
import { Header } from 'semantic-ui-react'
import Books from './../../components/Books'

export default ({ currentlyReading, wantToRead, read }) => {
    return (
        <div>

            <Header content="Currently Reading"/>
            <Books books={currentlyReading}/>
            <Header content="Want to React"/>
            <Books books={wantToRead}/>
            <Header content="Read"/>
            <Books books={read}/>

        </div>
    );
}