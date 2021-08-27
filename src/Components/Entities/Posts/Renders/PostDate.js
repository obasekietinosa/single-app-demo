import React from 'react'

export default function PostDate(props) {
    return (
        <React.Fragment>
            {
              new Date(props.date).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
            }
        </React.Fragment>
    )
}
