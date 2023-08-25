const Home = ({ posts }) => {
    return (
        <main className="Home" >
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: '2rem' }} ></p>
            )
            }
        </main>
    )
}

export default Home