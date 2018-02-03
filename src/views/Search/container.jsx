import React from 'react'
import Component from './component'
import { search, update } from './../../common/api/books'

export default class extends React.Component {

    state = {
        books: [],
        loading: false,
        searchInput: '',
        firstSearch: true
    }

    moveBook = async (to, book) => {
        await update(book, to)
        this.props.history.push('/')
    }

    onSearch = async () => {
        this.setState({ loading: true, firstSearch: false })
        try {
            let books = await search(this.state.searchInput)
            this.setState({ books, loading: false })
        } catch (err) {
            this.setState({ loading: false })
        }
    }

    onChange = (e, { value }) => {
        this.setState({ searchInput: value })
    }

    render() {
        return <Component
            {...this.state}
            moveBook={this.moveBook}
            onSearch={this.onSearch}
            onChange={this.onChange}
        />
    }

}