import { Link } from 'react-router-dom'
import { useNotebooksContext } from '../hooks/NotebooksContext'
import './Start.css'

const Start = () => {
    const { notebooks } = useNotebooksContext();

    return (
        <main className='start'>
            <h1>Welcome to notes!</h1>
            {
                notebooks.length === 0 && (
                    <>
                        <p>It seems like you don't have any notebooks yet.</p>
                        <a>Create new notebook...</a>
                    </>
                )
            }
            {
                notebooks.length > 0 && (
                    <>
                        <p>Recent notebooks:</p>
                        <section className='notebookContainer'>
                            {
                                notebooks.slice(0, 3).map(notebook => (
                                    <span className='notebookLink'>
                                        <Link to={`/notebook/${notebook.id}`}>
                                            <div>
                                                <p>{notebook.title}</p>
                                                <p>notes: {notebook.notes.length}</p>
                                            </div>
                                        </Link>
                                    </span>
                                ))
                            }
                            {
                                <span className='notebookLink'>
                                    <p>
                                        {`new
                                        \n
                                        notebook`}
                                    </p>
                                </span>
                            }
                        </section>
                        <p className='moreNotebooks'>More notebooks...</p>
                    </>
                )
            }
        </main >
    )
}

export default Start