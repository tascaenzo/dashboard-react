import { FC } from 'react';
import { RouteProps } from 'react-router-dom';
import { RouterType } from './router.type';

export interface RoutingInterface {
  routes: RouteProps[];
  template: FC;
  type: RouterType;
}
