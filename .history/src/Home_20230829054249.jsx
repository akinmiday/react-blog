/* eslint-disable react/prop-types */
import Feed from "./Feed"
const Home = (props) => {
    const { posts, isLoading, fetchError } = props
    return (
        <main className="Home" >
            {isLoading && <p className="statusMsg" >Loading Posts....</p>}
            {fetchError && <p className="statusMsg" style={{ color: 'red' }}  >{fetchError}</p>}
            {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} />)}
        </main>
    )
}

export default Home