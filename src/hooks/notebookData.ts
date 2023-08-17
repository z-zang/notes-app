import { Notebook } from "../types/Notebook";

export const notebooksData: Notebook[] = [
    {
        id: 12345,
        title: 'holiday',
        notes: [
            {
                title: 'edinburgh fringe',
                body: 'meet 8:40am at london euston.'
            },
            {
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
                title: 'tala plushie',
                body: 'install blender\ncreate mockup of plushie'
            },
            {
                title: 'Common press song',
                body: 'reduce noise in audacit \nchoose relevant clips and stitch together'
            },
            {
                title: 'arms control',
                body: '1hr practise everyday'
            }
        ]
    }]