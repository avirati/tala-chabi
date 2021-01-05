import { ForkEffect } from 'redux-saga/effects';

import { IPasswordContainerState } from 'containers/PasswordContainer/interfaces';

export interface IApplicationState {
  passwords: IPasswordContainerState;
}

export interface IReduxAction<T = any, D = any> {
  type: T;
  data?: D;
}

export interface ISaga {
  (): IterableIterator<ForkEffect>;
}
