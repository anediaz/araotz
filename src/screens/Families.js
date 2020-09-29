import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Gallery from "react-ikusi";
import Page from "../components/Page";
import FlickrAPI from "../services/FlickrAPI";
import {
  getFamiliesSizes,
  getMiniFamiliesSizes,
  getFamiliesConfigurations,
} from "../services/photosUtils";
import { home } from "../data/data.json";
import OneFamily from "../components/OneFamily";
import MiniFamilies from "../components/MiniFamilies";

const Wrapper = styled.div`
  height: 100%;
  color: white;
  position: relative;
  background-color: white;
  border-top: 0.2rem solid white;
  border-bottom: 0.2rem solid white;
  @media (max-width: 1382px) {
    // iPadPro Horizontal
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
  }
`;

const FamiliesContainer = styled.div`
  height: 100%;
  div {
    margin-top: 0;
  }
`;

const familiesSizes = getFamiliesSizes();
const miniFamiliesSizes = getMiniFamiliesSizes();
const urlsBySize = `${familiesSizes.def.url},${familiesSizes.big.url}`;
const configurations = getFamiliesConfigurations();

const Families = ({ photos = [], updatePhotos }) => {
  const [selectedFamily, setSelectedFamily] = useState(null);
  const familiesData = home.families;
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(
        familiesData.map((f) => f.coverId),
        Object.values(miniFamiliesSizes)
      ).then(
        (result) => updatePhotos(transformForAllFamilies(result)),
        (error) => console.log("error =" + error)
      );
    }
  });

  const transformForAllFamilies = (result) => {
    const transform = (sizes, index) => {
      const big = sizes.find((s) => s.label === miniFamiliesSizes.big);
      const miniPicture = sizes.find((s) => s.label === miniFamiliesSizes.def);
      const galleryPicture = sizes.find(
        (s) => s.label === miniFamiliesSizes.big
      );
      const gallery = {
        src: galleryPicture.source,
        width: galleryPicture.width,
        height: galleryPicture.height,
        bigSrc: big.source,
        id: index,
      };
      return {
        miniPicture: miniPicture.source,
        gallery: gallery,
        name: familiesData[index].name,
      };
    };
    return result.map(({ sizes }, index) => transform(sizes, index));
  };

  const openFamily = async (index) => {
    const photos = await FlickrAPI.getPhotoset(
      familiesData[index].photosetId,
      urlsBySize
    );
    setSelectedFamily({
      index,
      family: familiesData[index],
      photos: transformForGallery(photos),
    });
    window.scrollTo(0, 0);
  };

  const closeFamily = () => {
    setSelectedFamily(null);
    window.scrollTo(0, 0);
  };

  const transformForGallery = (result) =>
    result.map((r) => ({
      src: r[familiesSizes.def.url],
      width: r[familiesSizes.def.width],
      height: r[familiesSizes.def.height],
      bigSrc: r[familiesSizes.big.url],
    }));

  const alternativeMenu = selectedFamily ? (
    <MiniFamilies
      currentFamily={selectedFamily}
      allFamilies={photos.map(({ miniPicture, name }) => ({
        miniPicture,
        name,
      }))}
      onClose={closeFamily}
      onFamilyClick={openFamily}
    />
  ) : null;

  return (
    <Page
      alternativeMenu={alternativeMenu}
      onBackToHome={() => setSelectedFamily(null)}
    >
      <Wrapper>
        {photos && photos.length ? (
          !selectedFamily ? (
            <FamiliesContainer className="familiesContainer">
              <Gallery
                className="gallery"
                photos={photos.map((p) => p.gallery)}
                configurations={configurations}
                onClickPhoto={openFamily}
                withLightbox={false}
              />
            </FamiliesContainer>
          ) : (
            <OneFamily currentFamily={selectedFamily} />
          )
        ) : (
          ""
        )}
      </Wrapper>
    </Page>
  );
};

export default Families;
