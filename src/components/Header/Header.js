import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { Link } from 'react-router-dom';

// Import elements
import {
    Navigation,
    NavMenu,
    NavItems,
    NavLink,
    NavBtns,
    Placeholder,
    MobileMenu,
    MobileToggle,
    LinkContainer
} from './elements';

const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: .2
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: "100%"
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .4,
            ease: "easeIn"
        }
    }
}

const Header = () => {
    const navRef = useRef();
    const [isSticky, setSticky] = useState(false);
    const [isMobile, setMobile] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (!menuActive) {
                if (window.pageYOffset > navRef.current.offsetHeight && !isSticky) setSticky(true)
                else if (window.pageYOffset === 0 && isSticky) setSticky(false)
            }
        }
        const resizeHandler = () => {
            if (window.innerWidth < 1000) setMobile(true)
            else setMobile(false)
        }
        resizeHandler();
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", resizeHandler);
        }
    })

    return (
        <>
            <Placeholder></Placeholder>
            {/* Header */}
            <Navigation
                ref={navRef}
                className={isSticky ? "sticky" : ""}
            >

                {/* Navigation menu desktop*/}
                {!isMobile ? (
                    <NavMenu>
                        <NavItems>

                            {/* Logo */}
                            <Link to="/">
                                <NavLink>
                                    <svg viewBox="0 0 79 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="logo">
                                        <g>
                                            <path
                                                d="M.77 8.57C.76 5.82.67 3.49.25 1.19.18.86.1.54 0 .22-.05 0 .02-.04.2-.01c.91.13 1.8.38 2.62.8.61.3.9.86.92 1.53.07 1.44-.04 2.88-.11 4.32l-.08 2.1c-.01.21-.05.42-.06.64-.02.31.02.34.29.18a7.1 7.1 0 012.5-.92c3.14-.5 6.46.62 8.18 3.42a6.87 6.87 0 01.98 4.57A6.81 6.81 0 0113.2 21a7.37 7.37 0 01-5.25 1.87 7.73 7.73 0 01-5.89-2.57 6.55 6.55 0 01-1.7-5.2c.12-1.15.28-2.3.32-3.47.03-1.16.1-2.33.08-3.07zm3.76 6.79c0 1.16.2 2.08.67 2.92.47.86 1.12 1.55 2.1 1.79 1.3.31 2.27-.25 3.01-1.24a5.66 5.66 0 00-.15-6.69c-1.14-1.4-2.95-1.5-4.22-.24a5.04 5.04 0 00-1.4 3.46zM65.95 9.2c1.16.02 2.31-.1 3.46-.22 1.8-.17 3.6-.4 5.39-.75 1.34-.27 2.68-.58 3.95-1.12.2-.09.25-.03.24.16a8.46 8.46 0 01-.44 2.47c-.29.82-1 1.05-1.77 1.13-1.32.14-2.66.26-3.99.38-.67.06-1.35.1-2.03.15-.08 0-.19-.04-.23.06-.04.08.04.14.08.2a7.16 7.16 0 011.47 4.05 7.16 7.16 0 01-1.31 4.78 6.22 6.22 0 01-4.94 2.65 6.28 6.28 0 01-5.2-2.1 7.13 7.13 0 01-1.76-5.66 6.78 6.78 0 011.87-4.2 6.33 6.33 0 015.21-1.98zm-3.58 7.17c-.02.9.28 1.9.92 2.8 1.12 1.55 2.92 1.64 4.17.22a5.24 5.24 0 00-.02-6.46c-1.18-1.33-2.9-1.29-4.01.1a5 5 0 00-1.06 3.34zM25.7 17.24h-4.55c-.25 0-.4.02-.34.36a3.15 3.15 0 002.63 2.55 5.24 5.24 0 003.53-.8c.53-.3 1.04-.65 1.53-1 .23-.17.32-.13.43.1.24.49.51.97.69 1.49.17.52.1.81-.34 1.13-.9.65-1.86 1.23-2.95 1.56a7.32 7.32 0 01-5.27-.22 6.2 6.2 0 01-3.72-4.73 8.58 8.58 0 01.57-5.26 6.02 6.02 0 014.89-3.6c1.35-.21 2.7-.11 3.96.48a6.25 6.25 0 013.28 4 12 12 0 01.54 3.65c0 .25-.08.3-.31.3H25.7zm-1.88-2.73h2.76c.27.01.32-.09.3-.33a2.92 2.92 0 00-1.18-2.07c-1.98-1.5-4.6.13-4.88 2.02-.05.38-.06.38.34.38h2.66zM44.28 9.84c-.03.37-.2.7-.33 1.04l-7.52 20.64c-.12.35-.25.49-.67.45-.77-.06-1.55-.08-2.31-.22a1.8 1.8 0 01-.67-.24c-.21-.14-.27-.34-.07-.52.94-.83 1.28-2 1.75-3.09.7-1.62 1.28-3.3 1.88-4.96.09-.22.04-.42-.03-.62a21.8 21.8 0 00-1.3-3.1c-1.34-2.7-2.81-5.34-4.32-7.95-.11-.2-.11-.3.03-.48.4-.48.81-.96 1.31-1.34.18-.13.37-.26.58-.36.56-.28.94-.14 1.21.42l3.83 7.86.13.26c.06.08.07.23.2.22.12-.01.15-.15.18-.25l.65-2.03c.68-2.13 1.36-4.27 2.02-6.41.07-.23.17-.3.4-.3.76.01 1.5 0 2.23.2.19.06.37.13.53.24.2.13.31.3.3.54zM51.62 23.33a6.76 6.76 0 01-7.04-6.52 8.3 8.3 0 01.22-2.89 6.67 6.67 0 015.72-4.99c2.52-.33 4.67.53 6.63 2.02.32.24.37.58.27.93-.18.65-.53 1.22-.83 1.81-.1.2-.21.08-.31 0-.54-.4-1.1-.77-1.68-1.1a5.88 5.88 0 00-2.7-.85 3.43 3.43 0 00-3.55 2.3 5.16 5.16 0 00.32 4.76c.7 1.2 2.1 1.83 3.48 1.65a7.87 7.87 0 003.5-1.5c.24-.15.47-.31.7-.48.1-.08.18-.09.24.05.29.58.62 1.13.81 1.76.14.47.06.77-.33 1.05a10 10 0 01-3.74 1.82c-.6.12-1.2.2-1.7.18z"
                                            />
                                        </g>
                                    </svg>
                                </NavLink>
                            </Link>

                            {/* Nav item home*/}
                            <Link to="/">
                                <NavLink>Home</NavLink>
                            </Link>

                            {/* Nav item coffees */}
                            <Link to="">
                                <NavLink>Coffee</NavLink>
                            </Link>

                            {/* Nav item for whom? */}
                            <Link to="">
                                <NavLink>For Whom?</NavLink>
                            </Link>

                            {/* Nav item contact */}
                            <Link to="">
                                <NavLink>Contact</NavLink>
                            </Link>

                            {/* Nav item FAQ */}
                            <Link to="">
                                <NavLink>FAQ</NavLink>
                            </Link>

                            {/* Nav item news */}
                            <Link to="/article">
                                <NavLink>News Article (TEST)</NavLink>
                            </Link>
                        </NavItems>

                        {/* Nav btns */}
                        <NavBtns>
                            <button className="btn small">Log in</button>
                            <button className="btn full small">Register</button>
                        </NavBtns>
                    </NavMenu>
                ) : (
                    <NavMenu>
                        <NavItems>

                            {/* Logo */}
                            <Link to="/">
                                <NavLink>
                                    <svg viewBox="0 0 79 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="logo">
                                        <g>
                                            <path
                                                d="M.77 8.57C.76 5.82.67 3.49.25 1.19.18.86.1.54 0 .22-.05 0 .02-.04.2-.01c.91.13 1.8.38 2.62.8.61.3.9.86.92 1.53.07 1.44-.04 2.88-.11 4.32l-.08 2.1c-.01.21-.05.42-.06.64-.02.31.02.34.29.18a7.1 7.1 0 012.5-.92c3.14-.5 6.46.62 8.18 3.42a6.87 6.87 0 01.98 4.57A6.81 6.81 0 0113.2 21a7.37 7.37 0 01-5.25 1.87 7.73 7.73 0 01-5.89-2.57 6.55 6.55 0 01-1.7-5.2c.12-1.15.28-2.3.32-3.47.03-1.16.1-2.33.08-3.07zm3.76 6.79c0 1.16.2 2.08.67 2.92.47.86 1.12 1.55 2.1 1.79 1.3.31 2.27-.25 3.01-1.24a5.66 5.66 0 00-.15-6.69c-1.14-1.4-2.95-1.5-4.22-.24a5.04 5.04 0 00-1.4 3.46zM65.95 9.2c1.16.02 2.31-.1 3.46-.22 1.8-.17 3.6-.4 5.39-.75 1.34-.27 2.68-.58 3.95-1.12.2-.09.25-.03.24.16a8.46 8.46 0 01-.44 2.47c-.29.82-1 1.05-1.77 1.13-1.32.14-2.66.26-3.99.38-.67.06-1.35.1-2.03.15-.08 0-.19-.04-.23.06-.04.08.04.14.08.2a7.16 7.16 0 011.47 4.05 7.16 7.16 0 01-1.31 4.78 6.22 6.22 0 01-4.94 2.65 6.28 6.28 0 01-5.2-2.1 7.13 7.13 0 01-1.76-5.66 6.78 6.78 0 011.87-4.2 6.33 6.33 0 015.21-1.98zm-3.58 7.17c-.02.9.28 1.9.92 2.8 1.12 1.55 2.92 1.64 4.17.22a5.24 5.24 0 00-.02-6.46c-1.18-1.33-2.9-1.29-4.01.1a5 5 0 00-1.06 3.34zM25.7 17.24h-4.55c-.25 0-.4.02-.34.36a3.15 3.15 0 002.63 2.55 5.24 5.24 0 003.53-.8c.53-.3 1.04-.65 1.53-1 .23-.17.32-.13.43.1.24.49.51.97.69 1.49.17.52.1.81-.34 1.13-.9.65-1.86 1.23-2.95 1.56a7.32 7.32 0 01-5.27-.22 6.2 6.2 0 01-3.72-4.73 8.58 8.58 0 01.57-5.26 6.02 6.02 0 014.89-3.6c1.35-.21 2.7-.11 3.96.48a6.25 6.25 0 013.28 4 12 12 0 01.54 3.65c0 .25-.08.3-.31.3H25.7zm-1.88-2.73h2.76c.27.01.32-.09.3-.33a2.92 2.92 0 00-1.18-2.07c-1.98-1.5-4.6.13-4.88 2.02-.05.38-.06.38.34.38h2.66zM44.28 9.84c-.03.37-.2.7-.33 1.04l-7.52 20.64c-.12.35-.25.49-.67.45-.77-.06-1.55-.08-2.31-.22a1.8 1.8 0 01-.67-.24c-.21-.14-.27-.34-.07-.52.94-.83 1.28-2 1.75-3.09.7-1.62 1.28-3.3 1.88-4.96.09-.22.04-.42-.03-.62a21.8 21.8 0 00-1.3-3.1c-1.34-2.7-2.81-5.34-4.32-7.95-.11-.2-.11-.3.03-.48.4-.48.81-.96 1.31-1.34.18-.13.37-.26.58-.36.56-.28.94-.14 1.21.42l3.83 7.86.13.26c.06.08.07.23.2.22.12-.01.15-.15.18-.25l.65-2.03c.68-2.13 1.36-4.27 2.02-6.41.07-.23.17-.3.4-.3.76.01 1.5 0 2.23.2.19.06.37.13.53.24.2.13.31.3.3.54zM51.62 23.33a6.76 6.76 0 01-7.04-6.52 8.3 8.3 0 01.22-2.89 6.67 6.67 0 015.72-4.99c2.52-.33 4.67.53 6.63 2.02.32.24.37.58.27.93-.18.65-.53 1.22-.83 1.81-.1.2-.21.08-.31 0-.54-.4-1.1-.77-1.68-1.1a5.88 5.88 0 00-2.7-.85 3.43 3.43 0 00-3.55 2.3 5.16 5.16 0 00.32 4.76c.7 1.2 2.1 1.83 3.48 1.65a7.87 7.87 0 003.5-1.5c.24-.15.47-.31.7-.48.1-.08.18-.09.24.05.29.58.62 1.13.81 1.76.14.47.06.77-.33 1.05a10 10 0 01-3.74 1.82c-.6.12-1.2.2-1.7.18z"
                                            />
                                        </g>
                                    </svg>
                                </NavLink>
                            </Link>


                        </NavItems>

                        {/* Nav btns */}
                        <MobileToggle onClick={() => {setMenuActive(!menuActive);setSticky(true)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 159.6" id="menu-icon">
                                <path d="M0 143.8h224v15.8H0zM0 0h224v15.8H0zM0 71.9h224v15.8H0z">
                                </path>
                            </svg>
                        </MobileToggle>

                        <AnimatePresence>
                            {menuActive &&

                                <MobileMenu
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                when: "beforeChildren",
                                                staggerChildren: 0.2
                                            }
                                        },
                                        hidden: {
                                            opacity: 0,
                                            transition: {
                                                when: "afterChildren",
                                                delayChildren: 0.3
                                            }
                                        }

                                    }}

                                >
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" key="svg_background">
                                        <motion.circle cx="100" cy="-10" r="1" initial={{ cx: 100, cy: "-10", r: 1 }} animate={{ r: 500 }} exit={{ cx: 100, cy: "-10", r: 1 }} transition={{ duration: 1 }} fill="white" />
                                    </svg>

                                    <LinkContainer
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                    >
                                        <motion.a key="item1" variants={item} className="btn" to="/">
                                            Home
                                        </motion.a>

                                        <motion.a key="item2" variants={item} className="btn" to="/">
                                            Coffee
                                        </motion.a>

                                        <motion.a key="item3" variants={item} className="btn" to="/">
                                            For Whome?
                                        </motion.a>

                                        <motion.a key="item4" variants={item} className="btn" to="/">
                                            Contact
                                        </motion.a>

                                        <motion.a key="item5" variants={item} className="btn" to="/">
                                            FaQ
                                        </motion.a>

                                        <motion.a key="item6" variants={item} className="btn" to="/article">
                                            New article (TEST)
                                        </motion.a>
                                    </LinkContainer>

                                </MobileMenu>
                            }
                        </AnimatePresence>
                    </NavMenu>
                )}
            </Navigation>
        </>
    )
}

export default Header;