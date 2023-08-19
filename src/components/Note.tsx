import { useParams } from "react-router-dom"
import { useNotebooksContext } from "../hooks/NotebooksContext";
import './Note.css'

const Note = () => {
    const { notebooks, dispatch } = useNotebooksContext();
    const { notebookId, noteId } = useParams();
    const notebook = notebooks.find(notebook => notebook.id.toString() === notebookId)!
    const note = notebook.notes.find(note => note.id.toString() === noteId)!

    const handleTextChange = (updatedBody: string) => {
        dispatch({
            type: 'UPDATE_NOTE_BODY',
            payload: {
                notebookId: notebookId!,
                noteId: noteId!,
                body: updatedBody
            }
        })
    }

    const handleTitleChange = (updatedTitle: string) => {
        dispatch({
            type: 'UPDATE_NOTE_TITLE',
            payload: {
                notebookId: notebookId!,
                noteId: noteId!,
                title: updatedTitle
            }
        })
    }

    return (
        <>
            {notebook && noteId && (
                <div className="noteContainer">
                    <textarea
                        className="note__title"
                        name="note__title"
                        rows={1}
                        onChange={e => handleTitleChange(e.target.value)}
                        value={note.title}
                        placeholder="Untitled"
                    />
                    <textarea
                        className="note__body"
                        name="note__body"
                        cols={30}
                        rows={10}
                        onChange={e => handleTextChange(e.target.value)}
                        value={note.body}
                        placeholder="Type something..."
                    />
                </div>
            )}
        </>
    )
}

export default Note