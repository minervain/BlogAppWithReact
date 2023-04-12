import React from 'react'

const BlogDetails = ({match}) => {
    return (
        <div>
            Blog Details: {match.params.id}
        </div>
    )
}

export default BlogDetails