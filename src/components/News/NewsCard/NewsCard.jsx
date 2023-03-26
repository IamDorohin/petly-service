import {
  Card,
  Title,
  Text,
  Box,
  Date,
  ReadMoreLink,
  Line,
} from './NewsCard.styled';

export default function NewsCard({ title, url, description, date }) {
  let newDate = String(date).split('-').reverse().join('/');
  if (newDate === 'null') {
    newDate = '--/--/----';
  }

    return <Card>
        <Line></Line>
        <Title>{title.slice(0, 40) + '...'}</Title>
        <Text>{description.slice(0, 200) + '...'}</Text>
        <Box>
            <Date>{newDate}</Date>
            <ReadMoreLink href={url} color="inherit" target="_blank" rel='noreferrer'>Read more</ReadMoreLink>
        </Box>
    </Card>
  );
}
