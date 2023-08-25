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
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='post'
        element={<NewPost />}

      />
      <Route
        path='post/:id'
        element={<PostPage />}
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
