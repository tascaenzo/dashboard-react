import { Column } from "react-table";

export interface Props<T> {
  item: T;
  columns: Column[];
}
