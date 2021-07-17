import { RouteProps } from 'react-router-dom';
import { GenericPage } from '../../../pages';

export const userRoutes: RouteProps[] = [
  {
    exact: true,
    component: GenericPage,
    path: '/',
  },
  { 
    exact: true,
    component: GenericPage,
    path: '/users',
  },
];