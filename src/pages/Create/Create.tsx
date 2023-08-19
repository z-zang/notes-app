import { useNotebooksContext } from "../../hooks/NotebooksContext"
import { useState } from "react";
import './Create.css'

const Create = () => {
    const { dispatch } = useNotebooksContext();
    const [notebookTitle, setNotebookTitle] = useState('')
    const [showAlert, setShowAlert] = useState({ show: false, message: '' });

    const handleCreateNotebook = () => {
        if (!notebookTitle) {
            setShowAlert({ show: true, message: 'Please enter a title for the notebook!' })
            setTimeout(() => {
                setShowAlert({ show: false, message: '' })
            }, 2000);
        } else {
            dispatch({
                type: 'CREATE_NOTEBOOK',
                payload: {
                    title: notebookTitle
                }
            })
            setShowAlert({ show: true, message: `New notebook '${notebookTitle}' created.` })
            setNotebookTitle('')
            setTimeout(() => {
                setShowAlert({ show: false, message: '' })
            }, 2000);
        }
    }

    return (
        <div>
            <h1>Create new notebook</h1>
            <span className="newNotebook_container">
                <input type="text" name="" id=""
                    placeholder='New notebook...'
                    className='newNotebook__input'
                    onChange={e => setNotebookTitle(e.target.value)}
                    value={notebookTitle}
                />
                <button
                    className='newNotebook__button'
                    onClick={handleCreateNotebook}
                >
                    Create
                </button>
            </span>

            {showAlert.show && <div>{showAlert.message}</div>}
        </div>
    )
}

export default Create