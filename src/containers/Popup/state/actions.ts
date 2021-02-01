import { IReduxAction } from 'state/interfaces';

import { PopupType } from './interfaces';

export enum ActionTypes {
  SHOW_POPUP = 'popup/SHOW_POPUP',
  HIDE_POPUP = 'popup/HIDE_POPUP',
}

export const showPopup = (type: PopupType): IReduxAction<ActionTypes.SHOW_POPUP, { popupType: PopupType }> => ({
  type: ActionTypes.SHOW_POPUP,
  data: {
    popupType: type,
  }
});

export const hidePopup = (): IReduxAction<ActionTypes.HIDE_POPUP, void> => ({
  type: ActionTypes.HIDE_POPUP,
});

export type Actions =
  | ReturnType<typeof showPopup>
  | ReturnType<typeof hidePopup>
  ;
