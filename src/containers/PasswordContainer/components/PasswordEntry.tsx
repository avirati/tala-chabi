import React from 'react';

import { IPassword } from '../interfaces';

interface IProps extends Omit<IPassword, 'UID'> {}

export class PasswordEntry extends React.PureComponent<IProps> {
  public render() {
    const { name } = this.props;
    return (
      <div className='card'>
        <div className='card-header'>
          { name }
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Special title treatment</h5>
          <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
          <a href='#' className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    );
  }
}
