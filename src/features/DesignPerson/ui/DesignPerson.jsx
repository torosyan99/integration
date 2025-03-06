import React from "react";
import { ReactComponent as GraphPerson } from "../assets/graph.svg";

import "./DesignPerson.css";
import Unconscious from "./Unconscious";
import Conscious from "./Conscious";
import Head from "./Head";

const DesignPerson = () => {
  return (
    <div className="design-person">
      <Head />

      <Unconscious />
      <Conscious />

      <GraphPerson />
    </div>
  );
};

export default DesignPerson;
