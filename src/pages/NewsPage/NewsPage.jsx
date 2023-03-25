import React, { useState } from 'react';
import Title from '../../components/Generic/Title';
import NewsSearch from '../../components/News/NewsSearch/Search';
import NewsGrid from '../../components/News/NewsGrid/NewsGrid';
import NewsCard from '../../components/News/NewsCard/NewsCard';
import moment from 'moment/moment';
import { NewsContainer, Section, Error } from './NewsPage.styled';
import { useGetNewsQuery } from '../../redux/news/NewsAPI';

const NewsPage = () => {
  const [filter, setFilter] = useState('');
  const {
    currentData,
    refetch,
    // error, isLoading
  } = useGetNewsQuery();

  let visibleNews = {};

  if (currentData) {
    visibleNews = currentData.data.result
      .filter(
        item =>
          item.title.toLowerCase().includes(filter) ||
          item.description.toLowerCase().includes(filter)
      )
      .sort((a, b) => moment(b.date) - moment(a.date));
  }

  return (
    <Section>
      <NewsContainer>
        <Title>News</Title>
        <NewsSearch saveFilter={setFilter} fetch={refetch} />

        {/* {error && Error component} */}
        {/* {isLoading &&  Loader component} */}
        <NewsGrid>
          {currentData &&
            visibleNews.map(item => {
              console.log(moment(item.date));
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
        {visibleNews.length === 0 && (
          <Error>
            Sorry, we have no news with this keyword. Please, try another word.
          </Error>
        )}
      </NewsContainer>
    </Section>
  );
};

export default NewsPage;
