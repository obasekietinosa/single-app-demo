import React from 'react'
import Helmet from 'react-helmet'
import PostList from "Components/Entities/Posts/PostList"
import CardColumns from "Components/Utilities/Layout/Containers/CardColumns"
import PostPreviewCard from "Components/Entities/Posts/Renders/PostPreviewCard"
import './CategoryDetails.css'

export default function CategoryDetails({ category }) {
  console.log(category)
  return (
    <div className="CategoryDetails">
      <Helmet>
        <title>{category.name} - WeTalkSound</title>
        <meta name="description" content={category.description} />
        <meta property="og:title" content={`${category.name} - WeTalk Sound`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:image" content={`https://blog-admin.wetalksound.co/extra/${category.slug}.jpg`} />
        <meta property="og:url" content={`https://blog.wetalksound.co/categories/${category.slug}`} />
        <meta name="twitter:title" content={`${category.name} - WeTalk Sound`} />
        <meta name="twitter:description" content={category.description} />
        <meta name="twitter:image" content={`https://blog-admin.wetalksound.co/generate-image/?title=${encodeURI(category.name)}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header className="py-5">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-12 col-md-6 mb-3">
              <img class="img-fluid" alt={category.name} src={`https://blog-admin.wetalksound.co/extra/${category.slug}.jpg`} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h1
                dangerouslySetInnerHTML={{ __html: category.name }}
              >
              </h1>
              <p>
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Articles From This Category</h4>
            <CardColumns>
              <PostList>
                <PostPreviewCard />
              </PostList>
            </CardColumns>
          </div>
        </div>
      </div>
    </div>
  )
}
