import React from 'react'

export default function Flex({ children, alignItems, justifyContent, ...props}) {
  const style = {
    display: 'flex',
    height: '100%',
    alignItems: alignItems,
    justifyContent: justifyContent
  }
  return (
    <div style={style} className="Flex">
      {children}
    </div>
  )
}