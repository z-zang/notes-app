import short from 'short-uuid'
import { useNavigate } from "react-router-dom"
import { useNotebooksContext } from "../../hooks/NotebooksContext";
import { useParams } from "react-router-dom"
import { Notebook } from '../../types/NotebookTypes'
import trashIcon from '../../../public/trashIcon.png'
import './DeleteNoteButton.css';

type Props = {
    notebook: Notebook
}

const DeleteNoteButton = ({ notebook }: Props) => {
    const navigate = useNavigate();
    const { dispatch } = useNotebooksContext();
    const { notebookId, noteId } = useParams();
    const onlyOneNoteLeft = notebook.notes.length === 1;
    const redirectOnDeleteNoteId = notebook.notes[0]?.id === noteId ?
        notebook.notes[1]?.id : notebook.notes[0]?.id;

    const deleteNote = () => {
        const redirectId = onlyOneNoteLeft ? short.generate() : redirectOnDeleteNoteId
        if (onlyOneNoteLeft) {
            dispatch({
                type: 'CREATE_NOTE',
                payload: {
                    id: redirectId,
                    notebookId: notebookId!
                }
            })
        }

        navigate(`/notebook/${notebookId}/edit/${redirectId}`)

        dispatch({
            type: 'DELETE_NOTE',
            payload: {
                notebookId: notebookId!,
                noteId: noteId!,
            }
        })
    }

    return (
        <button className="deleteNoteButton" onClick={() => deleteNote()}>
            <img src={trashIcon} alt="" height='20px' />
        </button>
    )
}

export default DeleteNoteButton