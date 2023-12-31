import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate
} from 'react-router-dom'

import './App.css'
import Home from './Home'
import Layout from './Layout'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const navigate = useNavigate()


  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    navigate('/')
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} search={search} setSearch={setSearch} >
      <Route
        index
        element={<Home posts={posts} />}

      />
      <Route
        path='post'
        element={<NewPost />}

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
