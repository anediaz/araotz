import React from "react";

import Gallery from 'react-ikusi';
import styled from "styled-components";
import CloseCircleIcon from 'mdi-react/CloseCircleIcon';



const OneFamilyContainer = styled.div`
  height: 100%;
`;

const GalleryContainer = styled.div`
  height : calc(100% - 5rem);
`;

const BottomFixedContainer= styled.div`
  height : calc (5rem + .!rem);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MiniaturesContainer = styled.div`
  height: 100%;
  max-width: 90%;
  background-color: white;
  display: flex;
  padding: .4rem;
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
  top: -15px;
  left: -15px;
  z-index: 5000;
`;

const MiniFamilyImage = styled.img`
  height: 5rem;
  width: auto;
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


const Item = styled.div`
  text-align: center;
  margin: 0 .2rem;
  position: relative;
  &:hover{
    cursor: pointer;
    ${Tooltip} {
      visibility: visible;
      opacity: 1;
    }
  }
`;



const OneFamily = ({currentFamily, allFamilies, onClose, onFamilyClick }) => {
  const configurations = [
    { minWidth: 480, cols: 4, margin: 1 },
    { maxWidth: 479, cols: 3, margin: 1 }
  ];

  const getMiniFamily = (family,index) =>{
    return <Item key={index} onClick={() => onFamilyClick(index)}>
      <MiniFamilyImage src={family}/>
      <Tooltip>aa</Tooltip>
    </Item>
  }

  const displayMiniFamilies = () => {
    const {index : indexToSkip} = currentFamily;
    const miniFamilies = allFamilies.map((f,index) => getMiniFamily(f,index));
    const half1 = miniFamilies.slice(indexToSkip+1, miniFamilies.length);
    const half2 = miniFamilies.slice(0,indexToSkip);
    return half1.concat(half2);
  }

  const closeButtonStyle = {
    color : 'black'
  }

  return(
  <OneFamilyContainer>
    <GalleryContainer>
      <Gallery photos={currentFamily.photos} configurations={configurations} />
    </GalleryContainer>
    <BottomFixedContainer>
      <MiniaturesContainer >
        <ButtonContainer>
          <CloseCircleIcon size={30} onClick={onClose} style={closeButtonStyle}/>
        </ButtonContainer>
        <Carousel>
          {displayMiniFamilies()}
        </Carousel>
      </MiniaturesContainer>
    </BottomFixedContainer>
  </OneFamilyContainer>)
}

export default OneFamily;

