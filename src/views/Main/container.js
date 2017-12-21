import React from 'react'
import Component from './component'
import { getAll } from './../../common/api/books'

export default class extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
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
            let books = {
                currentlyReading: [],
                wantToRead: [],
                read: []
            }
            result.forEach(b => {
                books[b.shelf].push(b)
            })
            this.setState({
                ...books, loading: false
            })
        } catch (err) {
            this.setState({
                loading: false, error: err
            })
        }
    }

    render() {
        return <Component {...this.state} />
    }

}