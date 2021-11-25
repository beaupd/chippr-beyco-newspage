import styled from 'styled-components';
import { motion } from "framer-motion";
import beansBG from "./beansBG.jpeg";

export const Article = styled(motion.div)`
    margin: 10px 0;
    height: 200px;
    width: 60%;
    @media (max-width: 1200px) {
        width: 80%;
    }
    border-radius: 1.2rem;
    overflow: hidden;
    background: #fff;
    box-shadow: rgba(50, 50, 93, 0.20) 0px 4px 12px -2px, rgba(0, 0, 0, 0.25) 0px 2px 7px -3px;

    .articleContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: start;
        text-decoration: none;
        color: black;
        position: relative;
    }

    .articleContainer:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        transition: .3s;
        z-index: 20;
        box-shadow: none;
    }

    .articleContainer:after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border-top: solid black 4px;
        border-right: solid black 4px;
        border-top-right-radius: 5px;
        border-top-left-radius: 2px;
        border-bottom-right-radius: 2px;
        transition: .3s;
        right: -20px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        font-size: 4rem;
    }

    .articleContainer:hover:after {
        width: 50px;
        height: 50px;
        right: 30px;
    }

    .articleContainer:hover:before {
        background: rgba(255,255,255,.4);
        box-shadow: inset rgba(0, 0, 0, 0.25) 0px 0px 20px;
    }

    .imageContainer {
        height: 100%;
        width: auto;
    }

    .imageContainer img {
        height: 100%;
    }

    .articleContainer:hover .contentContainer {
        transform: scale(0.93);
    }

    .contentContainer {
        margin-left: 15px;
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        height: 100%;
        padding: 15px 0;
        transform: scale(1);
        transform-origin: left center;
        transition: .3s;
    }

    .contentContainer h2 {
        font-size: 2.5rem;
        background: url(${beansBG});
        /* background: linear-gradient(to left, #3C2922 0%, #8B5D46 100%); */
        background-attachment: fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .contentContainer h3 {
        color: rgba(0,0,0,0.6);
        padding-left: 5px;
    }

    .contentContainer p {
        margin-bottom: auto;
        flex-grow: 1;
        text-overflow: ellipsis;
        display: inline-block;
        overflow: hidden;
        white-space: pre-line;
        width: 40vw;
        @media (max-width: 1200px) {
            width: 55vw;
        }
        height: 100%;
        
        padding-left: 5px;
    }

    .contentContainer a {
        padding-left: 8px;
        color: #397F6E;

    }
`

export const ArticleContainer = styled(motion.div)`
    margin-top: 20px;
    padding: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`