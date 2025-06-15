import React from "react";
import { Gallery, PhotoProps } from "react-ikusi";

const OneFamily = ({ currentFamily }: { currentFamily: { index: number; family: any; photos: PhotoProps[] } }) => {
  const configurations = [
    {
      lengths: [0],
      configurations: [
        { maxWidth: 768, cols: 2, margin: 1 },
        { minWidth: 769, maxWidth: 1920, cols: 3, margin: 1 },
        { minWidth: 1921, cols: 5, margin: 1 },
      ],
    },
  ];

  const findConfigurations = () => {
    const found =
      configurations.find(
        (config) => config.lengths.indexOf(currentFamily.photos.length) > -1
      ) || configurations[0];
    return found.configurations;
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "calc(100% - 5rem)", backgroundColor: "white" }}>
        <Gallery
          photos={currentFamily.photos}
          configurations={findConfigurations()}
        />
      </div>
    </div>
  );
};

export default OneFamily;
