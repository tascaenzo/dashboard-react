import React, { FC } from "react";
import { AuthRouteInterface } from "./helper/auth-router.interface";
import useAuthContext from "../../context/Auth";
import { RouterType } from "./helper/router.type";
import { Redirect } from "react-router";

const AuthRoute: FC<AuthRouteInterface> = ({
  component: Component,
  template: Template,
  type,
}: AuthRouteInterface) => {
  const { state } = useAuthContext();
    // eslint-disable-next-line no-debugger
    debugger;
  if (type === RouterType.PRIVATE) {

    if (!state.user) return <Redirect to={"/login"} />;
    return <Template>{<Component />}</Template>;
  }

  if (type === RouterType.PUBLIC) {
    return <Template>{<Component />}</Template>;
  }

  throw new Error(`Routing invalid type: ${type}`);
};

export default AuthRoute;
