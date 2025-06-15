import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { menu } from "./data/data";
import Families, { FamilyPhoto } from "./screens/Families";
import MakingOf, { MakingOfPhoto } from "./screens/MakingOf";
import Info from "./screens/Info";

const Router = () => {
  const [familiesPhotos, setFamiliesPhotos] = useState<FamilyPhoto[]>([]);
  const [makingOfPhotos, setMakingOfPhotos] = useState<MakingOfPhoto[]>([]);

  return (
    <HashRouter>
      <Routes>
        <Route
          path={menu[0].path}
          element={
            <Families
              photos={familiesPhotos}
              updatePhotos={setFamiliesPhotos}
            />
          }
        />
        <Route
          path={menu[1].path}
          element={
            <MakingOf
              photos={makingOfPhotos}
              updatePhotos={setMakingOfPhotos}
            />
          }
        />
        <Route path={menu[2].path} element={<Info />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
