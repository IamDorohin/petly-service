import {SearchInput, Button, Container} from './Search.styled'
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function NewsSearch({ saveFilter, filter }) {
    const handleFilter = e => {
    saveFilter(e.target.value);
  };

    return <Container>
        <SearchInput
            type='text'
            value={filter}
            onChange={handleFilter}
            placeholder = 'Search'
        />
        
        {filter === '' && <Button component="button">
        <SearchIcon/>
        </Button>}
        {filter !== '' && <Button component="button" onClick={()=> {saveFilter('')}}>
        <HighlightOffIcon/>
      </Button>}
        
        
        
    </Container>
}