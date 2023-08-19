import { useNotebooksContext } from "../hooks/NotebooksContext"
import './Manage.css'
const Manage = () => {
    const { notebooks, dispatch } = useNotebooksContext()
    const deleteNotebook = (notebookId: string) => {
        dispatch({
            type: 'DELETE_NOTEBOOK',
            payload: {
                notebookId: notebookId
            }
        })
    }

    return (
        <div>
            <h1>Manage notebooks</h1>
            <div>
                {notebooks.map(notebook => (
                    <div className="manageNotebookList" key={notebook.id}>
                        <textarea className="notebookList__noteTitle" value={notebook.title} />
                        <h3>Total notes: {notebook.notes.length}</h3>
                        <button onClick={() => deleteNotebook(notebook.id)}>Delete</button>
                        <button onClick={() => { }}>Rename</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Manage