import React, { FC, useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import { Card } from "../Card";
import { Props } from "./helper/table.interface";
import { ViewMode } from "./helper/table.view-mode";
import {
  TableContainer,
  Thead,
  Tbody,
  Th,
  Tr,
  TrBody,
  Td,
  CardContainer,
} from "./Table.style";

const Table: FC<Props> = ({ columns, items, viewMode }: Props) => {
  const [togleCard, setTogleCard] = useState(
    viewMode === undefined ? ViewMode.TABLE : viewMode
  );
  const [width, setWidth] = useState(0);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  useEffect(() => {
    if (width < 640) {
      setTogleCard(ViewMode.CARD);
    } else {
      setTogleCard(ViewMode.TABLE);
    }
  }, [viewMode, width]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: useMemo(() => items, []) });

  if (togleCard == ViewMode.TABLE) {
    return (
      <TableContainer {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TrBody {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </TrBody>
            );
          })}
        </Tbody>
      </TableContainer>
    );
  }

  return (
    <CardContainer>
      {items.map((item, i) => (
        <Card key={i} item={item} columns={columns} />
      ))}
    </CardContainer>
  );
};

export default Table;
