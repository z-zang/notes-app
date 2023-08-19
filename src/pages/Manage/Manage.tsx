import { Link } from "react-router-dom";

import { useNotebooksContext } from "../../hooks/NotebooksContext"
import NotebookCard from "../../components/NotebookCard/NotebookCard";

import './Manage.css'

const Manage = () => {
    const { notebooks } = useNotebooksContext();

    return (
        <>
            <h1>Manage notebooks</h1>
            {notebooks.length > 0 ? (
                <>
                    <p>{notebooks.length} {notebooks.length === 1 ? 'notebook' : 'notebooks'}</p>
                    <div className="notebookCards__container">
                        {notebooks.map((notebook) => {
                            return (
                                <NotebookCard notebook={notebook} key={notebook.id} />
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <p>You don't have any notebooks!</p>
                    <p>Why not <Link to={'/create'} >create one?</Link></p>
                </>
            )}
        </>
    )
}

export default Manage