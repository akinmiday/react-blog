const Feed = ({ post }) => {
    return (
        <>
            {post(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed