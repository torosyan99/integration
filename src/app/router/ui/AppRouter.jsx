import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig, routerLayoutConfig } from "../../config/routerConfig";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}

      <Route element={<Layout />}>
        {routerLayoutConfig.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
