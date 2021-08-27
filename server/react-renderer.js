const React = require('react')
const renderToString = require('react-dom/server').renderToString
const matchPath = require('react-router').matchPath
const Helmet = require('react-helmet').default
const path = require('path')
const fs = require('fs')

const App = require('../src/Components/App/App').default

const blogService = require('../src/Services/BlogService').default

exports = module.exports

exports.render = (routes) => {
    return async (req, res, next) => {
        var match = routes.find(route => matchPath(req.path, {
            path: route,
            exact: true
        }))

        const is404 = req._possible404

        if (match || is404) {
            const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

            fs.readFile(filePath, 'utf8', async (err, htmlData) => {
                if (err) {
                    console.error('err', err)
                    return res.status(404).end()
                }

                const location = req.url

                let posts = []
                let currentPost = null
                
                if (is404) {
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    console.log(`SSR of unrouted path ${req.path} (404 ahead)`)
                }
                else {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    console.log(`SSR of ${req.path}`)
                    if(req.path.includes('/posts') || req.path === '/'){
                        posts = await blogService.getPosts()
                        if(match.includes(':slug')){
                          let slug = req.path.replace('/posts/', '')
                          currentPost = posts.find(post => post.slug === slug)
                          currentPost = currentPost ? currentPost : await blogService.getPostBySlug(slug)
                        }
                    }
                }
                // console.log(posts)
                const initialState = {posts: posts, currentPost:currentPost}
                const jsx = <App initialState={initialState} location={location} />
                const reactDom = renderToString(jsx)

                const helmet = Helmet.renderStatic()
                console.log(helmet.meta.toString(), helmet.title.toString())
                console.log(reactDom)

                const renderedHTML = htmlData.replace(
                    '<div id="root" class="loader"></div>',
                    `<div id="root" class="loader">${reactDom}</div>`
                ).replace(
                    '__STORE__',
                    JSON.stringify(initialState).split("script>").join("srcipt>")
                ).replace(
                    `<meta name="helmet-placeholder" content="">`,
                    helmet.meta.toString()
                ).replace(
                    `<title>Etin's Notes - A Blog By Etin Obaseki</title>`,
                    helmet.title.toString()
                )

                return res.end(
                    renderedHTML
                )
            })
        }
        else {
            req._possible404 = true
            return next()
        }
    }
}