import React from "react";
import Box from "../../../shared/ui/Box/Box";
import { Table } from "../../../features/Table";
import { tableArray } from "../config/tableArray";

import "./MatrixTable.css";


const MatrixTable = () => {
  return (
    <section className="matrix-table">
      <div className="matrix-table__top">
        <h3 className="title matrix-table__title">Матрица</h3>
        <Box className={"matrix-table__box"} greenBorder={true} gray={true}>
          Зеленым цветом выделены энергии, которые есть в Вашей душе
        </Box>

        <Box className={"matrix-table__box"} orangeBorder={true} gray={true}>
          Красным цветом выделены отсутствующие энергии, которые нужно
          нарабатывать
        </Box>
      </div>

      <Table className={"matrix-table__content"} tableArray={tableArray} />
    </section>
  );
};

export default MatrixTable;
