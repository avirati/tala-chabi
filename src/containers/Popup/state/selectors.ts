import { createSelector } from 'reselect';

import { IApplicationState } from 'state/interfaces';

import { IPopupState } from './interfaces';

export const popupContainerStateSelector = (state: IApplicationState): IPopupState => state.popup;

export const isPopupVisibleSelector = createSelector(
  [popupContainerStateSelector],
  (state) => state.visible,
);

export const popupTypeSelector = createSelector(
  [popupContainerStateSelector],
  (state) => state.popupType,
);
