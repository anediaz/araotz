import React, {useEffect, useState} from "react";

import styled from "styled-components";

import Icon from '@mdi/react';
import { mdiCloseCircle, mdiChevronLeft, mdiChevronRight } from '@mdi/js';



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

const CloseIconStyled = styled(Icon)`
  path{
    stroke: black;
  }
  position: absolute;
  top: -11px;
  left: -13px;
  z-index: 5000;
  height: 30px;
  &:hover{
    cursor: pointer;
  }
`;

const ArrowIconStyled = styled(Icon)`
  position: absolute;
  top: 15px;
  left: ${(props) => (props.position === "left" && "-45px")};
  right: ${(props) => (props.position === "right" && "-45px")};
  z-index: 5000;
  height: 100%;
  &:hover{
    cursor: pointer;
  }
`;


const MiniFamilies = ({onClose, currentFamily, allFamilies, onFamilyClick}) => {
  const [carouselPhotos, setCarouselPhotos] = useState([]);

  useEffect(() => {
    const {index : indexToSkip} = currentFamily;
    const miniFamilies = allFamilies.map((family,index) => ({family, index}));
    const half1 = miniFamilies.slice(indexToSkip+1, miniFamilies.length);
    const half2 = miniFamilies.slice(0,indexToSkip);
    console.log("Carousel Photos ==> " + JSON.stringify([...half1, ...half2]));
    setCarouselPhotos([...half1, ...half2]);
  }, [currentFamily, allFamilies]);

  const displayMiniFamilies = () => {
    const newCarouselPhotos = [...carouselPhotos]
    const limitedPhotos = newCarouselPhotos.length ? newCarouselPhotos.splice(0,10) : [];
    return limitedPhotos.map(({family, index}) => getMiniFamily(family,index))
  }

  const getMiniFamily = (family,index) => {
    return <Item key={index} onClick={() => onFamilyClick(index)}>
      <MiniFamilyImage src={family.miniPicture}/>
      <Tooltip>{family.name}</Tooltip>
    </Item>
  }

  const slidePhotos = (direction) => {
    if (carouselPhotos.length && direction === 'right'){
      const [first, ...rest] = carouselPhotos
      setCarouselPhotos([...rest, first]);
    }
    else if (carouselPhotos.length && direction === 'left'){
      const newCarouselPhotos = [...carouselPhotos]
      const last = newCarouselPhotos.pop();
      setCarouselPhotos([last, ...newCarouselPhotos]);
    }
  }

  return (
    <Wrapper>
      <MiniaturesContainer >
        <CloseIconStyled path={mdiCloseCircle} color="white" size={1} onClick={onClose}/>
        <ArrowIconStyled path={mdiChevronLeft} color="white" size={2} position="left" onClick={() => slidePhotos('left')}/>
        <Carousel>
          {displayMiniFamilies()}
        </Carousel>
        <ArrowIconStyled path={mdiChevronRight} color="white" size={2} position="right" onClick={() => slidePhotos('right')}/>
      </MiniaturesContainer>
    </Wrapper>)
    }

    export default MiniFamilies;
