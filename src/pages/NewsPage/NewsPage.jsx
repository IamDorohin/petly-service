import React, {useState} from 'react'
import news from '../../data/news'
import Title from '../../components/Generic/Title'
import NewsSearch from '../../components/Generic/Search'
import NewsGrid from '../../components/News/NewsGrid'
import NewsCard from '../../components/News/NewsCard'
import moment from 'moment/moment'
import {NewsContainer, Section, Error} from './NewsPage.styled'


const NewsPage = () => {

    const [filter, setFilter] = useState('');

    let visibleNews = {};
    if (news) {
    visibleNews = news.filter(item =>
        item.title.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter)
    ).sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY'));
    };

    return <Section>
        <NewsContainer>
        <Title>News</Title>
        <NewsSearch
            saveFilter={setFilter}
        />
        <NewsGrid>
            {news &&
        visibleNews.map(item => {
            return (
                <NewsCard
                    key={item.title}
                    title={item.title}
                    url={item.url}
                    description={item.description}
                    date = {item.date}
                    
                />
            );
        })}
        </NewsGrid>
        {visibleNews.length === 0 && <Error>Sorry, we have no news with this keyword. Please, try another word.</Error>}
    </NewsContainer>
    </Section>
};

export default NewsPage;
