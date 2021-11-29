import styled from 'styled-components';
import articleBackground from "./ArticleInnerBanner.png";
import { motion } from "framer-motion";

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
    font-size: 1.6rem;
    text-align: center;
    font-family: Assistant;
    font-weight:500;
    flex-grow: 1;
    margin-bottom: auto;
    transform: translateY(20%);

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
    margin-bottom: auto;
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

export const ArticlesContainer = styled(motion.section)`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    @media(min-width: 1600px) {
        grid-template-columns: 25% 50% 25%; 
    }
    padding: 75px 0;

`

export const Filters = styled.div`
    border-radius: 5px;
    background-color: #fff;
    position: sticky;
    align-self: flex-start;
    top: 100px;
    left: 0;
    grid-column: 1;
    padding: 1rem 1rem;
    margin: 0 2rem;
`

export const FilterTitle = styled.h3`
    font-family: "Assisant", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    border-bottom: 1px solid #EBF2F1;
    padding-bottom: .5rem;
`

export const FilterCategory = styled.ul`
    font-family: "Assistant", sans-serif;
    margin-top: 1rem;
    list-style: none;

    h4 {
        font-weight: 400;
        font-size: 1rem;
        color: #397F6E;
    }
`

export const FilterItem = styled.li`
    -webkit-appearance: none;
    border: .1em solid #dddee0;
    border-radius: 50%;
    cursor: pointer;
`

export const Articles = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-column: 2;

    grid-row-gap: 20px;

    @media (min-width: 900px) {
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
    }

    .recent_article {
        
        grid-column: 1 / 4;
        background-image: url(${articleBackground});
        background-size: cover;
        background-position: center center;
        overflow: hidden;
        
        display:flex;
        justify-content: start;
        align-items: flex-end;
        
        height: 150px;
        border-radius: 10px;
        position: relative;



        header {
            color: white;
            z-index: 100;
            padding: 20px 25px;

            span {
                background: #397F6E;
                padding: 4px;
                border-radius: 3px;
            }

            h2 {
                margin-top: 5px;
            }
        }
        
    }

    .recent_article:after {
            content: "";
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            box-shadow: inset 0 -70px 50px 0px rgba(0,0,0,0.7);
        }

    .article {
        grid-column: 2;
        border-radius: 7px;
        overflow: hidden;
        background: white;
        
        @media (max-width: 900px){
            display: grid; 
            grid-template-columns: 25% auto;
        }

        @media (min-width: 900px) {
            grid-column: auto;
        }

        .article_img {
            @media (max-width: 900px){
                height: 100%;
                grid-column: 1;
                background-position: center;
                background-size: cover;
            }
            @media (min-width: 900px) {
                height: 90px;
                max-width: 100%;
            }
            
            background: url(${articleBackground});
        }

        .article_content {
            padding: 10px 25px;
            @media (min-width: 900px){
                padding: 10px 15px;
            }
            
            font-family: Assistant;

            header span {
                color: #397F6E;
                font-weight: bolder;
                font-size: 14px;
            }

            header h2 {
                font-weight: 400;
                font-size: 1.5rem;
            }

            p {
                height: 130px;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 5px;
                word-wrap: break-word;
            }

            button {
                padding: 7px 15px;
            }

            hr {
                height: 2px;
                background: #f6f7f9;
                border: none;
                margin: 5px 0;
            }
        }
        
    }

`
