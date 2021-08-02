import { Column } from "react-table";
import { ViewMode } from "./table.view-mode";

export interface Props {
  items: any[];
  columns: Column[];
  viewMode?: ViewMode.CARD | ViewMode.TABLE;
}
