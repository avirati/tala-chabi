export enum PopupType {
  ADD_NEW_PASSWORD_FORM = 'ADD_NEW_PASSWORD_FORM'
}

export interface IPopupState {
  visible: boolean;
  popupType: PopupType | null;
}
