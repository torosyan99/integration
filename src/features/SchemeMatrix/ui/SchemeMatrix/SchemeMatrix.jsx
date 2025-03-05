import React from "react";
import Circle from "./Circle";
import Numbers from "../Number/Numbers";
import { classNames } from "../../../../shared/lib/classNames/classNames";

import { ReactComponent as Skeleton } from "../../assets/skeleton.svg";

import "./SchemeMatrix.css";

const SchemeMatrix = ({className}) => {
  return (
    <div className={classNames("scheme-matrix", [className])}>
      <Skeleton />
      <Circle>
        <div style={{ top: "-2.54%", left: "55.5%" }}>8</div>
        <div style={{ top: "-1.71%", left: "60%" }}>20</div>
        <div style={{ top: "-0.79%", left: "64.7%" }}>7</div>
        <div style={{ top: "0.50%", left: "68.9%" }}>14</div>
        <div style={{ top: "2.53%", left: "73%" }}>9</div>
        <div style={{ top: "4.93%", left: "77.1%" }}>22</div>
        <div style={{ top: "7.70%", left: "81%" }}>3</div>
        <div style={{ top: "15.9%", left: "90.4%" }}>8</div>
        <div style={{ top: "19.8%", left: "93%" }}>18</div>
        <div style={{ top: "24%", left: "95.7%" }}>10</div>
        <div style={{ top: "28.40%", left: "98%" }}>10</div>
        <div style={{ top: "32.4%", left: "99.4%" }}>22</div>
        <div style={{ top: "37%", left: "100.4%" }}>12</div>
        <div style={{ top: "41.2%", left: "101.4%" }}>14</div>
        <div style={{ bottom: "43.7%", left: "102.4%" }}>17</div>
        <div style={{ bottom: "39.5%", left: "101.4%" }}>15</div>
        <div style={{ bottom: "35%", left: "100.17%" }}>10</div>
        <div style={{ bottom: "31%", left: "98.55%" }}>13</div>
        <div style={{ bottom: "26.1%", left: "96.3%" }}>19</div>
        <div style={{ bottom: "22.25%", left: "93.8%" }}>6</div>
        <div style={{ bottom: "18.5%", left: "91.33%" }}>17</div>
        <div style={{ bottom: "9.2%", left: "83%" }}>15</div>
        <div style={{ bottom: "6.7%", left: "79.2%" }}>4</div>
        <div style={{ bottom: "4%", left: "74.9%" }}>6</div>
        <div style={{ bottom: "2%", left: "71.19%" }}>20</div>
        <div style={{ bottom: ".5%", left: "66%" }}>4</div>
        <div style={{ bottom: "-1%", left: "61.5%" }}>11</div>
        <div style={{ bottom: "-1.6%", left: "57%" }}>20</div>
        <div style={{ bottom: "-2%", left: "44.5%" }}>19</div>
        <div style={{ bottom: "-1%", left: "39.5%" }}>10</div>
        <div style={{ bottom: "0%", left: "35%" }}>11</div>
        <div style={{ bottom: "1.50%", left: "30.9%" }}>19</div>
        <div style={{ bottom: "3.9%", left: "26.2%" }}>3</div>
        <div style={{ bottom: "5.93%", left: "22.10%" }}>11</div>
        <div style={{ bottom: "9%", left: "18%" }}>21</div>
        <div style={{ bottom: "17%", left: "8.73%" }}>4</div>
        <div style={{ bottom: "21%", left: "5.86%" }}>21</div>
        <div style={{ bottom: "25%", left: "3.43%" }}>5</div>
        <div style={{ bottom: "29.5%", left: "1%" }}>11</div>
        <div style={{ bottom: "33.6%", left: "-0.6%" }}>14</div>
        <div style={{ bottom: "38.2%", left: "-1.8%" }}>3</div>
        <div style={{ bottom: "43%", left: "-2.5%" }}>22</div>
        <div style={{ top: "42.5%", left: "-3%" }}>10</div>
        <div style={{ top: "38%", left: "-1.5%" }}>9</div>
        <div style={{ top: "33.4%", left: "0%" }}>17</div>
        <div style={{ top: "29%", left: "1.19%" }}>8</div>
        <div style={{ top: "25%", left: "3.43%" }}>5</div>
        <div style={{ top: "21.2%", left: "5.5%" }}>15</div>
        <div style={{ top: "17%", left: "8.2%" }}>22</div>
        <div style={{ top: "8.4%", left: "16.6%" }}>9</div>
        <div style={{ top: "5.5%", left: "21%" }}>20</div>
        <div style={{ top: "3%", left: "25%" }}>6</div>{" "}
        <div style={{ top: "1.3%", left: "28.5%" }}>13</div>
        <div style={{ top: ".1%", left: "33%" }}>5</div>{" "}
        <div style={{ top: "-1.20%", left: "38.3%" }}>19</div>{" "}
        <div style={{ top: "-2.64%", left: "43.90%" }}>7</div>
      </Circle>
      <Numbers />
    </div>
  );
};

export default SchemeMatrix;
