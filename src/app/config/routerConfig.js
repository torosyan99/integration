import { MainPage } from "../../pages/MainPage";
import { Square } from "../../pages/Square";
import { Sucai } from "../../pages/Sucai";
import { Design } from "../../pages/Design";
import { MatrixOfFate } from "../../pages/MatrixOfFate";

export const routerConfig = [
  {
    element: <MainPage />,
    path: "/",
  },
];

export const routerLayoutConfig = [
  {
    element: <MatrixOfFate />,
    path: "/matrix-of-fate",
  },
  {
    element: <Design />,
    path: "/person-design",
  },
  {
    element: <Sucai />,
    path: "/sucai",
  },
  {
    element:<Square />,
    path:'/square'
  }
];
