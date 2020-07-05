import React, {useEffect} from "react";
import Gallery from 'react-ikusi';
import styled from "styled-components";
import FlickrAPI from "../services/FlickrAPI";
import Page from '../components/Page';
import { EXTRAS } from "../constants/constants";
import { makingOf } from "../data/data.json";


const Wrapper = styled.div`
  margin-top: .2rem;
  height: 100%;
`;

const { large1024: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;

const transformForGallery = result =>
  result.map(r=>({
      src: r[def.url],
      width: r[def.width],
      height: r[def.height],
      bigSrc: r[big.url]
  }));

const configurations = [
  { minWidth: 0, maxWidth: 1381, cols: 3, margin: 1 },
  { minWidth: 1382, maxWidth: 1920, cols: 3, margin: 1 },
  { minWidth: 1921, cols: 3, margin: 4 },
];

const MakingOf = ({photos = [], updatePhotos}) => {

  useEffect(() => {
    if(!photos || !photos.length){
      FlickrAPI.getPhotoset(makingOf, urlsBySize).then(
        (result) => updatePhotos(transformForGallery(result)),
        (error) => console.log("error =" + error)
      );
    }
  });

  return (
    <Page>
      <Wrapper>
        <Gallery className="gallery" photos={photos} configurations={configurations}/>
      </Wrapper>
    </Page>
  );
};
export default MakingOf;
