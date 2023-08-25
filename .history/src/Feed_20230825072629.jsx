/* eslint-disable react/prop-types */
import Post from "./Post"

const Feed = (props) => {
    const { posts } = props
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed