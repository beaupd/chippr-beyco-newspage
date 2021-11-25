import styled from 'styled-components';
import beansBackground from "./beans.jpeg";

export const Banner = styled.section`
  background-color: #EBF2F1;
  background-image: url(${beansBackground});
  background-position: bottom;
  background-attachment: fixed;
  background-size: cover;
  height: 40vh;
  padding: 3rem 4rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* &:after {
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: absolute;
  } */

`
export const Searchbar = styled.div`
  position: absolute;
  z-index: 1000;
  top: calc(40vh + 80px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  @media (max-width: 1200px) {
    width: 70%;
  }
  height: 60px;
  border-radius: 3.2rem;
  

  .container {
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 3.2rem;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.20) 0px 4px 12px -2px, rgba(0, 0, 0, 0.25) 0px 2px 7px -3px;
  }

  form {
    width: calc(100% - 100px);
    height: 100%;
    margin: 0 50px;
    position: relative;
    z-index: 100;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    position: relative;
    background: transparent;
    font-size: 18px;
  }

  input:focus,
  input:active {
    outline: none;
  }

  .icon-tabler-search {
    position: absolute;
    left:0;
    transform: translate(-125%, 20%);
    top: 0;
    width: 30px;
  }

  label {
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    width: 100%;
    height: min-content;
    transition: .3s;
    display: flex;
    z-index: -1;
    justify-content: left;
    opacity: .5;
    transition: .3s;
    font-size: 18px;
  }

  input:active ~ label,
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    bottom: 80%;
    font-size: 14px;
    color: #397F6E;
  }

  .icon-tabler-search {
    transition: .3s;
  }

  input:active ~ .icon-tabler-search,
  input:focus ~ .icon-tabler-search,
  input:not(:placeholder-shown) ~ .icon-tabler-search {
    stroke: #397F6E;
  }

  button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    margin-right: 5px;
  }

  button svg {
    stroke: black;
    transform: rotate(0deg);
    transition: .3s;
    transition-delay: .3s;
  }

  button.open svg {
    transform: rotate(180deg);
  }

  .filters_container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #F6F7F9;
    border-radius: 3.2rem;
    z-index: -2;
    transition: .3s;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display:flex;
    align-items: end;
  }
  
  .filters_container.active {
    height: 300%;
    border-radius: 45px 45px 5px 5px;
  }

  .filters_container .bottom-border {
    border-radius:  3.2rem;
    background: #F6F7F9;
    width: 100%;
    height: 60px;
    transform: translate(0,0);
    transition: .3s;
    box-shadow: rgba(50, 50, 93, 0) 0px 16px 12px -2px;
  }

  .filters_container.active .bottom-border {
    transform: translate(0,50%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 16px 12px -2px;
  }
`