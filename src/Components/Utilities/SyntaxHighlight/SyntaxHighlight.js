import React, { Component } from 'react'
import Prism from "prismjs"
import './prism.css'

export default class SyntaxHighlight extends Component {
    constructor(props) {
        super(props)
        this.nodeRef = React.createRef()
    }

    componentDidMount() {
      Prism.highlightAll()
    }

    componentDidUpdate() {
      Prism.highlightAll()
    }

    render() {
        const { content } = this.props
        return (
            <div ref={this.nodeRef} dangerouslySetInnerHTML={{ __html: content }} />
        );
    }
}
