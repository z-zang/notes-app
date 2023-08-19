import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotebooksContextProvider from './hooks/NotebooksContext'

import App from './App'
import Error from './pages/Error'
import Note from './components/Note'
import Create from './components/Create'
import Settings from './components/Settings'
import Manage from './components/Manage'

import './index.css'

const router = createBrowserRouter([
    {
        path: '/*',
        element: <Navigate to="/create" replace />
    },
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            { // todo: redirect to create when note isn't available
                path: '*',
                element: <Navigate to="/create" replace />
            },
            {
                path: "notebook/:notebookId/edit/:noteId",
                element: <Note />,
            },
            {
                path: "manage",
                element: <Manage />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "create",
                element: <Create />,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NotebooksContextProvider>
            <RouterProvider router={router} />
        </NotebooksContextProvider>
    </React.StrictMode>,
)
