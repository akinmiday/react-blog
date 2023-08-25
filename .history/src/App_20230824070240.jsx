import { createBrowserRouter, createRoutesFromElements, Routes, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(<h1>BLOG</h1>))


  return (
    <RouterProvider router={router} />
  )
}

export default App
