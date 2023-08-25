const Feed = ({ posts }) => {
    return (
        <>
            {postMessage.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed