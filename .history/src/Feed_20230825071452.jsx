const Feed = ({ posts }) => {
    return (
        <>
            {posts(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed