import React from 'react'
import Component from './component'
import { getAll, update } from './../../common/api/books'

export default class extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        loading: false
    }

    componentDidMount() {
        this.load()
    }

    load = async () => {
        this.setState({
            loading: true, error: null
        })
        try {
            let result = await getAll()
            this.setState({
                currentlyReading: result.filter(e => e.shelf === 'currentlyReading'),
                wantToRead: result.filter(e => e.shelf === 'wantToRead'),
                read: result.filter(e => e.shelf === 'read'),
                loading: false
            })
        } catch (err) {
            this.setState({
                loading: false, error: err
            })
        }
    }

    moveBook = async (to, book) => {
        const response = await update(book, to)
        this.load()
    }

    render() {
        return <Component
            {...this.state}
            moveBook={this.moveBook} />
    }

}