import React, { FC } from "react";
import { Column, Row, useTable } from 'react-table'
import { Data, data } from './data';
import { Table as TableStyle, Thead, Th, Tr, Td } from "./Table.style";

const Table: FC = () => {
  const columns: Column<Data>[] = [
    {
      Header: "id",
      accessor: "id"
    },
    {
      Header: "Nome",
      accessor: "firstName"
    },
    {
      Header: "Cognome",
      accessor: "lastName"
    }
  ];
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  return (
    <TableStyle {...getTableProps()}>
    <Thead>
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
          ))}
        </Tr>
      ))}
    </Thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <Tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
            })}
          </Tr>
        )
      })}
    </tbody>
  </TableStyle>
  )
}

export default Table