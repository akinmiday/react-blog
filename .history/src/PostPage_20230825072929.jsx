import { useParams, Link } from "react-router-dom"

const PostPage = ({ post, handleDelete }) => {
    const { id } = useParams()
    return (
        <main>
            <h1>PostPage </h1>
        </main>
    )
}

export default PostPage