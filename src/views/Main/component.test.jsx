import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

it('Rendering Main view...', () => {
    const div = document.createElement('div');
    const props = {

        currentlyReading: [{
            imageLinks: {
                thumbnail: ''
            },
            title: 'Test',
            language: 'en',
            publisher: '',
            categories: [''],
            authors: ['']
        }],

        wantToRead: [{
            imageLinks: {
                thumbnail: ''
            },
            title: 'Test',
            language: 'en',
            publisher: '',
            categories: [''],
            authors: ['']
        }],

        read: [{
            imageLinks: {
                thumbnail: ''
            },
            title: 'Test',
            language: 'en',
            publisher: '',
            categories: [''],
            authors: ['']
        }],

        moveBook: () => {},

        loading: false

    }
    ReactDOM.render(<Component {...props} />, div);
});
