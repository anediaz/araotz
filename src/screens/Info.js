import React, { useState } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { info } from "../data/data";

const Wrapper = styled.div`
  padding-top: 2rem;
  height: 100%;
  background-color: black;
  border-top: 0.2rem solid white;
  border-bottom: 0.2rem solid white;
  @media (min-width: 1920px) {
    padding-top: 12rem;
  }
  @media (max-width: 1382px) {
    // iPadPro Horizontal
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
  }
`;

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 1rem;
  }
  @media (min-width: 1920px) {
    width: 60%;
  }
`;

const Text = styled.div`
  text-align: left;
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  p {
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  span {
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    p {
      margin-bottom: 1.1rem;
      margin-left: 0.9rem;
      margin-right: 0.9rem;
    }
  }
  @media (min-width: 1920px) {
    padding: 2rem 4rem 6rem;
    font-size: 3rem;
  }
`;

const Contact = styled.div`
  background: #808080;
  border-top: 1px solid black;
  padding: 1.5rem 2rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
  @media (min-width: 1920px) {
    padding: 6rem 6rem;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 1920px) {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    flex-direction: column;
    line-height: 1.2rem;
  }
  @media (min-width: 1920px) {
    font-size: 3rem;
    line-height: 11.5rem;
  }
`;
const A = styled.a`
  text-decoration: none;
  color: white;
`;
const Info = () => {
  const { more } = info;

  return (
    <Page>
      <Wrapper>
        <Content>
          <Text>
            {info.text.map((paragraph, key) => (
              <p key={`paragraph${key}`}>{paragraph}</p>
            ))}
          </Text>
          <Contact>
            <Title>{info.contact.title}</Title>
            <Line>
              <div>{more.name}</div>
              <div>{more.phone}</div>
            </Line>
            <Line>
              <div>
                {info.contact.mail}:{" "}
                <A href={`mailto:${more.mail}`} target="_top">
                  {more.mail}
                </A>
              </div>
              <div>
                <A href={more.site} target="_blank" rel="noopener noreferrer">
                  Flickr
                </A>
              </div>
            </Line>
          </Contact>
        </Content>
      </Wrapper>
    </Page>
  );
};
export default Info;
export { Info };
