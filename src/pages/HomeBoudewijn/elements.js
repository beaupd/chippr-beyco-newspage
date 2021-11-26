import styled from 'styled-components';

export const Container = styled.div`
    background: #F6F7F9;
    height: 100%;
`

export const HeroBanner = styled.div`
    height: 200px;
    background: #ebf2f1;
    @media (min-width: 500px) {
        height: 300px;
    }
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
`

export const HeroText = styled.h1`
    margin-top: 5%;
    font-size: 1.6rem;
    text-align: center;
    font-family: Assistant;
    font-weight:500;

    @media (min-width: 500px) {
        font-size: 3.2rem;
    }


    span {
        color: #397F6E;
    }
`

export const SearchBar = styled.div`
    width: 90%;
    @media (min-width: 500px) {
        width: 80%;
    }
    @media (min-width: 900px) {
        width: 45%;
    }
    height: 60px;
    border-radius: 1rem;
    overflow: hidden;
    flex-shrink: 0;
    background: #fff;
    transform: translateY(50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    input,
    form {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 28px;
        font-size: 17px;
        font-family: Assistant;
        font-weight: lighter;
    }

    input::placeholder{
        color: #919ea7;
    }

    input:focus,
    input:active {
        outline: none;
    }

    svg {
        position: absolute;
        stroke: #919ea7;
        left: 10px;
        height: 30%;
        top: 0;
        margin: auto;
        bottom: 0;
    }
`

export const ArticlesContainer = styled.section`
    width: 100%;
    display: flex;
`

export const Filters = styled.div`

`

export const Articles = styled.div`
    
`
