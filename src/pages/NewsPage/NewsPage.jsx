import React, { useState } from 'react';
import Title from '../../components/Generic/Title';
import NewsSearch from '../../components/News/NewsSearch/Search';
import NewsGrid from '../../components/News/NewsGrid/NewsGrid';
import NewsCard from '../../components/News/NewsCard/NewsCard';
import moment from 'moment/moment';
import { NewsContainer, Section } from './NewsPage.styled';
import { useGetNewsQuery } from '../../redux/news/NewsAPI';
import NoResult from '../../components/Generic/NoResult/NoResult';

const NewsPage = () => {
  const [filter, setFilter] = useState('');
  const { currentData, refetch } = useGetNewsQuery();

  let visibleNews = {};

  if (currentData) {
    visibleNews = currentData.data.result
      .filter(
        item =>
          item.title.toLowerCase().includes(filter.toLowerCase()) ||
          item.description.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => moment(b.date) - moment(a.date));
  }

  return (
    <Section>
      <NewsContainer>
        <Title>News</Title>
        <NewsSearch saveFilter={setFilter} fetch={refetch} />
        <NewsGrid>
          {currentData &&
            visibleNews.map(item => {
              return (
                <NewsCard
                  key={item.title}
                  title={item.title}
                  url={item.url}
                  description={item.description}
                  date={item.date}
                />
              );
            })}
        </NewsGrid>
        {visibleNews.length === 0 && <NoResult match={filter} />}
      </NewsContainer>
    </Section>
  );
};

export default NewsPage;
