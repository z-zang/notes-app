import { useParams } from "react-router-dom"
import { useNotebooksContext } from "../hooks/NotebooksContext";
import { useState } from "react";

type Props = {}

const Note = (props: Props) => {
    const { notebooks, setNotebooks } = useNotebooksContext()
    const { notebookId, noteId } = useParams();
    const notebook = notebooks.find(notebook => notebook.id.toString() === notebookId)!
    const note = notebook.notes.find(note => note.id.toString() === noteId)!

    // console.log('note', note)

    const handleTextChange = (updatedBody: string) => {

        const updatedNote = {
            ...note,
            body: updatedBody
        }
        const remainingNotes = notebook.notes.filter(note => note.id.toString() !== noteId)!

        const updatedNotebook = {
            ...notebook,
            notes: [updatedNote, ...remainingNotes]
        }
        const remainingNotebooks = notebooks.filter(notebook => notebook.id.toString() !== notebookId)!
        const updatedNotebooks = [updatedNotebook, ...remainingNotebooks]

        setNotebooks(updatedNotebooks)
    }

    return (
        <div>
            {!note ? (
                <div>Error! not a valid note url!</div>
            ) : (
                <div>
                    <h2>{note.title}</h2>
                    <textarea name="" id="" cols={30} rows={10} onChange={e => handleTextChange(e.target.value)} value={note.body} />
                </div>
            )}

        </div>
    )
}

export default Note