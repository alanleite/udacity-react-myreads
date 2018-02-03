import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, Modal, Grid, Label, Button } from 'semantic-ui-react'

const ImageBlock = styled(Image) `
    cursor: pointer
`

export default ({
    book, moveBook,
    isOpen, open, close
}) => (
        <Modal
            open={isOpen}
            onOpen={open}
            onClose={close}
            trigger={(
                <ImageBlock src={book.imageLinks.thumbnail} />
            )}
        >
            <Modal.Header>{book.title}</Modal.Header>
            <Modal.Content>
                <Grid>
                    <Grid.Column width={6}>
                        <Image centered src={book.imageLinks.thumbnail} size="small" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p>{book.description}</p>
                        <Label.Group>
                            {book.language &&
                                <Label basic content="Language" detail={book.language} />
                            }
                            {book.categories &&
                                book.categories.map((c, i) =>
                                    <Label key={i} basic content="Category" detail={c} />)
                            }
                            {book.publisher &&
                                <Label basic content="Publisher" detail={book.publisher} />
                            }
                            {book.authors &&
                                book.authors.map((c, i) =>
                                    <Label key={i} basic content="Author" detail={c} />)
                            }
                        </Label.Group>
                    </Grid.Column>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button.Group>
                    {book.shelf !== "read" &&
                        <Button
                            primary
                            content="Move to reads"
                            onClick={() => {
                                moveBook('read', book)
                                close()
                            }} />
                    }
                    {book.shelf !== "wantToRead" &&
                        <Button
                            primary
                            content="Move to want to read"
                            onClick={() => {
                                moveBook('wantToRead', book)
                                close()
                            }} />
                    }
                    {book.shelf !== "currentlyReading" &&
                        <Button
                            primary
                            content="Move to reading"
                            onClick={() => {
                                moveBook('currentlyReading', book)
                                close()
                            }} />
                    }
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
