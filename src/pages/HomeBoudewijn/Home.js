import React, { useEffect, useState } from 'react';
import { articleData } from './data.js';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {
    HeroBanner,
    SearchBar,
    Container,
    HeroText,
    Articles,
    ArticlesContainer,
    Filters,
    FilterTitle,
    FilterCategory,
    FilterItem,
} from './elements';

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

const HomeB = () => {
    const [isSmall, setSmall] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth < 900) setSmall(true)
            else setSmall(false)
        }
        resizeHandler()
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    })
    return (
        <Container>
            <HeroBanner>
                <HeroText>
                    Want to read<br /> Our best news articles?
                    <span><br />Find them now!</span>
                </HeroText>

                <SearchBar>
                    <form action="">
                        <input type="text" id="search" name="search" placeholder="Search..." />
                        {/* <label htmlFor="search">Search articles</label> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </form>
                </SearchBar>
            </HeroBanner>

            <ArticlesContainer
                variants={container}
                initial="hidden"
                animate="show"
            >

                {/* Filters */}
                {!isSmall && (
                    <Filters>
                        <FilterTitle>
                            Filters
                        </FilterTitle>

                        {/* Filter Category */}
                        <FilterCategory>
                            <h4>Category</h4>

                            <FilterItem>
                                <input type="radio" />
                                <span>General</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>Coffee</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>Others</span>
                            </FilterItem>
                        </FilterCategory>

                        {/* Filter date */}
                        <FilterCategory>
                            <h4>Date</h4>

                            <FilterItem>
                                <input type="radio" />
                                <span>Today</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>Newest</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>Oldest</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>Others</span>
                            </FilterItem>
                        </FilterCategory>

                        {/* Filter author */}
                        <FilterCategory>
                            <h4>Author</h4>

                            <FilterItem>
                                <input type="radio" />
                                <span>Beyco</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>External</span>
                            </FilterItem>
                            <FilterItem>
                                <input type="radio" />
                                <span>Others</span>
                            </FilterItem>
                        </FilterCategory>
                    </Filters>
                )}

                <Articles>
                    {articleData.map((data, i) => {
                        if (i === 0) {
                            if (!isSmall) {
                                return (
                                    <article className="recent_article" key={data.id}>
                                        <header>
                                            <span>{data.category}</span>
                                            <h2>{data.title}</h2>
                                        </header>
                                    </article>
                                )
                            } else {
                                return (
                                    <motion.article
                                        className="article"
                                        key={data.id}
                                        variants={item}
                                    >
                                        <div className="article_img">
                                        </div>

                                        <div className="article_content">
                                            <header>
                                                <span>{data.category}</span>
                                                <h2>{data.title}</h2>
                                            </header>

                                            <hr />

                                            <p>{data.body}</p>

                                            <button className="btn full">Read more</button>
                                        </div>
                                    </motion.article>
                                )
                            }
                        } else {
                            return (
                                <motion.article
                                    className="article"
                                    key={data.id}
                                    variants={item}
                                >

                                    <div className="article_img">
                                    </div>

                                    <div className="article_content">
                                        <header>
                                            <span>{data.category}</span>
                                            <h2>{data.title}</h2>
                                        </header>

                                        <hr />

                                        <p>{data.body}</p>

                                        <button className="btn full">Read more</button>
                                    </div>
                                </motion.article>
                            )
                        }
                    })}
                </Articles>
            </ArticlesContainer>

        </Container>
    )
}

export default HomeB