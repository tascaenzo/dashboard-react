import { Dispatch } from "react";

export type UseContext<State, Payload> = {
  Provider: React.FC;
  state: State;
  dispatch: Dispatch<{ type: string; payload: Payload }>;
};

export type CreateContext<State, Payload> = {
  state: State;
  dispatch: Dispatch<{ type: string; payload: Payload }>;
};

export interface ActionInterface<Payload> {
  type: string;
  payload: Payload;
}
