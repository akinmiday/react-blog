/* eslint-disable react/prop-types */
import Feed from "./Feed"
const Home = (props) => {
    const { posts, isLoading, fetchError } = props
    return (
        <main className="Home" >
            {isLoading && <p className="statusMsg" >Loading Posts....</p>}
            {fetchError && <p></p>}
        </main>
    )
}

export default Home