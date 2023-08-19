export type Note = {
    id: string,
    title: string,
    body: string
}

export type Notebook = {
    id: string,
    title: string,
    notes: Note[]
}
