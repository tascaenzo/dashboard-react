import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthRoute from "./AuthRoute";
import { RoutingInterface } from "./helper/router.interface";
import { routes as routesModule } from "./partials";

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      {routesModule.map((routeModule: RoutingInterface) =>
        routeModule.routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={(props) => (
              <AuthRoute
                component={route.component}
                template={routeModule.template}
                type={routeModule.type}
                {...props}
              />
            )}
          />
        ))
      )}
    </Switch>
  </BrowserRouter>
);

export default Router;
