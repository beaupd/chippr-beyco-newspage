import React from 'react';
import { useState } from "react";

// Import articles
import Articles from '../../components/Articles/Articles';

// Import elements
import {
    Banner,
    Searchbar
} from './elements';

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Banner>
                {/* <BannerTitle>
                    Want to read Our best new articles?
                </BannerTitle> */}
            </Banner>

            <Searchbar>
                <div className="container">
                    <form action="">
                        <input type="text" id="search" name="search" placeholder=" " />
                        <label htmlFor="search">Search articles</label>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>

                    </form>

                    <button onClick={() => setOpen(!isOpen)} className={isOpen ? "open" : ""}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-down" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="18" y1="10" x2="12" y2="16" />
                            <line x1="6" y1="10" x2="12" y2="16" />
                        </svg>
                    </button>
                </div>
                <div className={`filters_container ${isOpen ? "active" : ""}`}>

                    <div className="bottom-border"></div>
                </div>
            </Searchbar>
            

            <Articles />
        </>
    )
}

export default Home;