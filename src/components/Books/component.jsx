import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image } from 'semantic-ui-react'
import JumboTitle from './../JumboTitle'
import Book from './../Book'

export default class extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    }

    render() {

        let { title, books, moveBook } = this.props

        return (
            <div>
                <JumboTitle title={title} />
                <Container>
                    <Image.Group>
                        {books.map((book, i) => (
                            <Book
                                key={i}
                                book={book}
                                moveBook={moveBook} />
                        ))}
                    </Image.Group>
                </Container>
            </div>
        )
    }

}
