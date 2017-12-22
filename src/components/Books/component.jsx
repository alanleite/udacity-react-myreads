import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Dropdown, Transition, Header } from 'semantic-ui-react'

import './styles.css'

class Component extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {

        let { title, books, moveBook } = this.props

        return (

            <div>

                <Container fluid className="ud-books-header">
                    <Container>
                        <h2>{title}</h2>
                    </Container>
                </Container>

                <Container>
                    <div className="ud-books-content">
                        <Image.Group>
                            {books.map((book, i) => (
                                <Dropdown
                                    key={i}
                                    trigger={(
                                        <Transition animation="horizontal flip" duration={800 + i * 400} transitionOnMount={true}>
                                            <Image src={book.imageLinks.thumbnail} />
                                        </Transition>
                                    )}
                                    options={[
                                        {
                                            key: 0,
                                            text: 'Move to reads',
                                            onClick: () => { moveBook('reads', book) }
                                        },
                                        {
                                            key: 1,
                                            text: 'Move to want to read',
                                            onClick: () => { moveBook('reads', book) }
                                        },
                                        {
                                            key: 2,
                                            text: 'Move to reading',
                                            onClick: () => { moveBook('reads', book) }
                                        },
                                    ]}
                                    pointing='top left'
                                    icon={null}
                                />
                            ))}
                        </Image.Group>
                    </div>

                </Container>
            </div>

        )
    }

}

export default Component
