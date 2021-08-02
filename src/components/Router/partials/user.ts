import { RouteProps } from 'react-router-dom';
import { GenericPage } from '../../../pages';
import { UserTable } from '../../../pages/User';

export const userRoutes: RouteProps[] = [
  {
    exact: true,
    component: GenericPage,
    path: '/',
  },
  { 
    exact: true,
    component: UserTable,
    path: '/users',
  },
];