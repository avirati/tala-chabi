import { ForkEffect } from 'redux-saga/effects';

import { IPasswordContainerState } from 'containers/PasswordContainer/interfaces';
import { IPopupState } from 'containers/Popup/state/interfaces';

export interface IApplicationState {
  passwords: IPasswordContainerState;
  popup: IPopupState
}

export interface IReduxAction<T = any, D = any> {
  type: T;
  data?: D;
}

export interface ISaga {
  (): IterableIterator<ForkEffect>;
}
