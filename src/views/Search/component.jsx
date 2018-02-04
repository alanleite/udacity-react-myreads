import React from 'react';
import { Container, Loader, Form } from 'semantic-ui-react'
import Books from './../../components/Books'


export default ({
    books, moveBook, loading, onChange, onSearch, firstSearch, currents
}) => {
    return (
        <div>
            <Container>
                <Form onSubmit={onSearch}>
                    <Form.Field
                        control={Form.Input}
                        type="text"
                        size="huge"
                        placeholder="Search you book here..."
                        onChange={onChange} />
                </Form>
            </Container>
            {loading ?
                <Loader active={true} />
                : (
                    <div>
                        {books && books.length > 0 ? (
                            <Books
                                title="Results"
                                books={books}
                                currents={currents}
                                moveBook={moveBook} />)
                            : (
                                <Container>
                                    {!firstSearch && <p>No results found.</p>}
                                </Container>
                            )
                        }
                    </div>
                )}
        </div>
    );
}