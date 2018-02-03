import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

it('Rendering a custom title...', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component title='Title...' />, div);
});
