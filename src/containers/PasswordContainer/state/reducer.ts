import { Actions } from './actions';
import { IPasswordContainerState } from '../interfaces';

const initialState: IPasswordContainerState = {
  saved: [{
    UID: 'sample-uid',
    login: 'avinashverma.it@gmail.com',
    name: 'Google Mail',
  }, {
    UID: 'sample-uid',
    login: 'avinashverma.it@gmail.com',
    name: 'Google Mail',
  }, {
    UID: 'sample-uid',
    login: 'avinashverma.it@gmail.com',
    name: 'Google Mail',
  }, {
    UID: 'sample-uid',
    login: 'avinashverma.it@gmail.com',
    name: 'Google Mail',
  }, {
    UID: 'sample-uid',
    login: 'avinashverma.it@gmail.com',
    name: 'Google Mail',
  }]
};

export const reducer = (state: IPasswordContainerState = initialState, action: Actions): IPasswordContainerState => {
  switch (action.type) {
    default:
      return state;
  }
}
