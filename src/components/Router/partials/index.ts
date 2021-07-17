
import { DashboardLayout, /*GenericLayout*/ } from '../../../layouts';

import { RoutingInterface } from '../helper/router.interface';
import { ROUTE_TYPE } from '../helper/router.type';

import { userRoutes } from './user';


export const routes: RoutingInterface[] = [
  {
    routes: userRoutes,
    template: DashboardLayout,
    type: ROUTE_TYPE.PRIVATE,
  },
  {
    routes: userRoutes,
    template: DashboardLayout,
    type: ROUTE_TYPE.PRIVATE,
  },
];
