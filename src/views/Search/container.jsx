import React from 'react'
import Component from './component'
import { debounce } from 'throttle-debounce';
import { getAll, search, update } from './../../common/api/books'

export default class extends React.Component {

    state = {
        books: [],
        currents: {},
        searchInput: '',
        firstSearch: true,
        loading: false,
        error: null
    }

    constructor(props) {
        super(props)
        this.callSearch = debounce(500, this.onSearch)
    }

    componentDidMount() {
        this.loadCurrents()
    }

    loadCurrents = async () => {
        try {
            this.setState({ loading: true })
            const currents = await getAll()
            this.setState({
                currents: currents.reduce((c, n, i) => {
                    c[n.id] = n
                    return c
                }, {}),
                loading: false
            })
        } catch (error) {
            this.setState({ error, loading: false })
        }
    }

    moveBook = async (to, book) => {
        await update(book, to)
        this.props.history.push('/')
    }

    onSearch = async () => {
        if (this.state.searchInput.length > 0) {
            this.setState({
                loading: true,
                firstSearch: false
            })
            try {
                let books = await search(this.state.searchInput)
                this.setState({ books, loading: false })
            } catch (err) {
                this.setState({ loading: false })
            }
        }
    }

    onChange = (e, { value }) => {
        this.setState({ searchInput: value }, () => {
            this.callSearch()
        })
    }

    render() {
        return <Component
            {...this.state}
            moveBook={this.moveBook}
            onSearch={this.callSearch}
            onChange={this.onChange}
        />
    }

}