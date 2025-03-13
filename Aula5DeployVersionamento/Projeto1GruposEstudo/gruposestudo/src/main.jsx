import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/Login'
import Grupo from './components/grupo/Grupo'
import Aluno from './components/aluno/Aluno'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/login",
              element: <Login />,
          },
          {
            path: "/grupo",
            element: <Grupo />,
          },
          {
            path: "/aluno",
            element: <Aluno />,
          },
      ]
  }, 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
