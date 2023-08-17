export type Note = {
    id: number,
    title: string,
    body: string
}

export type Notebook = {
    id: number,
    title: string,
    notes: Note[]
}
