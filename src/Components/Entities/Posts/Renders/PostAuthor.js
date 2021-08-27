import React from 'react'

export default function PostAuthor(props) {
    return (
        <div>
            by &nbsp;
            <img 
                style={ { width:"50px", height:"50px", borderRadius:"50%", verticalAlign:"middle" } } 
                src={ props.author.avatar }
                alt={ props.author.name }
            /> &nbsp;
            { props.author.name }
        </div>
    )
}
