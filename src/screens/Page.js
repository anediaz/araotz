import React, { useState } from "react";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import Menu from "../components/Menu";
import { home, menu } from "../data/data.json";
import Families from "../components/Families";
import Info from "./Info";

const PageWrapper = styled.div`
  color: white;
  background-color: black;
  font-family: "Raleway", sans-serif;
`;

const Header = styled.div`
  padding-top: 1.25rem;
  background-color: black;
  height: 13.4rem;
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

const configurations = [
  { minWidth: 480, cols: 7, margin: 1 },
  { maxWidth: 479, cols: 4, margin: 1 },
];

const Page = () => {
  const [photosets, setPhotosets] = useState({});

  const setPhotos = (photosetId, photos) => {
    setPhotosets({ ...photosets, [photosetId]: photos });
  };

  return (
    <HashRouter>
      <PageWrapper>
        <Header>
          <Logo>
            <LogoTitle />
          </Logo>
          <Menu items={menu} />
        </Header>
        <Container>
          <Route
            exact
            path={menu[0].path}
            render={() => (
              <Families
                families={home.families}
                photos={photosets["families"]}
                setPhotos={p=>setPhotos("families", p)}
                configurations={configurations}
              />
            )}
          />
          <Route path={menu[1].path} component={Info} />
        </Container>
      </PageWrapper>
    </HashRouter>
  );
};

export default Page;
