import React from 'react';
import classnames from 'classnames';

import { PasswordContainer } from 'containers/PasswordContainer/Container';
import { Popup } from 'containers/Popup/Container';

import styles from './App.module.css';

function App() {
  return (
    <>
      <header>
        <div className='navbar navbar-dark bg-dark shadow-sm'>
          <div className='container-fluid pl-0 pr-0'>
            <div className='navbar-brand'>Tala Chabi</div>
            <button type='button' className='btn btn-dark border-white'>ADD</button>
          </div>
        </div>
      </header>
      <div className={classnames('container-fluid', styles.Container)}>
        <PasswordContainer />
        <Popup />
      </div>
    </>
  );
}

export default App;
