const Home = ({ posts }) => {
    return (
        <main className="Home" >
            {posts.length ? (
                <Feed posts={posts} />
            ) : ()
            }
        </main>
    )
}

export default Home