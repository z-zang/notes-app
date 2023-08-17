import { Notebook } from "../types/Notebook";

export const notebooksData: Notebook[] = [
    {
        id: 12345,
        title: 'holiday',
        notes: [
            {
                id: 1,
                title: 'edinburgh fringe',
                body: 'meet 8:40am at london euston.'
            },
            {
                id: 2,
                title: 'microflight',
                body: 'research places to go to\nask alex if she wants to come'
            }
        ]
    },
    {
        id: 33448,
        title: 'projects',
        notes: [
            {
                id: 1,
                title: 'beads workshop',
                body: 'make more fun bead bracelets'
            },
            {
                id: 3,
                title: 'tala plushie',
                body: 'install blender\ncreate mockup of plushie'
            },
            {
                id: 4,
                title: 'Common press song',
                body: 'reduce noise in audacit \nchoose relevant clips and stitch together'
            },
            {
                id: 5,
                title: 'arms control',
                body: '1hr practise everyday'
            }
        ]
    }]