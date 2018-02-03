import React from 'react';
import { Loader } from 'semantic-ui-react'
import Books from './../../components/Books'

export default ({
    currentlyReading, wantToRead, read, moveBook, loading
}) => {
    return (
        <div>
            {loading ?
                <Loader active={true} />
                : (
                    <div>
                        <Books
                            title="Currently Reading"
                            books={currentlyReading}
                            moveBook={moveBook} />
                        <Books
                            title="Want to React"
                            books={wantToRead}
                            moveBook={moveBook} />
                        <Books
                            title="Read"
                            books={read}
                            moveBook={moveBook} />
                    </div>
                )}
        </div>
    );
}