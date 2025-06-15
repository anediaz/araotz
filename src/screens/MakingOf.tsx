import React, {useEffect} from "react";
import { Gallery } from 'react-ikusi';
import { getPhotoset } from "../services/FlickrAPI";
import Page from '../components/Page';
import { EXTRAS } from "../constants/constants";
import { makingOf } from "../data/data";

const { large1024: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;

const transformForGallery = (result: any[]) =>
  result.map(r => ({
    src: r[def.url],
    width: r[def.width],
    height: r[def.height],
    bigSrc: r[big.url],
    id: r.id,
  }));

const configurations = [
  { minWidth: 0, maxWidth: 1381, cols: 3, margin: 1 },
  { minWidth: 1382, maxWidth: 1920, cols: 6, margin: 1 },
  { minWidth: 1921, cols: 6, margin: 4 },
];

interface MakingOfPhoto {
  src: string;
  width: number;
  height: number;
  bigSrc: string;
  id: string;
}

interface MakingOfProps {
  photos?: MakingOfPhoto[];
  updatePhotos: (photos: MakingOfPhoto[]) => void;
}

const MakingOf: React.FC<MakingOfProps> = ({photos = [], updatePhotos}) => {

  useEffect(() => {
    if(!photos || !photos.length){
      getPhotoset(makingOf, urlsBySize).then(
        (result) => updatePhotos(transformForGallery(result)),
        (error) => console.log("error =" + error)
      );
    }
  });

  return (
    <Page>
      <div style={{ height: "100%", backgroundColor: "white", borderTop: "0.2rem solid white", borderBottom: "0.2rem solid white" }}>
        <Gallery photos={photos} configurations={configurations}/>
      </div>
    </Page>
  );
};

export default MakingOf;
export type { MakingOfPhoto };
