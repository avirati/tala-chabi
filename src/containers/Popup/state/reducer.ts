import { Actions, ActionTypes } from './actions';
import {IPopupState } from './interfaces';

const initialState: IPopupState = {
  visible: false,
  popupType: null,
};

export const reducer = (state: IPopupState = initialState, action: Actions): IPopupState => {
  switch (action.type) {
    case ActionTypes.SHOW_POPUP:
      return {
        ...state,
        visible: true,
        popupType: action.data!.popupType,
      }
    case ActionTypes.HIDE_POPUP:
      return {
        ...state,
        visible: false,
        popupType: null,
      }
    default:
      return state;
  }
}
