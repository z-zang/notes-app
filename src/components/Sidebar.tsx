import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import short from 'short-uuid'
import { useNotebooksContext } from '../hooks/NotebooksContext';
import { useState, useRef } from 'react';
import './Sidebar.css'

const Sidebar = () => {
    const [search, setSearch] = useState('');
    const { notebookId, noteId } = useParams();
    const { notebooks, dispatch } = useNotebooksContext();
    const navigate = useNavigate();
    const location = useLocation();
    const noteListRef = useRef<HTMLDivElement>(null);

    const currentNotebook = notebooks.find(notebook => notebook.id.toString() === notebookId)

    const regex = new RegExp(search, 'ig');

    const searchResults = currentNotebook?.notes.filter((note) => {
        return regex.test(note.body) || regex.test(note.title)
    })

    const notesList = notebookId && search && currentNotebook && searchResults
        ? searchResults : currentNotebook?.notes

    const handleNotebookSelect = (optionValue: string) => {
        if (['create', 'settings', 'manage'].includes(optionValue)) {
            navigate(`/${optionValue}`)
        }
        else if (optionValue) {
            const firstNote = notebooks.find(notebook => notebook.id === optionValue)!.notes[0].id
            navigate(`/notebook/${optionValue}/edit/${firstNote}`)
        }
    }

    const createNewNote = () => {
        console.log('create note')
        const newNoteId = short.generate()
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
        <nav className='sidebar'>
            <div className='sidebar__inputContainer'>
                <select className="notebook__select" value={notebookId || location.pathname.substring(1)} onChange={(e) => handleNotebookSelect(e.target.value)}>
                    <option value="" disabled>Select notebook</option>
                    {notebooks.map(notebook => (
                        <option className='notebook__option' value={notebook.id} key={notebook.id}>{notebook.title}</option>
                    ))}
                    <option disabled className='notebook__option' value={''} key={'divider'}>---------------------</option>

                    <option className='notebook__option' value={'create'} key={'create'}>✏️ Create new</option>
                    <option className='notebook__option' value={'manage'} key={'manage'}>🗂️ Manage</option>
                    <option className='notebook__option' value={'settings'} key={'settings'}>⚙️ Settings</option>

                </select>

                {notebookId && <input type='text' className='searchbar' placeholder='Search notes...' value={search} onChange={e => setSearch(e.target.value)} />
                }
            </div>


            <aside className='listnote__container' ref={noteListRef}>
                {
                    notesList ? notesList.map(note => (
                        <Link to={`/notebook/${notebookId}/edit/${note.id}`} key={note.id} >
                            <div className={`listnote ${noteId === note.id ? 'listnote--selected' : ''}`}>
                                <p className='listnote__title'>{note.title || 'Untitled'}</p>
                                <p className='listnote__body'>{note.body || 'Type something...'}</p>
                            </div>
                        </Link>
                    )) : null
                }
                {
                    notebookId && <div className='listnote__createNew'>
                        <button className='listnote__createNewButton' onClick={() => createNewNote()}>+</button>
                    </div>
                }
            </aside>
        </nav>
    )
}

export default Sidebar