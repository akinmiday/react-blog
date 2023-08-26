import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Home from './Home'
import Layout from './Layout'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')




  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResult(filteredResults.reverse());
  }, [posts, search])


  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    setPosts([...posts, newPost])
    setPostTitle('')
    setPostBody('')



  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)

  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'
      element={<Layout search={search} setSearch={setSearch} />} >
      <Route
        index
        element={<Home posts={searchResult} />}

      />
      <Route
        path='post'
        element={<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody} />}
      />
      <Route
        path='post/:id'
        element={<PostPage posts={posts} handleDelete={handleDelete} />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='*'
        element={<Missing />}
      />

    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}
export default App
