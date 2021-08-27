import React from 'react'
import Category from 'Components/Entities/Categories/Category';
import CategoryDetails from 'Components/Entities/Categories/Renders/CategoryDetails';

export default function CategoryPage({ match }) {
  return (
    <div className="Category">
      <Category match={match}>
        <CategoryDetails />
      </Category>
    </div>
  )
}