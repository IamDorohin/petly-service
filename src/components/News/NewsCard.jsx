export default function NewsCard ({title, url, description, date}) {
    return <li>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
        <a href={url} target="_blank" rel='noreferrer'>Read more</a>
    </li>
};