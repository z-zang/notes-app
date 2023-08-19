import { Dispatch, SetStateAction } from 'react'

type Props = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ search, setSearch }: Props) => {
    return (
        <input
            type='text'
            className='searchbar'
            placeholder='Search notes...'
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    )
}

export default SearchBar