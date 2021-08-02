import React, { FC } from 'react';
import { Column } from 'react-table';
import { Table, ViewMode} from '../../components/Table';
import { data } from  '../../pages/User/data';

const columns: Column[] = [
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

export const UserTable: FC = () => {
  return <Table items={data} columns={columns} viewMode={ViewMode.CARD} />
}
