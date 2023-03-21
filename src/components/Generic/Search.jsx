import {SearchInput} from './Search.styled'

export default function NewsSearch({ saveFilter, filter }) {
    const handleFilter = e => {
    saveFilter(e.target.value);
  };

    return <div>
        <SearchInput
            type='text'
            value={filter}
            onChange={handleFilter}
            placeholder = 'Search'
        />
        
    </div>
}