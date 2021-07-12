import { FC } from 'react';
import { RouteProps } from 'react-router-dom';

import { ROUTE_TYPE } from './router.type';

export interface RoutingInterface {
  routes: RouteProps[];
  template: FC;
  type: ROUTE_TYPE;
}
