import { FC } from "react";
import { RouterType } from "./router.type";

export interface AuthRouteInterface {
  component: any;
  template: FC;
  type: RouterType;
}