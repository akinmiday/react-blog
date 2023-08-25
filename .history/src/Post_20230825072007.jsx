import { Link } from "react-router-dom"

const Post = ({ post }) => {
    return (
        <article className="post" >
            <Link to={`/post/${post.id}`} ></Link>
        </article>
    )
}

export default Post