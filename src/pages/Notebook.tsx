import { Outlet, useParams } from 'react-router-dom';
import './Notebook.css'
import { useNotebooksContext } from '../hooks/NotebooksContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {}

const Notebook = (props: Props) => {
    const { notebookId } = useParams();
    const { notebooks } = useNotebooksContext();
    const navigate = useNavigate();

    const currentNotebook = notebooks.find(notebook => notebook.id.toString() === notebookId)!

    return (
        <main className='main'>
            <nav className='sidebar'>

                <select name="notebook" value={notebookId} onChange={(e) => navigate(`/notebook/${e.target.value}`)}>
                    {notebooks.map(notebook => (
                        <option value={notebook.id} key={notebook.id}>{notebook.title}</option>
                    ))}
                </select>

                <input type='text' className='searchbar' placeholder='Search notes...' />

                {
                    currentNotebook && currentNotebook.notes.map(note => (
                        <Link to={`/notebook/${notebookId}/edit/${note.id}`} key={note.id}>
                            <div>
                                <p><strong>{note.title}</strong></p>
                                <p>{note.body.substring(0, 25)} ...</p>
                            </div>
                        </Link>
                    ))
                }
            </nav>

            <Outlet />
        </main>
    )
}

export default Notebook