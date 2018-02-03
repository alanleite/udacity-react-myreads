import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import AppHeader from './../AppHeader'
import MainView from './../../views/Main'
import SearchView from './../../views/Search'

export default ({ books }) => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={AppHeader} />
        <Container fluid>
          <Route exact path="/" component={MainView} />
          <Route exact path="/search" component={SearchView} />
        </Container>
      </div>
    </BrowserRouter>
  )
}