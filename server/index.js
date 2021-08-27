const express = require('express')
const path = require('path')
const enforce = require('express-sslify');

const PORT =  process.env.PORT ? process.env.PORT : 3000

const reactRenderer = require('./react-renderer')
const routes = ['/', '/posts', '/posts/:slug']

const app = express()

app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.get('/*', reactRenderer.render(routes))

app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.static(path.resolve(__dirname, '../public')))

app.use(reactRenderer.render(routes))

app.listen(PORT, () => console.log("Etin's Notes."))