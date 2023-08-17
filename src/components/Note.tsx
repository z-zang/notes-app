import { useParams } from "react-router-dom"
import { useNotebooksContext } from "../hooks/NotebooksContext";
import './Note.css'

const Note = () => {
    const { notebooks, dispatch } = useNotebooksContext()
    const { notebookId, noteId } = useParams();
    const notebook = notebooks.find(notebook => notebook.id.toString() === notebookId)!
    const note = notebook.notes.find(note => note.id.toString() === noteId)!

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

    const handleTitleChange = (updatedTitle: string) => {
        dispatch({
            type: 'UPDATE_NOTE_TITLE',
            payload: {
                notebookId: Number(notebookId),
                noteId: Number(noteId),
                title: updatedTitle
            }
        })
    }

    return (

        <div className="noteContainer">
            {!note ? (
                <div>Error! not a valid note url!</div>
            ) : (<>
                <textarea className="note__title" name="" id="" cols={10} rows={1} onChange={e => handleTitleChange(e.target.value)} value={note.title} />
                <textarea className="note__body" name="" id="" cols={30} rows={10} onChange={e => handleTextChange(e.target.value)} value={note.body} /></>)}
        </div>



    )
}

export default Note