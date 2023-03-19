import { SearchContainer, Title, Form, Input, Button } from "./NoticesSearch.styled"
import SearchIcon from '@mui/icons-material/Search';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const NoticesSearch = () => {
    return (
        <SearchContainer>
            <Title>Find your favorite pet</Title>
            <Form>
                <Input type="text" placeholder="Search" />
                <Button type="submit">
                  <SearchIcon
                      sx={{
                       width: 24,
                       height: 24,
                      color: '#111111',
                      }}
                  />
                </Button>
                
                {/* <Button type="submit">
                  <HighlightOffIcon
                      sx={{
                       width: 24,
                       height: 24,
                      color: '#111111',
                      }}
                  />
                 </Button> */}

           </Form>
        </SearchContainer>
       
)
}

export default NoticesSearch;