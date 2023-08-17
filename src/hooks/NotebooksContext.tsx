import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import { Notebook } from "../types/Notebook";
import { notebooksData } from "./notebookData";

type NotebooksContextType = {
    notebooks: Notebook[],
    setNotebooks: Dispatch<SetStateAction<Notebook[]>>
}

const NotebooksContext = createContext<NotebooksContextType>({
    notebooks: [],
    setNotebooks: () => { }
})

type NotebooksContextProviderPropsType = {
    children: ReactNode[] | ReactNode
}

const NotebooksContextProvider = ({ children }: NotebooksContextProviderPropsType) => {
    // todo: change to useReducer?
    const [notebooks, setNotebooks] = useState<Notebook[]>(notebooksData)

    return (
        <NotebooksContext.Provider value={{ notebooks, setNotebooks }}>
            {children}
        </NotebooksContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotebooksContext = () => useContext(NotebooksContext)

export default NotebooksContextProvider