import React from "react";
import styled from "styled-components";

const propTypes = {
  //language: React.PropTypes.string.isRequired,
  //handleLanguageClick: React.PropTypes.func.isRequired
};
const defaultProps = {
  language: "EU",
};

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    width: 80%;
    height: 1.5rem;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1920px) {
    width: 60%;
    font-size: 2.5rem;
    height: 4.4rem;
    line-height: 4.4rem;
  }
`;

const Content = styled.ul`
  margin: 0;
  padding: 0;
  text-align: right;
`;

const Element = styled.li`
  &:hover {
    cursor: pointer;
  }
  :not(:first-child):before {
    content: " | ";
  }
  list-style-type: none;
  display: inline;
  opacity: ${(props) => (props.active ? "1" : "0.8")};
  font-weight: ${(props) => (props.active ? "600" : "unset")};
`;

const LanguageSelector = ({ language, handleLanguageClick }) => {
  return (
    <Wrapper>
      <Content>
        <Element
          active={"EU" === language}
          title="euskara"
          onClick={() => handleLanguageClick("EU")}
        >
          EU
        </Element>
        <Element
          active={"ES" === language}
          title="castellano"
          onClick={() => handleLanguageClick("ES")}
        >
          ES
        </Element>
        <Element
          active={"EN" === language}
          title="english"
          onClick={() => handleLanguageClick("EN")}
        >
          EN
        </Element>
        <Element
          active={"FR" === language}
          title="français"
          onClick={() => handleLanguageClick("FR")}
        >
          FR
        </Element>
        <Element
          active={"CA" === language}
          title="català"
          onClick={() => handleLanguageClick("CA")}
        >
          CA
        </Element>
      </Content>
    </Wrapper>
  );
};

LanguageSelector.propTypes = propTypes;
LanguageSelector.defaultProps = defaultProps;

export default LanguageSelector;
