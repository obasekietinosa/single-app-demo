import React from 'react'
import CategoryList from 'Components/Entities/Categories/CategoryList'
import CategoryPreview from 'Components/Entities/Categories/Renders/CategoryPreview'
import Stack from 'Components/Utilities/Layout/Containers/Stack'

export default function TopCategories() {
  return (
    <section className="Categories">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Categories</h4>
            <Stack>
              <CategoryList limit={5}>
                <CategoryPreview />
              </CategoryList>
            </Stack>
          </div>
        </div>
      </div>
    </section>
  )
}