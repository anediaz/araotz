import React, { useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiCloseCircle, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import useWindowDimensions from '../hooks/useWindowDimensions'
import './mini-families.css';

const BLOCK = 'mini-families';

const isMobileDevice = () => navigator.userAgent.indexOf("Mobile") !== -1 &&
    navigator.userAgent.indexOf("iPad") === -1


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
    return <div className={`${BLOCK}__item`} key={index} onClick={() => onFamilyClick(index)}>
      <img alt={family.name} className={`${BLOCK}__image`} src={family.miniPicture}/>
      <div className={`${BLOCK}__tooltip`}>{family.name}</div>
    </div>
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
    <div className={BLOCK}>
      {isMobileDevice() ? (
        <div>
          <Icon
            path={mdiCloseCircle}
            color="white"
            size={1.2}
            onClick={onClose}
            className={`${BLOCK}__close-icon`}
          />
        </div>
      ) : (
        <div className={`${BLOCK}__container`}>
          <Icon
            path={mdiCloseCircle}
            color="white"
            size={1}
            onClick={onClose}
            className={`${BLOCK}__close-icon ${BLOCK}__close-icon--mini`}
          />
          <Icon
            path={mdiChevronLeft}
            color="white"
            size={2}
            onClick={() => slidePhotos("left")}
            className={`${BLOCK}__arrow--left` }
          />
          <div className={`${BLOCK}__carousel`}>{displayMiniFamilies()}</div>
          <Icon
            path={mdiChevronRight}
            color="white"
            size={2}
            position="right"
            onClick={() => slidePhotos("right")}
            className={`${BLOCK}__arrow--right` }
          />
        </div>
      )}
    </div>
  );
    }

    export default MiniFamilies;
