import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 0.2rem;
  padding-top: 2rem;
  height: 100vh;
  background-color: black;
  @media (min-width: 1920px) {
    padding-top: 12rem;
  }
`;

const MakingOf = () => {
  return (
    <Wrapper>
      Making of
    </Wrapper>
  );
};
export default MakingOf;
