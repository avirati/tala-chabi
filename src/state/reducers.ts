import { reducerName as passwordContainerReducerName } from 'containers/PasswordContainer/constants';
import { reducer as passwordContainerReducer } from 'containers/PasswordContainer/state/reducer';

export const reducers = {
  [passwordContainerReducerName]: passwordContainerReducer,
}
