import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostDate from './PostDate'
import './PostPreviewCard.css'

export default class PostPreviewCard extends Component {
  render() {
    return (
      <div className="PostPreviewCard card">
        <img src={this.props.post.image} className="card-img-top" alt={this.props.post.title} />
        <div className="card-body">
          <span>
            <small>{this.props.post.category}</small>
          </span>
          <Link to={this.props.post.link}>
            <h5 className="card-title" dangerouslySetInnerHTML={{ __html: this.props.post.title }}></h5>
          </Link>
          <p className="card-subtitle">
            <small>{this.props.post.author.name} - <PostDate date={this.props.post.datePublished} /></small>
          </p>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}>
          </div>
          <Link to={this.props.post.link}>
            Read More
          </Link>
        </div>
      </div>
    )
  }
}
