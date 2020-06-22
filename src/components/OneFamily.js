import React from "react";

import Gallery from 'react-ikusi';
import styled from "styled-components";



const OneFamilyContainer = styled.div`
  height: 100%;
`;

const GalleryContainer = styled.div`
  height : calc(100% - 5rem);
`;

const OneFamily = ({currentFamily }) => {
  const configurations = [
    { minWidth: 1920, cols: 3, margin: 1 },
    { maxWidth: 1919, cols: 2, margin: 1 }

  ];

  return(
  <OneFamilyContainer>
    <GalleryContainer>
      <Gallery photos={currentFamily.photos} configurations={configurations} />
    </GalleryContainer>
  </OneFamilyContainer>)
}

export default OneFamily;

