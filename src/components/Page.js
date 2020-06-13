import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { menu } from "../data/data.json";

const PageWrapper = styled.div`
  color: white;
  background-color: black;
  font-family: "Raleway", sans-serif;
`;

const Header = styled.div`
  padding-top: 1.25rem;
  background-color: black;
  height: ${(props) => (props.alternativeMenu ? "18rem" : "13.4rem")};
  @media (max-width: 768px) {
    padding-top: 0.8rem;
    height: 7.5rem;
  }
  @media (min-width: 1920px) {
    padding-top: 10rem;
    height: 35.4rem;
  }
`;

const Logo = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const LogoTitle = styled.div`
  height: 5rem;
  padding: 0.5rem 0;
  content: url("./araotz/araotz.png");
  margin: 0 auto;
  :before {
    height: 4rem;
    width: 241px;
    padding: 0.5rem 0;
    background-image: url("./araotz/araotz.png");
    background-size: auto 4rem;
    display: inline-block;
    content: "";
    margin: 0 auto;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    height: 2.8rem;
    :before {
      height: 2.8rem;
      width: 108px;
      background-size: auto 1.8rem;
    }
  }
  @media (min-width: 1920px) {
    height: 15rem;
    :before {
      height: 15rem;
      width: 422px;
      background-size: auto 15rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  float: left;
  margin: 0 auto;
  background-color: white;
`;

const Page = ({children, alternativeMenu}) => {
  return (
      <PageWrapper>
        <Header alternativeMenu={alternativeMenu}>
          <Logo>
            <LogoTitle />
          </Logo>
          {alternativeMenu ? alternativeMenu : <Menu items={menu} /> }
        </Header>
        <Container>
          {children}
        </Container>
      </PageWrapper>
  );
};

export default Page;
