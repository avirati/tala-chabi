import { reducerName as passwordContainerReducerName } from 'containers/PasswordContainer/state/constants';
import { reducer as passwordContainerReducer } from 'containers/PasswordContainer/state/reducer';
import { reducerName as popupContainerReducerName } from 'containers/Popup/state/constants';
import { reducer as popupContainerReducer } from 'containers/Popup/state/reducer';

export const reducers = {
  [passwordContainerReducerName]: passwordContainerReducer,
  [popupContainerReducerName]: popupContainerReducer,
}
