import styled from 'styled-components';
import ArticleImgBanner from './assets/ArticleInnerBanner.png';

export const Banner = styled.section`
  background-image: url(${ArticleImgBanner});
  background-size: cover;
  background-position: center center;
  height: 25vh;
`

export const ArticleWrapper = styled.section`
  width: 50vw;
  margin: 0 auto;
`

export const ArticleTitle = styled.h2`
  background: #EBF2F1;
  margin-top: -35px;
  padding: 1rem 1.75rem;
  font-size: 2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`

export const ArticleBody = styled.div`
  padding: 0 1.75rem;

  p {
    margin-top: 1rem;
    font-family: "Assistant", sans-serif;
    font-size: 1.1rem;
    line-height: 1.688rem;
  }
`

export const ArticleSubTitle = styled.h3`
  color: #9E9EA7;
  font-weight: 400;
  font-size: 1.2rem;
`

export const ArticleQuickLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Kumbh Sans", sans-serif;
  border-bottom: 1px solid #EBF2F1;
  margin-top: .3rem;

  div:nth-child(1) {
    font-size: 14px;
    color: #9E9EA7;
    margin-top: .5rem;
    margin-bottom: .5rem;

    span {
      color: #397F6E;
    }
  }

  div:nth-child(2) {
    margin-left: auto;

    img {
      width: 24px;
      height: auto;
      margin-right: 5px;
    }
  }
`