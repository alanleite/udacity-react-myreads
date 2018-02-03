import React from 'react'
import Component from './component'

export default class extends React.Component {

    state = {
        isOpen: false
    }

    open = () => {
        this.setState({ isOpen: true })
    }

    close = () => {
        this.setState({ isOpen: false })
    }

    render() {
        return <Component
            {...this.props}
            {...this.state}
            open={this.open}
            close={this.close}
        />
    }

}