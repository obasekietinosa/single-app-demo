import React from 'react'

export default function Container({ children, ...props}) {
  return (
    <div {...props} className="container">
      {children}
    </div>
  )
}