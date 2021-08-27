import fetch from "isomorphic-unfetch"
import { htmlDecode } from "Helpers/Helpers"

class BlogRepository {
  constructor(blogURL) {
    this.ROOT_URL = blogURL
    this.BASE_API_URL = `${this.ROOT_URL}/wp-json/wp/v2`
    this.POSTS_URL = `${this.BASE_API_URL}/posts`
    this.CATEGORIES_URL = `${this.BASE_API_URL}/categories`
    this.AUTHOR_URL = `${this.BASE_API_URL}/authors`
  }

  getCategories = async (limit = 100, offset = 0) => {
    console.log("Getting categories")
    let response = await fetch(this.CATEGORIES_URL + "?_embed&per_page=" + limit, {
      method: 'GET'
    })
    let data = await response.json()
    return data
  }

  getPosts = async (limit = 100, offset = 0) => {
    console.log("Getting posts")
    let response = await fetch(this.POSTS_URL + "?_embed&per_page=" + limit, {
      method: 'GET'
    })
    let data = await response.json()
    return this.formatPosts(data)
  }

  getCategoryWithPosts = async (categorySlug, limit = 100, offset = 0) => {
    console.log("Getting category")
    let categoryResponse = await fetch(`${this.CATEGORIES_URL}?slug=${categorySlug}`, {
      method: 'GET'
    })
    let data = await categoryResponse.json()
    data = data[0]
    if (!data) {
      return
    }
    let postsResponse = await fetch(this.POSTS_URL + "?_embed&categories=" + data.id + "&per_page=" + limit, {
      method: 'GET'
    })
    data.posts = this.formatPosts(await postsResponse.json())
    return data
  }

  getPostBySlug = async (slug) => {
    console.log("Getting Post")
    let response = await fetch(this.POSTS_URL + "?_embed&per_page=1&slug=" + slug, {
      method: 'GET'
    })
    let data = await response.json()
    return this.formatPost(data[0])
  }

  formatPost = (data) => ({
    title: htmlDecode(data.title.rendered),
    datePublished: data.date,
    image: data?.['_embedded']?.['wp:featuredmedia']?.[0]?.source_url,
    category: data?.['_embedded']?.['wp:term']?.[0]?.[0]?.name,
    excerpt: data?.excerpt.rendered,
    content: data.content.rendered,
    author: this.formatAuthor(data?._embedded?.author[0]),
    slug: data.slug,
    link: "/posts/" + data.slug
  })

  formatPosts = (posts) => {
    return posts.map(this.formatPost)
  } 

  formatAuthor = (data) => ({
    name: data.name,
    slug: data.slug,
    avatar: data.avatar_urls[96],
  })

}


const { REACT_APP_BLOG_URL } = process.env
export default new BlogRepository(REACT_APP_BLOG_URL)