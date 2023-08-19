import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom"
import { useNotebooksContext } from "../../hooks/NotebooksContext";
import './Note.css'
import DeleteNoteButton from "../DeleteNoteButton/DeleteNoteButton";

const Note = () => {
    const { notebooks, dispatch } = useNotebooksContext();
    const { notebookId, noteId } = useParams();
    const titleRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        titleRef.current!.style.height = "0px";
        titleRef.current!.style.height = `${titleRef.current!.scrollHeight}px`;
    }, [titleRef?.current?.value, notebookId, noteId])

    const notebook = notebooks.find(notebook => notebook.id === notebookId)!
    const note = notebook.notes.find(note => note.id === noteId)!

    const handleNoteChange = ({ title, body }: {
        title: string,
        body: string
    }) => {
        dispatch({
            type: 'UPDATE_NOTE',
            payload: {
                notebookId: notebookId!,
                noteId: noteId!,
                title: title,
                body: body
            }
        })
    }

    return (
        <div className="note__container">
            <div className="note__heading">
                <textarea
                    className="note__title"
                    name="note__title"
                    ref={titleRef}
                    onChange={e => handleNoteChange({ title: e.target.value, body: note.body })}
                    value={note.title}
                    placeholder="Untitled"
                />
                <DeleteNoteButton notebook={notebook} />
            </div>
            <textarea
                className="note__body"
                name="note__body"
                ref={null}
                onChange={e => handleNoteChange({ title: note.title, body: e.target.value })}
                value={note.body}
                placeholder="Type something..."
            />
        </div>
    )
}

export default Note