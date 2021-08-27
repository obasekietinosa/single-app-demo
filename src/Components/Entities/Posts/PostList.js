import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading';
import BlogContext from 'Components/Contexts/BlogContext';

export default class PostList extends Component {

  componentDidMount() {
    if (!this.context.postsLoaded) {
      this.context.getPosts(this.props.limit)
    }
  }

  static contextType = BlogContext

  render() {
    let posts = this.props.posts ?? this.context.posts ?? [];
    return (
      posts.map((post, key) => (
        React.cloneElement(this.props.children, { post, key })
      ))
    )
  }
}
