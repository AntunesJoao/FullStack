import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//paginas
import Home from './routes/Home.jsx'
import Chamados from './routes/Chamados.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/chamados", element: <Chamados/>}
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}></RouterProvider>
  </StrictMode>,
)
