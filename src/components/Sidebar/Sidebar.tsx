import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNotebooksContext } from '../../hooks/NotebooksContext';

import NotebookSelect from '../SelectNotebook/SelectNotebook';
import SearchBar from '../SearchBar/SearchBar';
import ListNote from '../ListNote/ListNote';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import './Sidebar.css'


const Sidebar = () => {
    const [search, setSearch] = useState('');
    const { notebookId } = useParams();
    const { notebooks } = useNotebooksContext();

    const noteListRef = useRef<HTMLDivElement>(null);
    const currentNotebook = notebooks.find(notebook => notebook.id === notebookId);
    const regex = new RegExp(search, 'ig');

    const searchResultNotes = currentNotebook?.notes.filter((note) => {
        return regex.test(note.body) || regex.test(note.title)
    })

    const listNotes = notebookId && search && currentNotebook && searchResultNotes
        ? searchResultNotes : currentNotebook?.notes

    return (
        <nav className='sidebar'>
            <div className='sidebar__inputContainer'>
                <NotebookSelect />
                {notebookId ? <SearchBar search={search} setSearch={setSearch} /> : null}
            </div>

            <aside className='listNotes' ref={noteListRef}>
                {listNotes ? listNotes.map(note => (
                    <ListNote note={note} key={note.id} />
                )) : null}
                {notebookId && <AddNoteButton notebookId={notebookId} noteListRef={noteListRef} />}
            </aside>
        </nav>
    )
}

export default Sidebar