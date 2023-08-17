import { Link } from 'react-router-dom'
import './Start.css'
import { useNotebooksContext } from '../hooks/NotebooksContext'

type Props = {}

const Start = (props: Props) => {
    // const notebookArr = []
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
                                notebooks.map(notebook => (
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
                        </section>
                        <p>More notebooks...</p>
                    </>
                )
            }
        </main>
    )
}

export default Start