
import { DashboardLayout, GenericLayout } from '../../../layouts';

import { RoutingInterface } from '../helper/router.interface';
import { ROUTE_TYPE } from '../helper/router.type';

import { userRoutes } from './user';
import { loginRoutes } from './login';


export const routes: RoutingInterface[] = [
  {
    routes: loginRoutes,
    template: GenericLayout,
    type: ROUTE_TYPE.PUBLIC,
  },
  {
    routes: userRoutes,
    template: DashboardLayout,
    type: ROUTE_TYPE.PRIVATE,
  },
];
