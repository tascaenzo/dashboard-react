import React, { FC } from 'react';
import { Column } from 'react-table';
import IconSwitch from '../../components/IconSwitch/IconSwitch';
import { Table, ViewMode } from '../../components/Table';
import { data } from '../../pages/User/data';
import { BiListUl, BiGridAlt } from "react-icons/bi";
import { Props as SwitchProps } from '../../components/IconSwitch/helper/iconSwitch.interface';

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

const p: SwitchProps = {
  items: [
    {
      icon: <BiListUl />,
      value: 1
    },
    {
      icon: <BiGridAlt />,
      value: 2
    },
  ],
  selected: 1,
  onChange: (value)=>{ console.log(value)}
}

export const UserTable: FC = () => {
  return (
    <>
      <IconSwitch {...p} />
      <Table items={data} columns={columns} viewMode={ViewMode.CARD} />
    </>
  )
}
