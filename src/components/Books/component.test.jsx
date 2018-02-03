import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

it('Render a list of books with sample values...', () => {
    const div = document.createElement('div');
    const props = {
        books: [{
            imageLinks: {
                thumbnail: ''
            },
            title: 'Test',
            language: 'en',
            publisher: '',
            categories: [''],
            authors: ['']
        }],
        title: 'Test',
        moveBook: () => {},
    }
    ReactDOM.render(<Component {...props} />, div);
});
