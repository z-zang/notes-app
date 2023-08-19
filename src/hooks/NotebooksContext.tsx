import { useContext, useReducer, createContext, Dispatch, ReactNode } from "react";
import { notebookReducer } from "./notebookReducer";
import { Notebook } from "../types/NotebookTypes";
import { NotebookAction } from "../types/NotebookActionTypes";
import { notebooksData } from "../notebookData";

type NotebooksContextType = {
    notebooks: Notebook[],
    dispatch: Dispatch<NotebookAction>
}
type NotebooksContextProviderPropsType = {
    children: ReactNode[] | ReactNode
}

const NotebooksContext = createContext<NotebooksContextType>({
    notebooks: [],
    dispatch: () => { }
})

const NotebooksContextProvider = ({ children }: NotebooksContextProviderPropsType) => {
    const [notebooks, dispatch] = useReducer(notebookReducer, notebooksData)

    return (
        <NotebooksContext.Provider value={{ notebooks, dispatch }}>
            {children}
        </NotebooksContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotebooksContext = () => useContext(NotebooksContext)

export default NotebooksContextProvider