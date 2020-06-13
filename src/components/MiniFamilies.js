import React from "react";

import styled from "styled-components";

import Icon from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';



const Wrapper = styled.div`
  margin-top: 6.8rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  @media (min-width: 1920px) {
    margin-top: 15rem;
  }
  height : calc (5rem + .!rem);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MiniaturesContainer = styled.div`
  height: 100%;
  max-width: 90%;
  background-color: white;
  display: flex;
  padding: .2rem .2rem 0 .2rem;
  position: relative;
`;

const Carousel = styled.div`
  width: 100%
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

const ButtonContainer= styled.div`
  position: absolute;
  top: -11px;
  left: -13px;
  z-index: 5000;
  height: 30px;
  &:hover{
    cursor: pointer;
  }
`;
const Tooltip = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity .6s;
  bottom: 120%;
  left: 0;
  &:after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
}`;

const MiniFamilyImage = styled.img`
  height: 5rem;
  width: auto;
`;

const Item = styled.div`
  text-align: center;
  margin: 0 .1rem;
  position: relative;
  &:hover{
    cursor: pointer;
    ${Tooltip} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const IconStyled = styled(Icon)`
  path{
    stroke: black;
  }
`;

const MiniFamilies = ({onClose, currentFamily, allFamilies, onFamilyClick}) => {

  const displayMiniFamilies = () => {
    const {index : indexToSkip} = currentFamily;
    const miniFamilies = allFamilies.map((f,index) => getMiniFamily(f,index));
    const half1 = miniFamilies.slice(indexToSkip+1, miniFamilies.length);
    const half2 = miniFamilies.slice(0,indexToSkip);
    return half1.concat(half2).splice(0, 10);
  }

  const getMiniFamily = (family,index) =>{
    return <Item key={index} onClick={() => onFamilyClick(index)}>
      <MiniFamilyImage src={family.miniPicture}/>
      <Tooltip>{family.name}</Tooltip>
    </Item>
  }

  return (
    <Wrapper>
      <MiniaturesContainer >
        <ButtonContainer>
          <IconStyled path={mdiCloseCircle} color="white" size={1} onClick={onClose}/>
        </ButtonContainer>
        <Carousel>
          {displayMiniFamilies()}
        </Carousel>
      </MiniaturesContainer>
    </Wrapper>)
    }

    export default MiniFamilies;
