import {
  ImagesWrapper,
  Image,
  HomeWrapp,
  HomeTitle,
  HomeSection,
  MainContainer,
} from './HomePage.styled';
import { Footer } from 'components/Footer';
import heroDogMob from '../../img/header-hero/hero-dog-mob.png';
import heroDogTab from '../../img/header-hero/hero-dog-tab.png';
import heroDogDes from '../../img/header-hero/hero-dog-des.png';

export default function HomePage() {
  return (
    <HomeSection>
      <MainContainer>
        <HomeWrapp>
          <HomeTitle>Take good care of your small pets</HomeTitle>
          <ImagesWrapper>
            <Image
              srcSet={`${heroDogMob} 300w, ${heroDogTab} 768w, ${heroDogDes} 1280w`}
              src={heroDogDes}
              sizes="(min-width: 1280px) 590px, (min-width: 768px) 645px, 300px"
              alt="dog"
            ></Image>
          </ImagesWrapper>
        </HomeWrapp>
      </MainContainer>
      <Footer></Footer>
    </HomeSection>
  );
}
