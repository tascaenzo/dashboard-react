import { Dispatch } from "react";

export type UseContext<State> = {
  Provider: React.FC;
  state: State;
  dispatch: Dispatch<{ type: string }>;
};

export type CreateContext<State> = {
  state: State;
  dispatch: Dispatch<{ type: string }>;
};

export type ReducerArgs<State> = {
  state: State;
  action: { type: string };
};

