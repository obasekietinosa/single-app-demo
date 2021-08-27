import blogDriver from "Repositories/BlogRepository"

class BlogService {
  getCategories = async (limit = 100, offset = 0) => {
    return blogDriver.getCategories(limit, offset)
  }

  getPosts = (limit = 100, offset = 0) => {
    return blogDriver.getPosts(limit, offset)
  }

  getCategoryWithPosts = async (categorySlug, limit = 100, offset = 0) => {
    return blogDriver.getCategoryWithPosts(categorySlug, limit, offset)
  }

  getPostBySlug = (slug) => {
    return blogDriver.getPostBySlug(slug)
  }

  getAuthor = async (slug) => {
    console.log("Getting Author")
    let response = await fetch(this.AUTHOR_URL + "?slug=" + slug, {
      method: 'GET'
    })
    let data = await response.json()
    return data[0]
  }
}

export default new BlogService()