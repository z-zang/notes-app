import { Link, useParams } from 'react-router-dom';
import { Note } from '../../types/NotebookTypes';
import './ListNote.css';

type Props = {
    note: Note,
}

const ListNote = ({ note }: Props) => {
    const { notebookId, noteId } = useParams();

    return (
        <Link to={`/notebook/${notebookId}/edit/${note.id}`} >
            <div className={`listNote ${noteId === note.id ? 'listNote--selected' : ''}`}>
                <p className='listNote__title'>{note.title || 'Untitled'}</p>
                <p className='listNote__body'>{note.body || 'Type something...'}</p>
            </div>
        </Link>
    )
}

export default ListNote