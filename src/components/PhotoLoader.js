import React, { useEffect } from "react";
import FlickrAPI from "../services/FlickrAPI";
import { EXTRAS } from "../constants/constants";
import Gallery from "react-ikusi";

const { small320: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;

const PhotoLoader = ({
  photosetId,
  photos = [],
  setPhotos,
  configurations,
}) => {
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(photosetId, urlsBySize).then(
        (result) => setPhotos(photosetId, transformResult(result)),
        (error) => console.log("error =" + error)
      );
    }
  });

  const transformResult = (result) =>
    result.map((r) => {
      return {
        src: r[def.url],
        width: r[def.width],
        height: r[def.height],
        bigSrc: r[big.url],
      };
    });

  return <Gallery photos={photos} configurations={configurations} />;
};

export default PhotoLoader;
