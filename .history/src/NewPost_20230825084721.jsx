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
        </main>
    )
}

export default NewPost