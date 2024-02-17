import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'
import ErrorPage from './components/ErrorPage'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/create',
                element: <Create />,
            },
            {
                path: '/read',
                element: <Read />,
            },
            {
                path: '/update',
                element: <Update />,
            },
            {
                path: '/delete',
                element: <Delete />,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
