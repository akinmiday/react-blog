import { useParams, Link } from "react-router-dom"

const PostPage = (props) => {
    const { posts, handleDelete } = props
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className="PostPage" >
            <article className="post" >
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate" >{post.datetime}</p>
                        <p className="postBody" >{post.body}</p>
                        <button onClick={() => handleDelete()} >
                            Delete Post
                        </button>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage