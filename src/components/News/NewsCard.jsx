import { Card} from './NewsCard.styled'

export default function NewsCard({ title, url, description, date }) {
    const newDate = String(date).split('-').reverse().join('/');


    return <Card>
        <h2>{title.slice(0, 45) + '...'}</h2>
        <p>{description.slice(0, 220) + '...'}</p>
        <p>{newDate}</p>
        <a href={url} target="_blank" rel='noreferrer'>Read more</a>
    </Card>
};