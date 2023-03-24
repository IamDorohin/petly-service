import styled from 'styled-components';

export const NoticesPageContainer = styled.section`

background-color: #FDF7F2;


`
export const Container = styled.div`
padding: 42px 20px 100px 20px;
margin-left: auto;
margin-right: auto;


@media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px

}

@media screen and (min-width: 768px) {
    padding: 88px 32px 100px 32px;
    width: 768px;
}

@media screen and (min-width: 1280px) {
    padding: 70px 16px 200px 16px;
    width: 1280px
}
`

export const NoticesPageNavBox = styled.div`

     margin-bottom: 30px;

    @media screen and (min-width: 768px) {
         margin-bottom: 70px;
        display: flex;
    align-items: flex-start;
    justify-content: space-between;
    }

    @media screen and (min-width: 1280px) {
        display: flex;
    align-items: center;
    justify-content: space-between;
        margin-bottom: 60px;
    }
`