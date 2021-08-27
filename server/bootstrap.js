require('ignore-styles')

require('@babel/register')({
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-modules-commonjs",
        [
            "transform-assets",
            {
                "extensions": [
                    "css",
                    "svg",
                    "jpg",
                    "png"
                ],
                "name": "static/media/[name].[hash:8].[ext]"
            }
        ],
        [
          "module-resolver", 
          {
            "root": ["./src"]
          }
        ]
    ]
})
require('dotenv').config()
console.log(process.env.REACT_APP_BLOG_URL)
require('./index')