import React from 'react';
import { Header } from 'semantic-ui-react'
import Books from './../../components/Books'

export default ({ currentlyReading, wantToRead, read }) => {
    return (
        <div>

            <Books title="Currently Reading" books={currentlyReading} />
            <Books title="Want to React" books={wantToRead} />
            <Books title="Read" books={read} />

        </div>
    );
}