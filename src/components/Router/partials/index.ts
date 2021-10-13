
import { DashboardLayout, GenericLayout } from '../../../layouts';

import { RoutingInterface } from '../helper/router.interface';
import { RouterType } from '../helper/router.type';

import { userRoutes } from './user';
import { loginRoutes } from './login';


export const routes: RoutingInterface[] = [
  {
    routes: loginRoutes,
    template: GenericLayout,
    type: RouterType.PUBLIC,
  },
  {
    routes: userRoutes,
    template: DashboardLayout,
    type: RouterType.PRIVATE,
  },
];
