import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Gallery from 'react-ikusi';
import FlickrAPI from "../../services/FlickrAPI";
import { SIZE_LABELS, EXTRAS } from "../../constants/constants";
import OneFamily from './OneFamily';
const Wrapper  = styled.div`
  margin-top: .2rem;
  height: 100%;
  color: white;
  position: relative;
`;

const FamiliesContainer = styled.div`
height: 100%
`;


const { small320: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;
const configurations = [
  { minWidth: 480, cols: 4, margin: 1 },
  { maxWidth: 479, cols: 3, margin: 1 }
];

const Families = ({
  familiesData = [],
  photos = [],
  updatePhotos,
}) => {
  const [selectedFamily, setSelectedFamily] = useState(null);
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(familiesData.map(f=>f.coverId), [SIZE_LABELS.LARGE, SIZE_LABELS.SMALL, SIZE_LABELS.SMALL320]).then(
        (result) => updatePhotos(transformForAllFamilies(result)),
        (error) => console.log("error =" + error)
      );
    }
  });

const openFamily = async index => {
  debugger;
  const photos = await FlickrAPI.getPhotoset(familiesData[index].photosetId, urlsBySize);
  setSelectedFamily({index, family: familiesData[index], photos: transformForGallery(photos)});
  window.scrollTo(0, 0);
}

const closeFamily = () => {
  setSelectedFamily(null);
  window.scrollTo(0, 0);
}

const transformForAllFamilies = (result) => {
  const transform = (sizes, index) => {
    const big = sizes.find(s=>s.label ===SIZE_LABELS.LARGE)
    const miniPicture = sizes.find(s=>s.label ===SIZE_LABELS.SMALL)
    const galleryPicture = sizes.find(s=>s.label ===SIZE_LABELS.SMALL320)
    const gallery = {src: galleryPicture.source, width: galleryPicture.width, height: galleryPicture.height, bigSrc: big.source,  name: familiesData[index].name, id: index} ;
    return {miniPicture: miniPicture.source, gallery: gallery};
  }
  return result.map(({sizes}, index) => transform(sizes, index));
}
const transformForGallery = result =>
  result.map(r=>({
      src: r[def.url],
      width: r[def.width],
      height: r[def.height],
      bigSrc: r[big.url]
  }));

return (<Wrapper>
  {photos && photos.length ?
    !selectedFamily ?
      (<FamiliesContainer className="familiesContainer">
        <Gallery className="gallery" photos={photos.map(p=>p.gallery)} configurations={configurations} onClickPhoto={openFamily} withLightbox={false}/>
      </FamiliesContainer>) :
      <OneFamily currentFamily={selectedFamily} allFamilies={photos.map(({miniPicture, name})=>({miniPicture, name}))} onClose={closeFamily} onFamilyClick={openFamily}/>
      : ''}
    </Wrapper>)
};


export default Families;
