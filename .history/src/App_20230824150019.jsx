import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<h1>React JS BLOG</h1>} >

    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}
export default App
