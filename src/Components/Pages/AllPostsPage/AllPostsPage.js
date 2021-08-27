import React from 'react'
import PostList from "Components/Entities/Posts/PostList"
import CardColumns from "Components/Utilities/Layout/Containers/CardColumns"
import PostPreviewCard from "Components/Entities/Posts/Renders/PostPreviewCard"

export default function AllPostsPage() {
  return (
    <div className="AllPostsPage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">All Our Articles</h4>
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