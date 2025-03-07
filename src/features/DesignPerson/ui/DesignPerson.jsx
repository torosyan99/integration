import React from "react";
import Unconscious from "./Unconscious";
import Conscious from "./Conscious";
import Head from "./Head";
import Center from "./Center";
import { classNames } from "../../../shared/lib/classNames/classNames";

import { ReactComponent as GraphPerson } from "../assets/graph.svg";

import "./DesignPerson.css";
import Wrapper from "./Wrapper";

const DesignPerson = ({ className }) => {
  return (
    <div className={classNames("design-person", [className])}>
      <Head />
      <Center />

      <Unconscious />
      <GraphPerson className="design-person__graph" />
      <Conscious />

      <Wrapper />
    </div>
  );
};

export default DesignPerson;
