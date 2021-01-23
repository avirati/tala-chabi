import React from 'react';
import classnames from 'classnames';

import styles from './App.module.css';
import { PasswordContainer } from 'containers/PasswordContainer/Container';

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.ApplicationName}>Tala Chabi</div>
        <button className={classnames('button', styles.AddNewPasswordButton)}>+</button>
      </div>
      <div className={styles.Body}>
        <PasswordContainer />
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
}

export default App;
