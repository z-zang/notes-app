import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotebooksContextProvider from './hooks/NotebooksContext'

import App from './App'
import Note from './components/Note/Note'
import Create from './pages/Create/Create'
import Settings from './pages/Settings/Settings'
import Manage from './pages/Manage/Manage'
import Error from './pages/Error'

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
            {
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
