import React from "react";
import { Header } from "../../../widgets/Header";
import { Top } from "../../../widgets/Top";
import { Questions } from "../../../widgets/Questions";
import { Decoding } from "../../../widgets/Decoding";
import { Matrix } from "../../../widgets/Matrix";
import { Tariffs } from "../../../widgets/Tariffs";
import { Reviews } from "../../../widgets/Reviews";
import { Footer } from "../../../widgets/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Top />
      <Questions />
      <Decoding />
      <Matrix />
      <Tariffs />
      <Reviews />
      <Footer />
    </>
  );
};

export default MainPage;
