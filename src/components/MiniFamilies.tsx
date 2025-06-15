import React, { useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiCloseCircle, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import useWindowDimensions from '../hooks/useWindowDimensions';
import "./MiniFamilies.css";

interface Family {
  miniPicture: string;
  name: string;
}

interface MiniFamiliesProps {
  onClose: () => void;
  currentFamily: { index: number };
  allFamilies: Family[];
  onFamilyClick: (index: number) => void;
}

const photoNb = [
  {width : 768, nb: 6}, //ipad vertical
  {width : 1024, nb: 6}, //ipadpro verticdal ipad horizontal
  {width : 1920, nb: 8} //ipadpro horizontal macbook 13"
];

const isMobileDevice = () => navigator.userAgent.indexOf("Mobile") !== -1 &&
    navigator.userAgent.indexOf("iPad") === -1;

const MiniFamilies: React.FC<MiniFamiliesProps> = ({onClose, currentFamily, allFamilies, onFamilyClick}) => {
  const [carouselPhotos, setCarouselPhotos] = useState<any[]>([]);
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

  const getMiniFamily = (family: Family, index: number) => {
    return <div className="mini-families-item" key={index} onClick={() => onFamilyClick(index)}>
      <img alt={`mini-family-${index}`} className="mini-families-image" src={family.miniPicture}/>
      <div className="mini-families-tooltip">{family.name}</div>
    </div>
  }

  const slidePhotos = (direction: string) => {
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
    <div className="mini-families-wrapper">
      {isMobileDevice() ? (
        <div>
          <span className="mini-families-close-icon" onClick={onClose}>
            <Icon
              path={mdiCloseCircle}
              color="white"
              size={1.2}
            />
          </span>
        </div>
      ) : (
        <div className="mini-families-miniatures-container">
          <span className="mini-families-close-icon-mini" onClick={onClose}>
            <Icon
              path={mdiCloseCircle}
              color="white"
              size={1}
            />
          </span>
          <span className="mini-families-arrow-icon left" onClick={() => slidePhotos("left")}> 
            <Icon
              path={mdiChevronLeft}
              color="white"
              size={2}
            />
          </span>
          <div className="mini-families-carousel">{displayMiniFamilies()}</div>
          <span className="mini-families-arrow-icon right" onClick={() => slidePhotos("right")}> 
            <Icon
              path={mdiChevronRight}
              color="white"
              size={2}
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default MiniFamilies;
