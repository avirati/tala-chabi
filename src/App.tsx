import React from 'react';

import { PasswordContainer } from 'containers/PasswordContainer/Container';
import { Header } from 'containers/Header/Container';
import { Popup } from 'containers/Popup/Container';

import 'bulma/css/bulma.min.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.Body}>
        <PasswordContainer />
        <Popup />
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
}

export default App;
