import { IReduxAction } from 'state/interfaces';

export enum ActionTypes {
  ACTION = 'ACTION'
}

export const action = (): IReduxAction<ActionTypes.ACTION, void> => ({
  type: ActionTypes.ACTION
});

export type Actions =
  | ReturnType<typeof action>
  ;
