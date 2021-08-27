import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './PostPreview.css'
import PostDate from './PostDate'

export default class PostPreview extends Component {
  render() {
    return (
      <div className="PostPreview">
        <Link to={this.props.post.link} className="title">
            <h3 className="mb-0" dangerouslySetInnerHTML={{ __html: this.props.post.title }}>
            </h3>
        </Link>
        <p className="mt-0">
          <small>
            <PostDate date={this.props.post.datePublished} />
          </small>
        </p>
        <span>
          {this.props.post.category}
        </span>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}>
        </div>
        <div>
          <Link to={this.props.post.link} className="btn btn-primary">
            Read Now
          </Link>
        </div>
      </div>
    )
  }
}
