import styled, {keyframes} from 'styled-components';
import {motion} from "framer-motion";

const fallIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`


export const Navigation = styled.header`
  height: 5rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;

  &.sticky {
    position: fixed;
    animation: ${fallIn} .3s ease;
    transition: .3s;
  }
`

export const NavMenu = styled.nav`
  display:  flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: none;
    /* width: 1rem; */
    right: 1.5rem;
    cursor: pointer;
  }

  #menu-icon {
    fill: #397F6E;
    height: 1rem;
  }
`

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 9999;

  a {
    text-decoration: none;
  }
`

export const NavLink = styled.a`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.063rem;
  color: #000;
  text-decoration: none;
  padding: 0.5rem;
  font-family: "Kumbh Sans", sans-serif;

  svg {
    width: 4.3rem;
    color: #397f6e;
  }
`

export const NavBtns = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
`

export const Placeholder = styled.div`
  height: 5rem;
`

export const MobileToggle = styled.button`
  z-index: 9999;
`

export const MobileMenu = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2000;
  left: 0;
  top: 0;

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
  }

`