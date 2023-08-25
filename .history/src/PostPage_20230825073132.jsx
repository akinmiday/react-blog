import { useParams, Link } from "react-router-dom"

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.filter(post => (post.id).toString() === id)
    return (
        <main>
            <h1>PostPage </h1>
        </main>
    )
}

export default PostPage