import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

const styles = {
    b: {
        maxWidth: 128
    }
}

class Component extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        let { books } = this.props

        return (
            <Card.Group textAlign="center">

                {books.map((book, i) => (

                    <Card key={i} style={styles.b}>
                        <Image src={book.imageLinks.thumbnail} />
                    </Card>

                ))}

            </Card.Group>
        )
    }

}

export default Component
