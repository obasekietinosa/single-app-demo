import React from 'react'

export default function ContainerWithRow({ children, ...props}) {
  return (
    <div {...props} className="container">
      <div className="row">
        {children}
      </div>
    </div>
  )
}