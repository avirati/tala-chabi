import { createSelector } from 'reselect';

import { IApplicationState } from 'state/interfaces';

import { IPasswordContainerState } from '../interfaces';

export const passwordContainerStateSelector = (state: IApplicationState): IPasswordContainerState => state.passwords;

export const savedPasswordsSelector = createSelector(
  [passwordContainerStateSelector],
  (state) => state.saved,
);
