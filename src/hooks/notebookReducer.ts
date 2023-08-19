import short from 'short-uuid'

import { Note, Notebook } from "../types/NotebookTypes"
import { NotebookAction } from "../types/NotebookActionTypes"

const updateNotes = (notes: Note[], noteId: string, title?: string | null, body?: string | null) => {
    return notes.map(note => {
        if (note.id !== noteId) return note
        return {
            id: note.id,
            title: title || note.title,
            body: body || note.body
        }
    })
}

export const notebookReducer = (notebooks: Notebook[], action: NotebookAction) => {
    switch (action.type) {
        case 'UPDATE_NOTE': {
            return notebooks.map(notebook =>
                notebook.id === action.payload.notebookId ?
                    {
                        id: notebook.id,
                        title: notebook.title,
                        notes: updateNotes(notebook.notes, action.payload.noteId, action.payload.title, action.payload.body)
                    }
                    : notebook
            )
        }
        case 'CREATE_NOTE': {
            const newNote = {
                id: action.payload.id,
                title: '',
                body: ''
            }

            return notebooks.map((notebook => {
                if (notebook.id !== action.payload.notebookId) return notebook

                return {
                    id: notebook.id,
                    title: notebook.title,
                    notes: [newNote, ...notebook.notes]
                }
            }))
        }
        case 'DELETE_NOTE': {
            return notebooks.map((notebook => {
                if (notebook.id !== action.payload.notebookId) return notebook;

                return {
                    id: notebook.id,
                    title: notebook.title,
                    notes: notebook.notes.filter(note => note.id !== action.payload.noteId)
                }
            }))
        }
        case 'CREATE_NOTEBOOK': {
            const newNotebook = {
                id: short.generate(),
                title: action.payload.title,
                notes: [{
                    id: short.generate(),
                    title: '',
                    body: ''
                }]
            }
            return [newNotebook, ...notebooks]
        }
        case 'DELETE_NOTEBOOK': {
            return notebooks.filter(notebook => notebook.id !== action.payload.notebookId)
        }
        case 'RENAME_NOTEBOOK': {
            return notebooks.map(notebook => {
                if (notebook.id !== action.payload.notebookId) return notebook
                return {
                    id: notebook.id,
                    title: action.payload.title,
                    notes: notebook.notes
                }

            })
        }
        default:
            return notebooks
    }
}