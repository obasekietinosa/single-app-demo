import React, { Component } from 'react';
import './App.css';
import Navbar from 'Components/Utilities/Layout/Navbar/Navbar';
import { Switch, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import HomePage from 'Components/Pages/HomePage/HomePage';
import AllPostsPage from 'Components/Pages/AllPostsPage/AllPostsPage';
import PostPage from 'Components/Pages/PostPage/PostPage';
import CategoryPage from 'Components/Pages/CategoryPage/CategoryPage';
import DefaultPage from 'Components/Pages/DefaultPage/DefaultPage';
import { BlogProvider } from 'Components/Contexts/BlogContext';
import BlogService from 'Services/BlogService';
import Helmet from 'react-helmet'
import Footer from 'Components/Utilities/Layout/Footer/Footer';
import ScrollToTop from 'Components/Utilities/Routing/ScrollToTop'

const AppRoutes = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <main>
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route exact path='/posts'>
          <AllPostsPage />
        </Route>
        <Route exact path='/posts/:slug' component={PostPage} />
        <Route exact path='/categories/:slug' component={CategoryPage} />
        <Route component={DefaultPage} />
      </Switch>
    </main>
    <Footer />
  </>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.blogService = BlogService
    this.state = {
      postsLoaded: true,
      posts: this.props.initialState.posts ?? [],
      currentPost: this.props.initialState.currentPost,
      categories: this.props.initialState.categories ?? [],
      categoriesLoaded: true,
      currentCategory: this.props.initialState.currentCategory
    };
  }

  getCategories = () => {
    this.blogService.getCategories()
      .then(data => {
        let categories = data
        let categoriesLoaded = true
        this.setState({ categories, categoriesLoaded, error: "" })
      })
      .catch(error => this.setState({ error: "There was an error fetching categories. Please try again." }))
  }

  getCategoryWithPosts = (categoryId) => {
    this.blogService.getCategoryWithPosts(categoryId)
      .then(data => {
        let currentCategory = data
        this.setState({ currentCategory })
      })
  }

  getPosts = () => {
    this.blogService.getPosts()
      .then(data => {
        let posts = data
        let postsLoaded = true
        this.setState({ posts, postsLoaded, error: "" })
      })
      .catch(error => this.setState({ error: "There was an error fetching posts. Please try again." }))
  }

  getPost = (slug) => {
    if (slug === this.state.currentPost?.slug) {
      return
    }

    for (let post of this.state.posts) {
      if (slug === post.slug) {
        this.setState({ currentPost: post })
        return
      }
    }

    this.blogService.getPostBySlug(slug)
      .then(data => {
        if (!data) {
          this.setState({ notFound: true })
          return
        }
        console.log(data)
        let currentPost = data
        this.setState({ currentPost, error: "" })
      })
      .catch(error => console.log(error))
  }

  render() {

    return (
      <BlogProvider
        value={
          {
            categories: this.state.categories,
            posts: this.state.posts,
            currentPost: this.state.currentPost,
            currentCategory: this.state.currentCategory,
            notFound: this.state.notFound,
            getPosts: this.getPosts,
            getCategories: this.getCategories,
            getPost: this.getPost,
            getCategoryWithPosts: this.getCategoryWithPosts,
          }
        }
      >
        <Helmet>
          <title>WeTalkSound | Nigeria's Biggest Music Community</title>
          <meta property="og:title" content="WeTalkSound | Nigeria's Biggest Music Community" />
          <meta property="og:description"
            content="Feel The Beat Of Nigeria's Biggest Music Community." />
          <meta name="description" content="Feel The Beat Of Nigeria's Biggest Music Community." />
          <meta property="og:image" content="https://blog-admin.wetalksound.co/extra/thumbnail.png" />
          <meta property="og:url" content="https://blog.wetalksound.co" />
          <meta name="twitter:title" content="WeTalkSound | Nigeria's Biggest Music Community" />
          <meta name="twitter:description"
            content="Feel The Beat Of Nigeria's Biggest Music Community." />
          <meta name="twitter:image" content="https://blog-admin.wetalksound.co/extra/thumbnail.png" />
          <meta property="og:site_name" content="WeTalkSound | Nigeria's Biggest Music Community" />
          <meta name="twitter:image:alt" content="WeTalkSound | Nigeria's Biggest Music Community" />
        </Helmet>
        <div className="App">
          {
            this.props.location ?
              <StaticRouter location={this.props.location} >
                <AppRoutes />
              </StaticRouter>
              :
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
          }
        </div>
      </BlogProvider>
    );
  }
}

export default App;
