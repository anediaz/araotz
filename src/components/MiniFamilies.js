import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from '@mdi/react';
import { mdiCloseCircle, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import useWindowDimensions from '../hooks/useWindowDimensions'


const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -3px;
  z-index: 1
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
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  padding: .3rem;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity .6s;
  left: 0;
  overflow-wrap: break-word;
  bottom: calc(9rem + 1rem); //iMac 27" height+borders  
  font-size: 1.2rem;
  @media (max-width: 1920px) {
    bottom: calc(6rem + 1rem); 
  }
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
  height: 9rem; //iMac 27"
  width: auto;
  @media (max-width: 1920px) { // MacBook 13"
    height: 6rem;
  }
  @media (max-width: 1382px) { // iPadPro Horizontal
    height: 5rem;
  }
  @media (max-width: 1024px) { //iPadPro Vertical / iPad Horizontal
    height: 5em;
  }
  @media (max-width: 900px) {
    height: 5rem;
  }
  @media (max-width: 768px) { //iPad Vertical
    height: 4rem;
  }
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
const isMobileDevice = () => navigator.userAgent.indexOf("Mobile") !== -1 &&
    navigator.userAgent.indexOf("iPad") === -1

const CloseIconStyled = styled(Icon)`
  path{
    stroke: black;
  }
  &:hover{
    cursor: pointer;
  }
`;

const CloseIconMiniStyled = styled(CloseIconStyled)`
  path {
    stroke: black;
  }
  position: absolute;
  top: -11px;
  left: -13px;
  z-index: 5000;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const ArrowIconStyled = styled(Icon)`
  position: absolute;
  top: 15px;
  left: ${(props) => props.position === "left" && "-45px"};
  right: ${(props) => props.position === "right" && "-45px"};
  z-index: 5000;
  height: calc(100% - 1.5rem) !important;
  &:hover {
    cursor: pointer;
  }
`;

const photoNb = [
  {width : 768, nb: 6}, //ipad vertical
  {width : 1024, nb: 6}, //ipadpro verticdal ipad horizontal
  {width : 1920, nb: 8} //ipadpro horizontal macbook 13"
];

const MiniFamilies = ({onClose, currentFamily, allFamilies, onFamilyClick}) => {
  const [carouselPhotos, setCarouselPhotos] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const {index : indexToSkip} = currentFamily;
    const miniFamilies = allFamilies.map((family,index) => ({family, index}));
    const half1 = miniFamilies.slice(indexToSkip+1, miniFamilies.length);
    const half2 = miniFamilies.slice(0,indexToSkip);
    setCarouselPhotos([...half1, ...half2]);
  }, [currentFamily, allFamilies]);

  const displayMiniFamilies = () => {
    const nb = photoNb.filter(p=>width <=p.width).map(p=>p.nb)[0] || 10;
    const newCarouselPhotos = [...carouselPhotos]
    const limitedPhotos = newCarouselPhotos.length
      ? newCarouselPhotos.splice(0, nb)
      : [];
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
      {isMobileDevice() ? (
        <div>
          <CloseIconStyled
            path={mdiCloseCircle}
            color="white"
            size={1.2}
            onClick={onClose}
          />
        </div>
      ) : (
        <MiniaturesContainer>
          <CloseIconMiniStyled
            path={mdiCloseCircle}
            color="white"
            size={1}
            onClick={onClose}
          />
          <ArrowIconStyled
            path={mdiChevronLeft}
            color="white"
            size={2}
            position="left"
            onClick={() => slidePhotos("left")}
          />
          <Carousel>{displayMiniFamilies()}</Carousel>
          <ArrowIconStyled
            path={mdiChevronRight}
            color="white"
            size={2}
            position="right"
            onClick={() => slidePhotos("right")}
          />
        </MiniaturesContainer>
      )}
    </Wrapper>
  );
    }

    export default MiniFamilies;
