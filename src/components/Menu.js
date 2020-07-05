import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
const Container = styled.ul`
  display: block;
  padding: 0;
  margin: 0 auto;
`;

const Element = styled.li`
  display: inline-block;
  position: relative;
  z-index: 100;
  a {
    text-decoration: none;
    display: block;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -moz-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    -ms-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    color: ${(props) => (props.className === "active" ? "black" : "white")};
    background: ${(props) => (props.className === "active" ? "white" : "")};
    &.active,
    &:hover {
      color: black;
      background: white;
    }
    font-size: 3rem;
    padding: 0.5rem 8rem;
    @media (max-width: 1920px) {
      // MacBook 13"
      padding: 0.3rem 3rem;
      font-size: 2rem;
    }
    @media (max-width: 1382px) {
      // iPadPro Horizontal
      font-size: 1rem;
    }
    @media (max-width: 1024px) {
      //iPadPro Vertical / iPad Horizontal
      font-size: 1rem;
    }
    @media (max-width: 900px) {
      //iPhoneX horizontal
    }
    @media (max-width: 768px) {
      //iPad Vertical iPhone6/7/8 Horizontal
      font-size: .8rem;
      font-weight: 200;
      padding: 0.2rem 1.5rem;
    }
    @media (max-width: 480px) {
      //iPhoneX/iPhone6/7/8 vertical
    }
    @media (max-width: 320px) {
    }
  }
`;

const Menu = ({ items }) => (
  <Wrapper>
    <Container>
      {items.map((item, index) => (
        <Element key={index}>
          <NavLink to={item.path} activeClassName="active" exact>
            {item.text}
          </NavLink>
        </Element>
      ))}
    </Container>
  </Wrapper>
);

export default Menu;
