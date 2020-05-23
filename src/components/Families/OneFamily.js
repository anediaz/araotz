import React from "react";

import Gallery from 'react-ikusi';
import styled from "styled-components";
import CloseCircleIcon from 'mdi-react/CloseCircleIcon';
import SkipNextIcon from 'mdi-react/SkipNextIcon';



const OneFamilyContainer = styled.div`
  height: 100%;
`;

const GalleryContainer = styled.div`
  height : calc(100% - 5rem);
`;

const MiniaturesContainer = styled.div`
  height : 5rem;
  width: calc(100% - .8rem);
  background-color: green;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  border: .4rem solid;
`;

const Carousel = styled.div`
  width: 100%
  height: 100%;
  display: flex;
`;

const ButtonContainer= styled.div`
  height: 100%;
  line-height: 100%;
  vertical-align: middle;
`;

const MiniFamilyImage = styled.img`
  height: 5rem;
  width: auto;
`;

const Item = styled.div`
  text-align: center;
  margin: 0 .2rem;
  &:hover{
    cursor: pointer;
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
    </Item>
  }

  const displayMiniFamilies = () => {
    const {index : indexToSkip} = currentFamily;
    const miniFamilies = allFamilies.map((f,index) => getMiniFamily(f,index));
    const half1 = miniFamilies.slice(indexToSkip+1, miniFamilies.length);
    const half2 = miniFamilies.slice(0,indexToSkip);
    return half1.concat(half2);
  }

  return(
  <OneFamilyContainer>
          <GalleryContainer>
            <Gallery photos={currentFamily.photos} configurations={configurations} />
          </GalleryContainer>
          <MiniaturesContainer>
            <ButtonContainer>
              <CloseCircleIcon size={36} onClick={onClose}/>
            </ButtonContainer>
            <Carousel>
              {displayMiniFamilies()}
            </Carousel>
            <SkipNextIcon size={56}/>
          </MiniaturesContainer>
      </OneFamilyContainer>)
}

export default OneFamily;

