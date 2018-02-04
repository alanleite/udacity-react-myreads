import React from 'react'
import styled from 'styled-components'
import { Label, Image } from 'semantic-ui-react'
import noImage from './no-image.png'

const CImage = styled(Image) `
    opacity: ${props => props.cshelf ? '0.4' : '1'};
    cursor: pointer;
`

export default (props) => {

    const { book, current } = props

    const hasImage = book.imageLinks && book.imageLinks.thumbnail

    const basedProps = {}
    basedProps.src = hasImage ? book.imageLinks.thumbnail : noImage
    basedProps.cshelf = current ? 1 : 0

    if (!hasImage) {
        const title = book.title.length <= 14 ?
            book.title.substring(0, book.title.length) :
            book.title.substring(0, 12) + '...'
        basedProps.label = {
            color: 'blue',
            content: title,
            ribbon: true
        }
    }

    return <CImage
        {...props}
        {...basedProps} />

}


