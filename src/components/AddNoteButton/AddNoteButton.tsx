import short from 'short-uuid'
import { useNavigate } from 'react-router-dom';
import { useNotebooksContext } from '../../hooks/NotebooksContext';
import { RefObject } from 'react';
import './AddNoteButton.css';

type Props = {
    notebookId: string
    noteListRef: RefObject<HTMLDivElement>
}

const AddNoteButton = ({ notebookId, noteListRef }: Props) => {
    const { dispatch } = useNotebooksContext();
    const navigate = useNavigate();

    const addNewNote = () => {
        const newNoteId = short.generate();
        dispatch({
            type: 'CREATE_NOTE',
            payload: {
                id: newNoteId,
                notebookId: notebookId!
            }
        })
        navigate(`/notebook/${notebookId}/edit/${newNoteId}`)
        noteListRef.current!.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className='listNote__addNote'>
            <button className='listNote__addNoteButton' onClick={() => addNewNote()}>+</button>
        </div>
    )
}

export default AddNoteButton