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
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0.5rem 3rem;
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
    @media (max-width: 768px) {
      font-size: 0.6rem;
      font-weight: 200;
      padding: 0.5rem 0.8rem;
    }
    @media (min-width: 1920px) {
      font-size: 3rem;
      padding: 0.5rem 8rem;
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
