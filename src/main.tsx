import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Start from './pages/Start'
import Error from './pages/Error'
import Notebook from './pages/Notebook'
import Note from './components/Note'

import './index.css'
import NotebooksContextProvider from './hooks/NotebooksContext'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Start />,
        errorElement: <Error />,
    },
    {
        path: "/notebook/:notebookId",
        element: <Notebook />,
        errorElement: <Error />,
        children: [
            {
                path: "edit/:noteId",
                element: <Note />,
            },
            { // temp/test
                path: "note/:noteId",
                element: <Note />,
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
