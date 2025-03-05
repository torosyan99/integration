import { MainPage } from "../../pages/MainPage";
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
];
