import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Header, Icon } from 'semantic-ui-react'
import { getAll } from './../common/BooksApi'
import './App.css';

import AppHeader from './../components/AppHeader'
import Books from './../components/Books'
import LoginView from './Login'

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    getAll().then(response => {
      console.log(response)
      this.setState({ books: response })
    })
  }

  render() {
    let books = this.state.books
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => {
            return <AppHeader />
          }} />
          <Container>
            <Route exact path="/login" component={LoginView} />
            {/*
            <Header as='h2'>
              <Icon name='plug' />
              <Header.Content>Uptime Guarantee</Header.Content>
            </Header>
            <Books books={books} />
            */}
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
