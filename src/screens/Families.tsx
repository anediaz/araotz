import React, { useEffect, useState } from "react";
import { Gallery, PhotoBaseProps } from "react-ikusi";
import Page from "../components/Page";
import FlickrAPI from "../services/FlickrAPI";
import {
  getFamiliesSizes,
  getMiniFamiliesSizes,
  getFamiliesConfigurations,
} from "../services/photosUtils";
import { home } from "../data/data";
import OneFamily from "../components/OneFamily";
import MiniFamilies from "../components/MiniFamilies";

const familiesSizes = getFamiliesSizes();
const miniFamiliesSizes = getMiniFamiliesSizes();
const urlsBySize = `${familiesSizes.def.url},${familiesSizes.big.url}`;
const configurations = getFamiliesConfigurations();

export interface FamilyPhoto {
  miniPicture: string;
  gallery: {
    src: string;
    width: number;
    height: number;
    bigSrc: string;
    id: string;
  };
  name: string;
}

interface FamiliesProps {
  photos?: FamilyPhoto[];
  updatePhotos: (photos: FamilyPhoto[]) => void;
}

const Families: React.FC<FamiliesProps> = ({ photos = [], updatePhotos }) => {
  const [selectedFamily, setSelectedFamily] = useState<any>(null);
  const familiesData = home.families;
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(
        familiesData.map((f: any) => f.coverId),
        Object.values(miniFamiliesSizes)
      ).then(
        (result: any) => updatePhotos(transformForAllFamilies(result)),
        (error: any) => console.log("error =" + error)
      );
    }
  });

  const transformForAllFamilies = (result: any[]): FamilyPhoto[] => {
    const transform = (sizes: any[], index: number): FamilyPhoto => {
      const big = sizes.find((s: any) => s.label === miniFamiliesSizes.big);
      const miniPicture = sizes.find((s: any) => s.label === miniFamiliesSizes.def);
      const galleryPicture = sizes.find((s: any) => s.label === miniFamiliesSizes.big);
      const gallery = {
        src: galleryPicture.source,
        width: galleryPicture.width,
        height: galleryPicture.height,
        bigSrc: big.source,
        id: String(index),
      };
      return {
        miniPicture: miniPicture.source,
        gallery: gallery,
        name: familiesData[index].name,
      };
    };
    return result.map(({ sizes }: { sizes: any[] }, index: number) => transform(sizes, index));
  };

  const openFamily = (photo: PhotoBaseProps) => {
    const index = Number(photo.id);
    FlickrAPI.getPhotoset(
      familiesData[index].photosetId,
      urlsBySize
    ).then((photos: any) => {
      setSelectedFamily({
        index,
        family: familiesData[index],
        photos: transformForGallery(photos),
      });
      window.scrollTo(0, 0);
    });
  };

  const closeFamily = () => {
    setSelectedFamily(null);
    window.scrollTo(0, 0);
  };

  const transformForGallery = (result: any[]): any[] =>
    result.map((r: any, idx: number) => ({
      src: r[familiesSizes.def.url],
      width: r[familiesSizes.def.width],
      height: r[familiesSizes.def.height],
      bigSrc: r[familiesSizes.big.url],
      id: String(idx),
    }));

  const alternativeMenu = selectedFamily ? (
    <MiniFamilies
      currentFamily={selectedFamily}
      allFamilies={photos.map(({ miniPicture, name }) => ({
        miniPicture,
        name,
      }))}
      onClose={closeFamily}
      onFamilyClick={(index: number) => openFamily({ id: String(index), src: '', title: '' })}
    />
  ) : null;

  return (
    <Page
      alternativeMenu={alternativeMenu}
      onBackToHome={() => setSelectedFamily(null)}
    >
      <div style={{ height: "100%", color: "white", position: "relative", backgroundColor: "white", borderTop: "0.2rem solid white", borderBottom: "0.2rem solid white" }}>
        {photos && photos.length ? (
          !selectedFamily ? (
            <div style={{ height: "100%" }} className="familiesContainer">
              <Gallery
                photos={photos.map((p) => p.gallery)}
                configurations={configurations}
                onClickPhoto={openFamily}
                withLightbox={false}
              />
            </div>
          ) : (
            <OneFamily currentFamily={selectedFamily} />
          )
        ) : (
          ""
        )}
      </div>
    </Page>
  );
};

export default Families;
