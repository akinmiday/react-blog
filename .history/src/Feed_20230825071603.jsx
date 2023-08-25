import Post from "./Post"

const Feed = (props) => {
    const { post } = props
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed