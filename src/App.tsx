import React from 'react';
import classnames from 'classnames';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.ApplicationName}>Tala Chabi</div>
        <button className={classnames('button', styles.AddNewPasswordButton)}>NEW</button>
      </div>
      <div className={styles.Body}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}

export default App;
