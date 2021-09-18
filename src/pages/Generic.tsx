import React, { FC, useEffect } from "react";
import useAuthContext, { AuthContext } from "../context/Auth";

export const GenericPage: FC = () => {
  const authCtx = useAuthContext();
  console.log(authCtx);

  useEffect(() => {
    if (authCtx.user === "enzo tasca") {
      authCtx.reducer();
    }
  }, [authCtx]);

  return (
    <AuthContext.Consumer>
      {(value) => <h1>{value.user}</h1>}
    </AuthContext.Consumer>
  );
};
