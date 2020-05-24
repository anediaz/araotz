import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlickrAPI from "../../services/FlickrAPI";
import { SIZE_LABELS, EXTRAS } from "../../constants/constants";
import OneFamily from './OneFamily';
const Wrapper  = styled.div`
  margin-top: .2rem;
  height: 100%;
  color: white;
  background-color: ${props => (props.light ? "white" : "black")};
  position: relative;
`;

const FamilyMainTitle = styled.div`
  position: absolute;
  top: -2rem;
  left: 1rem;
`;
const FamiliesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FamilyImage = styled.img`
  width: auto;
  height: 15rem;
  border: 1px solid white;
  margin: .5rem 1rem;
  @media (min-width: 1920px) {
    height: 65rem;
    border: .3rem solid white;
    margin: 7rem 4rem;
  }
`;

const FamilyName = styled.div`
  position: relative;
  top: 25%;
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 60000;
  @media (min-width: 1920px) {
    font-size: 4.5rem;
  }
`;

const Item = styled.div`
  text-align: center;
  margin: 0 .2rem;
  &:hover{
    cursor: pointer;
    ${FamilyImage} {
      webkit-filter: blur(4px); /* Chrome, Safari, Opera */
      filter: blur(4px);
    }
  }
`;


const { small320: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;

const Families = ({
  familiesData = [],
  photos = [],
  updatePhotos,
}) => {
  const [selectedFamily, setSelectedFamily] = useState(null);
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(familiesData.map(f=>f.coverId), [SIZE_LABELS.LARGE, SIZE_LABELS.SMALL]).then(
        (result) => updatePhotos(transformForAllFamilies(result)),
        (error) => console.log("error =" + error)
      );
    }
  });

const openFamily = async index => {
  const photos = await FlickrAPI.getPhotoset(familiesData[index].photosetId, urlsBySize);
  setSelectedFamily({index, family: familiesData[index], photos: transformForGallery(photos)});
  window.scrollTo(0, 0);
}

const closeFamily = () => {
  setSelectedFamily(null);
  window.scrollTo(0, 0);
}

const transformForAllFamilies = (result) => {
    const transform = (sizes, index) => ({ mainPicture : sizes[0].source, miniPicture: sizes[1].source, name: familiesData[index].name})
    return result.map(({sizes}, index) => transform(sizes, index));
}
const transformForGallery = result =>
    result.map(r => {
      return {
        src: r[def.url],
        width: r[def.width],
        height: r[def.height],
        bigSrc: r[big.url]
      };
    });

return (<Wrapper light={selectedFamily}>
  {selectedFamily && <FamilyMainTitle>{`>>  ${selectedFamily.family.name}  <<`}</FamilyMainTitle>}
  {photos && photos.length ?
    !selectedFamily ?
      (<FamiliesContainer>
      {photos.map((p, index)=>
        <Item key={index} onClick={() => openFamily(index)}>
          <FamilyName>{familiesData[index].name}</FamilyName>
          <FamilyImage src={p.mainPicture}/>
        </Item>)}
      </FamiliesContainer>) :
      <OneFamily currentFamily={selectedFamily} allFamilies={photos.map(({miniPicture, name})=>({miniPicture, name}))} onClose={closeFamily} onFamilyClick={openFamily}/>
      : ''}
    </Wrapper>)
};


export default Families;
