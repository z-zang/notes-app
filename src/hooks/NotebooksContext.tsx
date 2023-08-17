/* eslint-disable no-case-declarations */

import { useState, useContext, useReducer, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import { Note, Notebook } from "../types/Notebook";
import { notebooksData } from "./notebookData";

type NotebooksContextType = {
    notebooks: Notebook[],
    dispatch: Dispatch<NotebookAction>
}

type NotebooksContextProviderPropsType = {
    children: ReactNode[] | ReactNode
}

const NotebooksContext = createContext<NotebooksContextType>({
    notebooks: [],
    dispatch: () => { }
})


type UPDATE_NOTE_BODY = {
    type: 'UPDATE_NOTE_BODY',
    payload: {
        notebookId: number,
        noteId: number,
        body: string
    }
};
type NotebookAction = UPDATE_NOTE_BODY

const NotebooksContextProvider = ({ children }: NotebooksContextProviderPropsType) => {
    // todo: change to useReducer?
    const notebookReducer = (notebooks: Notebook[], action: NotebookAction) => {
        switch (action.type) {
            case 'UPDATE_NOTE_BODY':
                const notebook = notebooks.find(notebook => notebook.id === action.payload.notebookId)!
                const note = notebook.notes.find(note => note.id === action.payload.noteId)!

                const updatedNote = {
                    ...note,
                    body: action.payload.body
                }
                const remainingNotes = notebook.notes.filter(note => note.id !== action.payload.noteId)!

                const updatedNotebook = {
                    ...notebook,
                    notes: [updatedNote, ...remainingNotes]
                }
                const remainingNotebooks = notebooks.filter(notebook => notebook.id !== action.payload.notebookId)!
                const updatedNotebooks = [updatedNotebook, ...remainingNotebooks]
                return updatedNotebooks
        }
    }

    const [notebooks, dispatch] = useReducer(notebookReducer, notebooksData)

    return (
        <NotebooksContext.Provider value={{ notebooks, dispatch }}>
            {children}
        </NotebooksContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotebooksContext = () => useContext(NotebooksContext)

export default NotebooksContextProvider