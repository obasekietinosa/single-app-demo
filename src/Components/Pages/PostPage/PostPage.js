import React from 'react'
import Post from 'Components/Entities/Posts/Post';
import FullPost from 'Components/Entities/Posts/Renders/FullPost';

export default function PostPage({ match }) {
  return (
    <div className="Post">
      <Post match={match}>
        <FullPost/>
      </Post>
    </div>
  )
}