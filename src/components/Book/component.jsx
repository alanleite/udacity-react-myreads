import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, Modal, Grid, Label, Button } from 'semantic-ui-react'
import BookImage from './../BookImage'

export default ({
    book, moveBook, current,
    isOpen, open, close
}) => {

    const baseBook = current || book

    return (
        <Modal
            open={isOpen}
            onOpen={open}
            onClose={close}
            trigger={(
                <BookImage 
                    book={baseBook} 
                    size="small"
                    current={current} />
            )}
        >
            <Modal.Header>{baseBook.title}</Modal.Header>
            <Modal.Content>
                <Grid>
                    <Grid.Column width={6}>
                        <BookImage book={baseBook} centered size="small" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p>{baseBook.description}</p>
                        <Label.Group>
                            {baseBook.language &&
                                <Label basic content="Language" detail={baseBook.language} />
                            }
                            {baseBook.categories &&
                                baseBook.categories.map((c, i) =>
                                    <Label key={i} basic content="Category" detail={c} />)
                            }
                            {baseBook.publisher &&
                                <Label basic content="Publisher" detail={baseBook.publisher} />
                            }
                            {baseBook.authors &&
                                baseBook.authors.map((c, i) =>
                                    <Label key={i} basic content="Author" detail={c} />)
                            }
                        </Label.Group>
                    </Grid.Column>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button.Group>
                    {baseBook.shelf !== "read" &&
                        <Button
                            primary
                            content="Move to reads"
                            onClick={() => {
                                moveBook('read', baseBook)
                                close()
                            }} />
                    }
                    {baseBook.shelf !== "wantToRead" &&
                        <Button
                            primary
                            content="Move to want to read"
                            onClick={() => {
                                moveBook('wantToRead', baseBook)
                                close()
                            }} />
                    }
                    {baseBook.shelf !== "currentlyReading" &&
                        <Button
                            primary
                            content="Move to reading"
                            onClick={() => {
                                moveBook('currentlyReading', baseBook)
                                close()
                            }} />
                    }
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}
