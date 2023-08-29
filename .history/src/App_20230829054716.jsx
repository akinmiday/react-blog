import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import api from "./api/post"
import useAxiosFetch from './hooks/useAxiosFetch'
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
import EditPost from './EditPost'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:350/posts')

  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResult(filteredResults.reverse());
  }, [posts, search])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    try {
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }

  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost = { id, title: editTitle, datetime, body: editBody }
    try {
      const response = await api.put(`/posts/${id}`, updatedPost)
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle("")
      setEditBody("")
    } catch (err) {
      console.log(err.message)
    }
  }



  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postsList = posts.filter(post => post.id !== id)
      setPosts(postsList)
    } catch (err) {
      console.log(err.message)
    }

  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'
      element={<Layout search={search} setSearch={setSearch} />} >
      <Route
        index
        element={<Home
          posts={searchResult}
          fetchError={fetchError}
          isLoading={isLoading}
        />}

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
        path='edit/:id'
        element={<EditPost
          posts={posts}
          handleEdit={handleEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editBody={editBody}
          setEditBody={setEditBody} />}
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
