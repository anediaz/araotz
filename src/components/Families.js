import React, { useEffect } from "react";
import styled from "styled-components";
import FlickrAPI from "../services/FlickrAPI";
import { SIZE_LABELS } from "../constants/constants";

const FamiliesWrapper = styled.div`
  margin-top: .2rem;
  color: white;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100%;
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
  &:hover{
    cursor: pointer;
    ${FamilyImage} {
      webkit-filter: blur(4px); /* Chrome, Safari, Opera */
      filter: blur(4px);
    }
  }
`;




const Families = ({
  families = [],
  photos = [],
  setPhotos,
}) => {
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(families.map(f=>f.coverId), [SIZE_LABELS.LARGE, SIZE_LABELS.SMALL]).then(
        (result) => setPhotos(result.map(r=>r.sizes.map(size=>({label: size.label, source: size.source})))),
        (error) => console.log("error =" + error)
      );
    }
  });

const getBigPicture = picture => picture.find(p=>p.label === SIZE_LABELS.LARGE).source;

return <FamiliesWrapper> {
  photos && photos.length ?
    photos.map((p, index)=><Item key={index}><FamilyName>{families[index].name}</FamilyName><FamilyImage src={getBigPicture(p)}/></Item>)
    : ''
}
</FamiliesWrapper>
};

export default Families;
