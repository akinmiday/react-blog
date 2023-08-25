import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Home'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home />} >

    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}
export default App
