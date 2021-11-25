import React from 'react';
import {
    Article,
    ArticleContainer
} from './elements';
import articleImage from "./article_image.png";

import { articleData } from './data.js';

const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: .3
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0
    }
}

const Articles = () => {



    return (
        <>
            <ArticleContainer variants={container} initial="hidden" animate="show">
                {articleData.map(data => (
                    <Article key={data.id} variants={item}>
                        <a href={`/article/${data.id}`} className="articleContainer">
                            <div className="imageContainer">
                                <img src={articleImage} />
                            </div>
                            <div className="contentContainer">
                                <h2>{data.title}</h2>
                                <h3>{data.subtitle}</h3>
                                <p>{data.body}</p>
                                <a href={`/article/${data.id}`}>Read more · {data.read_time}</a>
                            </div>
                        </a>
                    </Article>
                ))}
            </ArticleContainer>
        </>
    )
}

export default Articles;