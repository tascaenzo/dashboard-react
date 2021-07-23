import React, { FC } from "react";
import { Row, useTable } from 'react-table'
import data from './data.json';
import { Table as TableStyle, Thead, Th, Tr, Td } from "./Table.style";
const Table: FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'id',
            accessor: 'id',
          },
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      
    ],
    []
  )
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