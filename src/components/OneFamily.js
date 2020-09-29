import React from "react";

import Gallery from 'react-ikusi';
import styled from "styled-components";



const OneFamilyContainer = styled.div`
  height: 100%;
`;

const GalleryContainer = styled.div`
  height: calc(100% - 5rem);
  background-color: white;
  @media (max-width: 1382px) {
    // iPadPro Horizontal
    
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
        { maxWidth: 768, cols: 2, margin: 1 },
        { minWidth: 769, maxWidth: 1920, cols: 3, margin: 1 },
        { minWidth: 1921, cols: 5, margin: 1 },
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
