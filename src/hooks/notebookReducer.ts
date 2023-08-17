import { Notebook } from "../types/Notebook"

type UPDATE_NOTE_BODY = {
    type: 'UPDATE_NOTE_BODY',
    payload: {
        notebookId: number,
        noteId: number,
        body: string
    }
};

type UPDATE_NOTE_TITLE = {
    type: 'UPDATE_NOTE_TITLE',
    payload: {
        notebookId: number,
        noteId: number,
        title: string
    }
};

type DELETE_NOTE = {
    type: 'DELETE_NOTE',
    payload: {
        notebookId: number,
        noteId: number,
        body: string
    }
};

export type NotebookAction = UPDATE_NOTE_BODY | DELETE_NOTE | UPDATE_NOTE_TITLE

export const notebookReducer = (notebooks: Notebook[], action: NotebookAction) => {
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
        case 'DELETE_NOTE':
            return notebookState
        default:
            return notebookState
    }
}