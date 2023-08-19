import { useNavigate, useParams } from 'react-router-dom';
import { useNotebooksContext } from '../../hooks/NotebooksContext';
import './SelectNotebook.css'

const otherPages = [
    { title: 'create', displayLabel: '✏️ Create new' },
    { title: 'manage', displayLabel: '🗂️ Manage' },
    { title: 'settings', displayLabel: '⚙️ Settings' }
]

const SelectNotebook = () => {
    const navigate = useNavigate();
    const { notebookId } = useParams();
    const { notebooks } = useNotebooksContext();

    const handleNotebookSelect = (optionValue: string) => {
        if (otherPages.map(page => page.title).includes(optionValue)) {
            navigate(`/${optionValue}`)
        }
        else if (optionValue) {
            const firstNote = notebooks.find(notebook => notebook.id === optionValue)!.notes[0].id
            navigate(`/notebook/${optionValue}/edit/${firstNote}`)
        }
    }

    return (
        <select className="selectNotebook" value={notebookId} onChange={(e) => handleNotebookSelect(e.target.value)}>
            <option disabled value="">Select notebook</option>
            {notebooks.map(notebook => (
                <option className='selectNotebook__option' value={notebook.id} key={notebook.id}>{notebook.title}</option>
            ))}

            <option disabled className='selectNotebook__option' value='' key={'divider'}></option>
            {otherPages.map(option => (
                <option className='selectNotebook__option' value={option.title} key={option.title}>{option.displayLabel}</option>

            ))}
        </select>
    )
}

export default SelectNotebook