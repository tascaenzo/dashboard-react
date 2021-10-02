import React, { FC, useEffect } from "react";
import useAuthContext from "../context/Auth";

export const GenericPage: FC = () => {
  const { dispatch, state } = useAuthContext();
  console.log(state);

  useEffect(
    () => dispatch({ type: "test", payload: { user: "test" } }),
    [dispatch]
  );

  return <h1>{state.user}</h1>;
};
