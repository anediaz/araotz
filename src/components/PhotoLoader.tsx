import React, { useEffect } from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { EXTRAS } from "../constants/constants";
import { getPhotos } from "../services/FlickrAPI";

const { small320: def, large1024: big } = EXTRAS;
const urlsBySize = [def.url, big.url];

interface PhotoLoaderProps {
  photosetId: string;
  photos?: PhotoProps[];
  setPhotos: (photosetId: string, photos: PhotoProps[]) => void;
  configurations: any;
}

const PhotoLoader: React.FC<PhotoLoaderProps> = ({
  photosetId,
  photos = [],
  setPhotos,
  configurations,
}) => {
  useEffect(() => {
    if (!photos || !photos.length) {
      getPhotos([photosetId], urlsBySize).then(
          (result: any) => setPhotos(photosetId, transformResult(result)),
          (error: any) => console.log("error =" + error)
        );
    }
  }, [photos, photosetId, setPhotos]);

  const transformResult = (result: any[]): PhotoProps[] =>
    result.map((r) => {
      return {
        src: r[def.url],
        width: r[def.width],
        height: r[def.height],
        bigSrc: r[big.url],
        id: r.id,
      };
    });

  return <Gallery photos={photos} configurations={configurations} />;
};

export default PhotoLoader;
