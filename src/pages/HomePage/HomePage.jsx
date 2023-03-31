import {
  HomeWrapp,
  HomeTitle,
  HomeSection,
  MainContainer,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeSection>
      <MainContainer>
        <HomeWrapp>
          <HomeTitle>Take good care of your small pets</HomeTitle>
        </HomeWrapp>
      </MainContainer>
    </HomeSection>
  );
}
