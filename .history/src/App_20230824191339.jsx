import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Home'
import NewPost from './NewPost'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home />} >
      <Route path='newpost' element={<NewPost />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}
export default App
