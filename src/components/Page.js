import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { menu } from "../data/data.json";
import { useHistory } from "react-router-dom";

const PageWrapper = styled.div`
  color: white;
  background-color: black;
  font-family: "Raleway", sans-serif;
`;

const Header = styled.div`
  padding-top: 5.25rem;
  background-color: black;
  height: ${(props) =>
    props.alternativeMenu ? "36rem" : "31.4rem"}; //iMac 27"
  position: relative;
  @media (max-width: 1920px) {
    // MacBook 13"
    padding-top: 2.5rem;
    height: 25.5rem;
  }
  @media (max-width: 1382px) {
    // iPadPro Horizontal
    height: ${(props) => (props.alternativeMenu ? "22rem" : "18rem")};
  }
  @media (max-width: 1024px) {
    //iPadPro Vertical / iPad Horizontal
    height: 18rem;
  }
  @media (max-width: 900px) {
    //iPhoneX horizontal
    height: 13rem;
  }
  @media (max-width: 768px) {
    //iPad Vertical iPhone6/7/8 Horizontal
    height: ${(props) => (props.alternativeMenu ? "15rem" : "10.5rem")};
  }
  @media (max-width: 480px) {
    //iPhoneX/iPhone6/7/8 vertical
    padding-top: 1.5rem;
    height: 7.5rem;
  }
  @media (max-width: 320px) {
    height: 6.5rem;
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
  padding: 0.5rem 0;
  content: url("./araotz/araotz.png");
  margin: 0 auto;
  width: 85%;
  height: auto;

`;

const Container = styled.div`
  width: 100%;
  float: left;
  margin: 0 auto;
  background-color: white;
`;


const Page = ({ children, alternativeMenu, onBackToHome  = () => {}}) => {
  const history = useHistory();

  const redirectToHome = () => {
    onBackToHome();
    history.push("/");
  };
  return (
    <PageWrapper>
      <Header alternativeMenu={alternativeMenu}>
        <Logo onClick={redirectToHome}>
          <LogoTitle />
        </Logo>
        {alternativeMenu ? alternativeMenu : <Menu items={menu} />}
      </Header>
      <Container>{children}</Container>
    </PageWrapper>
  );
};

export default Page;
