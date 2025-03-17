import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/Login.jsx'
import Grupo from './components/grupo/Grupo.jsx'
import Aluno from './components/aluno/Aluno.jsx'
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

const router2 = (<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<RecentActivity />} />
    <Route path="project/:id" element={<Project />} />
  </Route>
</Routes>
</BrowserRouter>)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    {router2}
  </StrictMode>,
)
