export type Note = {
    title: string,
    body: string
}

export type Notebook = {
    id: number,
    title: string,
    notes: Note[]
}
