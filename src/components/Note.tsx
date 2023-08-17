import { useParams } from "react-router-dom"
import { useNotebooksContext } from "../hooks/NotebooksContext";
import { useState } from "react";

type Props = {}

const Note = (props: Props) => {
    const { notebooks, dispatch } = useNotebooksContext()
    const { notebookId, noteId } = useParams();
    const notebook = notebooks.find(notebook => notebook.id.toString() === notebookId)!
    const note = notebook.notes.find(note => note.id.toString() === noteId)!

    // console.log('note', note)

    const handleTextChange = (updatedBody: string) => {
        dispatch({
            type: 'UPDATE_NOTE_BODY',
            payload: {
                notebookId: Number(notebookId),
                noteId: Number(noteId),
                body: updatedBody
            }
        })
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