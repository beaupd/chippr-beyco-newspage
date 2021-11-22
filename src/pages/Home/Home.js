import React from 'react';

// Import articles
import Articles from '../../components/Articles/Articles';

// Import elements
import {
    Banner,
    BannerTitle,
} from './elements';

const Home = () => {
    return (
        <>
            <Banner>
                <BannerTitle>
                    Want to read Our best new articles?
                </BannerTitle>
            </Banner>

            <Articles />
        </>
    )
}

export default Home;