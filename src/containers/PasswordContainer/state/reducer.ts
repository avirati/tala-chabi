import { Actions } from './actions';
import { Category, IPasswordContainerState } from '../interfaces';

const initialState: IPasswordContainerState = {
  saved: [{
    UID: 'sample-uid-1',
    login: 'avinashverma.it@gmail.com',
    name: 'google.com',
    category: Category.SOCIAL_MEDIA,
    url: 'https://google.com',
    notes: 'This is a nice note',
  }, {
    UID: 'sample-uid-2',
    login: 'avidgt',
    name: 'facebook.com',
    category: Category.SOCIAL_MEDIA,
    url: 'https://facebook.com',
  }, {
    UID: 'sample-uid-3',
    login: 'avirati',
    name: 'github.com',
    category: Category.SOCIAL_MEDIA,
    url: 'https://github.com',
    notes: 'This is a nice note',
  }, {
    UID: 'sample-uid-1',
    login: 'avinashverma.it@gmail.com',
    name: 'google.com',
    category: Category.SOCIAL_MEDIA,
    url: 'https://google.com',
    notes: 'This is a nice note',
  }, {
    UID: 'sample-uid-2',
    login: 'avidgt',
    name: 'facebook.com',
    category: Category.SOCIAL_MEDIA,
    url: 'https://facebook.com',
  }, {
    UID: 'sample-uid-3',
    login: 'avirati',
    name: 'github.com',
    category: Category.SOCIAL_MEDIA,
    url: 'https://github.com',
    notes: 'This is a nice note',
  }]
};

export const reducer = (state: IPasswordContainerState = initialState, action: Actions): IPasswordContainerState => {
  switch (action.type) {
    default:
      return state;
  }
}
