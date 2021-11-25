import React from 'react';

// Import elements
import {
    Banner,
    ArticleWrapper,
    ArticleTitle,
    ArticleBody,
    ArticleSubTitle,
    ArticleQuickLinks,
} from './elements';

// Import icons
import TwitterIcon from './assets/twitter-icon.png';
import FacebookIcon from './assets/facebook-icon.png';
import LinkedinIcon from './assets/linkedin-icon.png';
import LinkIcon from './assets/link-icon.png';

const ArticleInner = () => {
    return (
        <>
            <main>

                {/* Banner */}
                <Banner/>

                {/* Article content */}
                <ArticleWrapper>

                    {/* Article title */}
                    <ArticleTitle>
                        Beyco and DOEN Foundation; shared vision on innovation and impact
                    </ArticleTitle>

                    <ArticleBody>

                        {/* Article subtitle */}
                        <ArticleSubTitle>
                            And what we use for our trading platform
                        </ArticleSubTitle>

                        {/* Article quicklinks */}
                        <ArticleQuickLinks>
                            <div>
                                <span>Beyco</span> | Oct 5 | 4 min read
                            </div>
                            <div>
                                <img src={TwitterIcon} alt="Twitter icon"/>
                                <img src={FacebookIcon} alt="Facebook icon"/>
                                <img src={LinkedinIcon} alt="Linkedin icon"/>
                                <img src={LinkIcon} alt="Link icon"/>
                            </div>
                        </ArticleQuickLinks>

                        <p>
                            The idea to start building Beyco arose from years of experience in the coffee sector;
                            working
                            with producers, traders, roasters, and all sorts of organizations involved. In order to
                            start building the platform, we needed partners that shared our vision and trusted our
                            experience. One of these partners was the DOEN Foundation. Financed by the Dutch Charity
                            Lotteries, their mission is to kickstart innovative initiatives that aim to change the
                            system.
                            In a conversation with Maarten Derksen, Program manager at the DOEN Foundation, we discussed
                            our 20-year partnership, their belief in Beyco and the dedication to changing the coffee
                            sector for the benefit of the producers.

                            <br/><br/>

                            Maarten proudly explains that DOEN finances forerunners in different themes and areas. “We
                            look at what is happening in the market and society, and where we can make an impact. Where
                            can we contribute to a greener, more social, more creative, and beautiful society? And then
                            we do this through various programs.” DOEN looks at the bottlenecks in the market and
                            explores opportunities for innovations. They support start-ups and organizations that are
                            trying to do business in a different way, initiatives that tackle a problem from the bottom
                            up.

                            <br/><br/>
                            The conversations with DOEN and Progreso started about 20 years ago. “Of course, I wasn’t
                            working at DOEN 20 years ago, but the problems in the coffee sector; farmers who are not
                            paid enough, who have difficulty in obtaining financing, who are not well organized or don’t
                            have market access, are not new. It was already very clear 20–25 years ago and DOEN wanted
                            to contribute to solutions for these issues.”
                        </p>
                    </ArticleBody>
                </ArticleWrapper>
            </main>
        </>
    )
}

export default ArticleInner;