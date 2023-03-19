import React, {useState} from 'react'
import news from '../../data/news'
import NewsTitle from '../../components/Generic/Title'
import NewsSearch from '../../components/Generic/Search'
import NewsGrid from '../../components/News/NewsGrid'
import NewsCard from '../../components/News/NewsCard'
import moment from 'moment/moment'

const NewsPage = () => {
    const [filter, setFilter] = useState('');
    let visibleNews = {};
    if (news) {
    visibleNews = news.filter(item =>
        item.title.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter)
    ).sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY'));
    };

    return <div>
        <NewsTitle>News</NewsTitle>

        <NewsSearch
            saveFilter={setFilter}
            filter = {filter}
        />

        <NewsGrid>
            {news &&
        visibleNews.map(item => {
            return (
                <NewsCard
                    title={item.title}
                    url={item.url}
                    description={item.description}
                    date = {item.date}
                    key={item.id}
                />
            );
        })}
        </NewsGrid>

        
    </div>
};

export default NewsPage;
