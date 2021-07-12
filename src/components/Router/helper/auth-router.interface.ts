import { FC } from "react";
import { ROUTE_TYPE } from "./router.type";

export interface AuthRouteInterface {
  component: any;
  template: FC;
  type: ROUTE_TYPE;
}