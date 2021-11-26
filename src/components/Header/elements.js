import styled from 'styled-components';

export const Navigation = styled.header`
  height: 5rem;
  padding: 1rem;
`

export const NavMenu = styled.nav`
  display:  flex;
  justify-content: space-between;
  align-items: center;
`

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;

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