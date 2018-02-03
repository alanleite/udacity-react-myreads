import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

it('Rendering a book with samples values...', () => {
  const div = document.createElement('div');
  const props = {
      book: {
        imageLinks: {
            thumbnail: ''
        },
        title: 'Test', 
        language: 'en',
        publisher: '',
        categories: [''],
        authors: ['']
      },
      moveBook: null,
      isOpen: true,
      onOpen: null,
      onClose: null
  }
  ReactDOM.render(<Component {...props} />, div);
});
