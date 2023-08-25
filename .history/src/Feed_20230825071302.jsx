import Post from "./Post"

const Feed = ({ post }) => {
    return (
        <>
            {postMessage.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed