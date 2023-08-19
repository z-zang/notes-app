export type CREATE_NOTE = {
    type: 'CREATE_NOTE',
    payload: {
        id: string,
        notebookId: string,
    }
};

export type UPDATE_NOTE = {
    type: 'UPDATE_NOTE',
    payload: {
        notebookId: string,
        noteId: string,
        title: string | null
        body: string | null
    }
};

export type DELETE_NOTE = {
    type: 'DELETE_NOTE',
    payload: {
        notebookId: string,
        noteId: string,
    }
};

export type CREATE_NOTEBOOK = {
    type: 'CREATE_NOTEBOOK',
    payload: {
        title: string
    }
};

export type RENAME_NOTEBOOK = {
    type: 'RENAME_NOTEBOOK',
    payload: {
        notebookId: string,
        title: string
    }
};

export type DELETE_NOTEBOOK = {
    type: 'DELETE_NOTEBOOK',
    payload: {
        notebookId: string,
    }
};

export type NotebookAction =
    CREATE_NOTE |
    UPDATE_NOTE |
    DELETE_NOTE |
    CREATE_NOTEBOOK |
    RENAME_NOTEBOOK |
    DELETE_NOTEBOOK