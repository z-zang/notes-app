import { Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { useNotebooksContext } from '../hooks/NotebooksContext';

import './Notebook.css'

const Notebook = () => {
    const { notebookId } = useParams();
    const { notebooks } = useNotebooksContext();
    const navigate = useNavigate();

    const currentNotebook = notebooks.find(notebook => notebook.id.toString() === notebookId)!

    return (
        <main className='main'>
            <nav className='sidebar'>
                <select className="notebook__select" value={notebookId} onChange={(e) => navigate(`/notebook/${e.target.value}`)}>
                    {notebooks.map(notebook => (
                        <option className='notebook__option' value={notebook.id} key={notebook.id}>{notebook.title}</option>
                    ))}
                </select>

                <input type='text' className='searchbar' placeholder='Search notes...' />

                <aside className='notes__container'>
                    {
                        currentNotebook && currentNotebook.notes.map(note => (
                            <Link to={`/notebook/${notebookId}/edit/${note.id}`} key={note.id} >
                                <div className='listnote'>
                                    <p className='listnote__title'>{note.title}</p>
                                    <p className='listnote__body'>{note.body}</p>
                                </div>
                            </Link>

                        ))
                    }
                </aside>
            </nav>

            <Outlet />
        </main>
    )
}

export default Notebook