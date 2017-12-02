import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'

class Component extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        shouldSwiperUpdate: true,
        slideToClickedSlide: true,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
    }

    onSlideChange = () => {
        console.log('change')
    }

    onClick = () => {
        console.log('click')
    }

    render() {
        let { books } = this.props
        return (
            <Swiper {...this.state}
                on={{
                    slideChange: this.onSlideChange,
                    click: this.onClick
                }}>

                {books.map((book, i) => (

                    <div key={i} style={{
                        height: 170,
                        width: 128,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>

                ))}

            </Swiper>
        )
    }

}

export default Component
