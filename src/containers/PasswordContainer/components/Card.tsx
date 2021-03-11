import React from 'react';

import { IPassword } from '../interfaces';

interface IProps extends Omit<IPassword, 'UID'> {}

export class Card extends React.PureComponent<IProps> {
  public render() {
    const { login, name, notes } = this.props;
    return (
      <div className='card mt-3'>
        <div className='card-header'>
          {name}
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{login}</h5>
          <p className='card-text'>
            {notes}
          </p>
        </div>
      </div>
    );
  }
}
