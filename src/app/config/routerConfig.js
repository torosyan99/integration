import { MainPage } from "../../pages/MainPage";
import { Square } from "../../pages/Square";
import { Sucai } from "../../pages/Sucai";
import { Design } from "../../widgets/Design";
import { MatrixOfFate } from "../../widgets/MatrixOfFate";

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
