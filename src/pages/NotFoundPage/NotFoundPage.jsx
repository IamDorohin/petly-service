import { Section, Box, Text, Image, SecondText, Description, StyledLink } from "./NotFoundPage.styled";
import cat from '../../img/cat.png'
const NotFoundPage = () => {
    return <Section >
        <Box>
            <Text>4</Text>
            <Image src={cat} alt='cat' />
            <SecondText>4</SecondText>
        </Box>

        <Description>Seems like this page doesn't exist. But you can always <StyledLink to='/'>go home</StyledLink>.</Description>
        
    </Section>
};

export default NotFoundPage;
