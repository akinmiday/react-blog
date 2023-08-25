import { useParams, Link } from "react-router-dom"

const PostPage = (props) => {
    const { posts, handleDelete } = props
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className="PostPage" >
            <article className="post" >
                { }
            </article>
        </main>
    )
}

export default PostPage