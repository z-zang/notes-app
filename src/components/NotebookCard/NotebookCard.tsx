import { useRef, useState } from "react";
import { useNotebooksContext } from "../../hooks/NotebooksContext"
import { Notebook } from "../../types/NotebookTypes";
import './NotebookCard.css';

type Props = {
    notebook: Notebook
}

const NotebookCard = ({ notebook }: Props) => {
    const { dispatch } = useNotebooksContext();

    const [isEditable, setIsEditable] = useState(false)
    const [title, setTitle] = useState(notebook.title)
    const notebookTitleRef = useRef<HTMLInputElement>(null)

    const renameNotebook = () => {
        if (isEditable === false) {
            setIsEditable(true)
            notebookTitleRef.current?.focus();
        } else {
            setIsEditable(false)
            dispatch({
                type: 'RENAME_NOTEBOOK',
                payload: {
                    notebookId: notebook.id,
                    title: title
                }
            })
        }
    }

    const deleteNotebook = (notebookId: string) => {
        dispatch({
            type: 'DELETE_NOTEBOOK',
            payload: {
                notebookId: notebookId
            }
        })
    }

    const updateNotebookTitle = (titleInput: string) => {
        setTitle(titleInput);
    }

    return (
        <div className="notebookCard__container" key={notebook.id}>
            <input
                type="text"
                className={`${isEditable ? 'notebookCard__title--editable' : 'notebookCard__title'}`}
                value={title}
                ref={notebookTitleRef}
                onChange={(e) => { updateNotebookTitle(e.target.value) }}
                readOnly={!isEditable}
            />

            <p>{notebook.notes.length} {notebook.notes.length > 1 ? 'notes' : 'note'}</p>

            <span className="notebookCard__buttonContainer">
                <button className="notebookCard__renameButton" onClick={() => renameNotebook()}>{isEditable ? 'Save' : 'Rename'}</button>
                <button className="notebookCard__deleteButton" onClick={() => deleteNotebook(notebook.id)}>Delete</button>
            </span>
        </div>
    )
}

export default NotebookCard