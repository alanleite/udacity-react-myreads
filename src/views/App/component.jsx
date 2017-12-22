import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Header, Icon } from 'semantic-ui-react'
import { getAll } from './../../common/api/books'
import AppHeader from './../../components/AppHeader'
import Books from './../../components/Books'

import LoginView from './../Login'
import MainView from './../Main'

export default ({ books }) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => {
          // verificar logon..
          return <AppHeader />
        }} />
        <Container fluid>
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/" component={MainView} />
        </Container>
      </div>
    </BrowserRouter>
  );
}