import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import { menu } from "./data/data.json";
import Families from "./screens/Families";
import MakingOf from "./screens/MakingOf";
import Info from "./screens/Info";


const Router = () => {
  const [photosets, setPhotosets] = useState({});

  const setPhotos = (photosetId, photos) => {
    setPhotosets({ ...photosets, [photosetId]: photos });
  };

  return (
    <HashRouter>
      <Route
        exact
        path={menu[0].path}
        render={() => (
          <Families
            photos={photosets["families"]}
            updatePhotos={p=>setPhotos("families", p)}
          />
        )}/>
      <Route path={menu[1].path} render={() => (<MakingOf photos={photosets["makingof"]} updatePhotos={p=>setPhotos("makingof", p)}/>)}/>
      <Route path={menu[2].path} component={Info} />
    </HashRouter>
  );
};

export default Router;
