import React from "react";

import Gallery from 'react-ikusi';
import styled from "styled-components";



const OneFamilyContainer = styled.div`
  height: 100%;
`;

const GalleryContainer = styled.div`
  height: calc(100% - 5rem);
  background-color: white;
  border-top: 0.2rem solid white;
  border-bottom: 0.2rem solid white;
  @media (max-width: 1382px) {
    // iPadPro Horizontal
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
  }
  div {
    margin-top: 0;
  }
`;

const OneFamily = ({currentFamily }) => {
  const configurations = [
    {
      lengths: [0],
      configurations: [
        { minWidth: 1900, cols: 3, margin: 1 },
        { maxWidth: 1899, cols: 2, margin: 1 },
      ],
    },
    {
      lengths: [4, 5, 10, 13, 15, 19],
      configurations:[
        { maxWidth: 768, cols: 2, margin: 1 },
        { minWidth: 769, cols: 5, margin: 1 },
      ],
    },
    {
      lengths: [6, 11],
      configurations: [
        { maxWidth: 768, cols: 2, margin: 1 },
        { minWidth: 769, cols: 6, margin: 1 },
      ],
    },
    {
      lengths: [8],
      configurations: [
        { maxWidth: 768, cols: 2, margin: 1 },
        { minWidth: 769, cols: 4, margin: 1 },
      ],
    },
    {
      lengths: [3],
      configurations: [{ minWidth: 320, cols: 3, margin: 1 }],
    },
    {
      lengths: [21],
      configurations: [
        { maxWidth: 768, cols: 3, margin: 1 },
        { minWidth: 769, cols: 7, margin: 1 },
      ],
    },
    {
      lengths: [26],
      configurations: [
        { maxWidth: 768, cols: 2, margin: 1 },
        { minWidth: 769, cols: 7, margin: 1 },
      ],
    }
  ];

  const findConfigurations = () =>{
    const found =
      configurations.find(
        (config) => config.lengths.indexOf(currentFamily.photos.length) > -1
      ) || configurations[0];
    return found.configurations
  }

  return (
    <OneFamilyContainer>
      <GalleryContainer>
        <Gallery
          photos={currentFamily.photos}
          configurations={findConfigurations()}
        />
      </GalleryContainer>
    </OneFamilyContainer>
  );
}

export default OneFamily;
