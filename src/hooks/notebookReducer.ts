import { Notebook } from "../types/Notebook"
import short from 'short-uuid'

type UPDATE_NOTE_BODY = {
    type: 'UPDATE_NOTE_BODY',
    payload: {
        notebookId: string,
        noteId: string,
        body: string
    }
};

type UPDATE_NOTE_TITLE = {
    type: 'UPDATE_NOTE_TITLE',
    payload: {
        notebookId: string,
        noteId: string,
        title: string
    }
};

type DELETE_NOTE = {
    type: 'DELETE_NOTE',
    payload: {
        notebookId: string,
        noteId: string,
    }
};

type CREATE_NOTE = {
    type: 'CREATE_NOTE',
    payload: {
        id: string,
        notebookId: string,
    }
};

type CREATE_NOTEBOOK = {
    type: 'CREATE_NOTEBOOK',
    payload: {
        title: string
    }
};

type DELETE_NOTEBOOK = {
    type: 'DELETE_NOTEBOOK',
    payload: {
        notebookId: string,
    }
};

export type NotebookAction =
    DELETE_NOTE |
    CREATE_NOTE |
    UPDATE_NOTE_BODY |
    UPDATE_NOTE_TITLE |
    CREATE_NOTEBOOK |
    DELETE_NOTEBOOK

export const notebookReducer = (notebooks: Notebook[], action: NotebookAction) => {
    // change to not mutate state!!!!!
    const notebookState = [...notebooks]

    switch (action.type) {
        case 'UPDATE_NOTE_BODY': {
            const selectedNotebook = notebookState.find(notebook => notebook.id === action.payload.notebookId)!
            selectedNotebook.notes.find(note => note.id === action.payload.noteId)!.body = action.payload.body
            return notebookState
        }
        case 'UPDATE_NOTE_TITLE': {
            const selectedNotebook = notebookState.find(notebook => notebook.id === action.payload.notebookId)!
            selectedNotebook.notes.find(note => note.id === action.payload.noteId)!.title = action.payload.title
            return notebookState
        }
        case 'CREATE_NOTE': {
            const newNote = {
                id: action.payload.id,
                title: '',
                body: ''
            }
            const notebooksWithNewNote = notebooks.map((notebook => {
                if (notebook.id === action.payload.notebookId) {
                    return {
                        id: notebook.id,
                        title: notebook.title,
                        notes: [newNote, ...notebook.notes]
                    }
                }
                return notebook
            }))
            // todo: get rid of all empty notes on state change

            return notebooksWithNewNote
        }


        case 'DELETE_NOTE':
            return notebookState

        case 'CREATE_NOTEBOOK': {
            const newNotebook = {
                id: short.generate(),
                title: action.payload.title,
                notes: [{
                    id: short.generate(),
                    title: 'New note',
                    body: ''
                }]
            }
            return [newNotebook, ...notebookState]
        }
        case 'DELETE_NOTEBOOK': {
            const remainingNotebooks = notebookState.filter(notebook => notebook.id !== action.payload.notebookId)
            return remainingNotebooks
        }
        default:
            return notebookState
    }
}