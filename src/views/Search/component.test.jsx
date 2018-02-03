import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

it('Rendering Search view...', () => {
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

        onSearch: () => { },
        onChange: () => { },
        moveBook: () => { },

        loading: false,
        firstSearch: true

    }
    ReactDOM.render(<Component {...props} />, div);
});
