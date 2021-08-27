import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'
import BlogContext from 'Components/Contexts/BlogContext'

export default class CategoryList extends Component {

  componentDidMount() {
    if (! this.context.categoriesLoaded) {
      this.context.getCategories(this.props.limit)
    }
  }

  static contextType = BlogContext

  render() {
    const categories = this.context.categories ?? [];
    return (
      categories.map((category, key) => (
        React.cloneElement(this.props.children, { category, key })
      ))
    )
  }
}
