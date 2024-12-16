import React, {useEffect} from "react";
import Gallery from 'react-ikusi';
import FlickrAPI from "../services/FlickrAPI";
import Page from '../components/Page';
import { EXTRAS } from "../constants/constants";
import { makingOf } from "../data/data.json";

import './making-of.css';
const BLOCK = 'making-of-screen';

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
  { minWidth: 1382, maxWidth: 1920, cols: 6, margin: 1 },
  { minWidth: 1921, cols: 6, margin: 4 },
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
      <div className={BLOCK}>
        <Gallery className="gallery" photos={photos} configurations={configurations}/>
      </div>
    </Page>
  );
};
export default MakingOf;
