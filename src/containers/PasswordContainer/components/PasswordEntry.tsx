import React from 'react';

import { IPassword } from '../interfaces';

import styles from './PasswordEntry.module.css';

interface IProps extends Omit<IPassword, 'UID'> {}

export class PasswordEntry extends React.PureComponent<IProps> {
  public render() {
    const { name } = this.props;
    return (
      <div className={styles.PasswordEntry}>
        <div className={styles.Header}>
          {name}
        </div>
        <div className={styles.Body}>

        </div>
      </div>
    );
  }
}
