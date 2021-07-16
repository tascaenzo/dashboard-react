import React, { FC } from 'react';
import { AuthRouteInterface } from './helper/auth-router.interface';

const AuthRoute: FC<AuthRouteInterface> = ({
  component: Component,
  template: Template,
  type,
}: AuthRouteInterface) => {
  /* const user = useUser();

  if (isPrivate(type) && !user) {
    return <Redirect to={routing.login} />;
  }

  if (isSession(type) && user.loggedIn) {
    return <Redirect to={routing.players} />
  }; */

  return <Template>{<Component />}</Template>;
};

export default AuthRoute;
