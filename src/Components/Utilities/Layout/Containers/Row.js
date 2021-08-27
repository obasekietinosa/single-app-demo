import React from 'react'

export default function Row({ children, ...props}) {
  return (
    <div {...props} className="row">
      {children}
    </div>
  )
}