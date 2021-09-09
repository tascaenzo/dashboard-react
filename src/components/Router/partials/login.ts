import { RouteProps } from 'react-router-dom';
import Login from '../../../pages/Login';

export const loginRoutes: RouteProps[] = [
  {
    exact: true,
    component: Login,
    path: '/login',
  },
];