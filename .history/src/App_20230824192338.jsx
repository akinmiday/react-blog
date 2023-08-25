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


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}
export default App
