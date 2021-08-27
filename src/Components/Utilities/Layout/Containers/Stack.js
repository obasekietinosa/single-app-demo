import React from 'react'
import './Stack.css'

export default function Stack({ children, ...props}) {
  return (
    <div className="Stack">
      {children}
    </div>
  )
}