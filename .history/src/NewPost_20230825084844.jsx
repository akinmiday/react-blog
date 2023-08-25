const NewPost = (props) => {
    const {
        handleSubmit,
        postTitle,
        postBody,
        setPostBody,
        setPostTitle } = props

    return (
        <main className="NewPost" >
            <h1>New post</h1>
            <form className="newPostForm" onSubmit={handleSubmit} >
                <label htmlFor="postTitle" >Title:</label>


            </form>
        </main>
    )
}

export default NewPost