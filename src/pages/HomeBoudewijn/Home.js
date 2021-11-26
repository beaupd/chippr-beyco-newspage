import React from 'react';
import { articleData } from './data.js';

import {
    HeroBanner,
    SearchBar,
    Container,
    HeroText,
    Articles,
    ArticlesContainer,
    Filters
} from './elements';

const HomeB = () => {
    return (
        <Container>
            <HeroBanner>
                <HeroText>
                    Want to read<br /> our best news articles?
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


            <ArticlesContainer >
                <Filters>

                </Filters>

                <Articles>
                    {articleData.map((data, i) => {
                        if (i === 0) {
                            return (
                            <div className="recent_article" key={data.id}>
                                <heading>
                                    <span>{data.category}</span>
                                    <h2>{data.id}</h2>
                                </heading>
                            </div>
                            )
                        } else {
                            return (
                            <div key={data.id}>
                                <heading>
                                    <span>{data.category}</span>
                                    <h2>{data.id}</h2>
                                </heading>
                            </div>
                            )
                        }
                        console.log(data);
                    })}
                </Articles>
            </ArticlesContainer>

        </Container>
    )
}

export default HomeB