import { useParams } from 'react-router-dom';
import './Notebook.css'
import { useNotebooksContext } from '../hooks/NotebooksContext';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Notebook = (props: Props) => {
    const { id } = useParams();
    const { notebooks } = useNotebooksContext();
    const navigate = useNavigate();

    const currentNotebook = notebooks.find(notebook => notebook.id.toString() === id)!

    return (
        <main className='main'>
            <nav className='sidebar'>

                <select name="notebook" id="" value={id} onChange={(e) => navigate(`/notebook/${e.target.value}`)}>
                    {notebooks.map(notebook => (
                        <option value={notebook.id}>{notebook.title}</option>
                    ))}
                </select>

                <input type='text' className='searchbar' placeholder='Search notes...' />

                {
                    currentNotebook.notes.map(note => (
                        <div>
                            <p><strong>{note.title}</strong></p>
                            <p>{note.body.substring(0, 25)} ...</p>
                        </div>
                    ))
                }
            </nav>
            <div>
            </div>
        </main>


    )
}

export default Notebook