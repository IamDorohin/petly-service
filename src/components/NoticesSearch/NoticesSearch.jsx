import { useState } from 'react'

import { SearchContainer, Title, Form, Input, Button } from "./NoticesSearch.styled"
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const NoticesSearch = () => {
    const [focus, setFocus] = useState(null)
    const [value, setValue] = useState("");

     const handleInputFocus = (event) => {
    setFocus(true);
    };

    const handleChange = (event) => {
    setValue(event.target.value);
    };
    
     const onChangeBtnOff = (event) => {
    setValue("");
    setFocus(false);
    
    };
    
   

    return (
        <SearchContainer>
            <Title>Find your favorite pet</Title>
            <Form  onFocus={handleInputFocus}>
                <Input type="text" placeholder="Search" value={value} onChange={handleChange} />
                {!focus  ? (
                <Button type="submit">
                  <SearchIcon
                      sx={{
                       width: 24,
                       height: 24,
                      color: '#111111',
                      }}
                  />
                </Button>
                ) : (
                <Button  onClick={onChangeBtnOff}>
                  <HighlightOffIcon
                      sx={{
                       width: 24,
                       height: 24,
                      color: '#111111',
                      }}
                  />
                 </Button> 
                 )}
           </Form>
        </SearchContainer>
       
)
}

export default NoticesSearch;