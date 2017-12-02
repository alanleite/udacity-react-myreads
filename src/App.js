import React, { Component } from 'react';
import { getAll } from './common/BooksApi'
import Books from './components/Books'
import logo from './logo.svg';
import './App.css';


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
      <div className="App">
        <Books books={books}/>
      </div>
    );
  }
}

export default App;
