import { Actions } from './actions';
import { IPasswordContainerState } from '../interfaces';

const initialState: IPasswordContainerState = {

};

export const reducer = (state: IPasswordContainerState = initialState, action: Actions): IPasswordContainerState => {
  switch (action.type) {
    default:
      return state;
  }
}
