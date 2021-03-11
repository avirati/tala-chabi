import React from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';

import { PasswordContainer } from 'containers/PasswordContainer/Container';
import { NewPasswordPopup } from 'containers/Popup/Container';
import { NewPasswordForm } from 'containers/NewPasswordForm/Container';

import styles from './App.module.css';

interface IState {
  showAddNewPasswordModal: boolean;
}

export class App extends React.PureComponent<{}, IState> {
  public state: IState = {
    showAddNewPasswordModal: false,
  }

  public render() {
    return (
      <>
        <header>
          <div className='navbar navbar-dark bg-dark shadow-sm'>
            <div className='container-fluid pl-0 pr-0'>
              <div className='navbar-brand'>Tala Chabi</div>
              <Button
                onClick={this.showAddNewPasswordModal}
                variant='outline-light'
              >
                ADD
              </Button>
            </div>
          </div>
        </header>
        <div className={classnames('container-fluid', styles.Container)}>
          <PasswordContainer />
          <NewPasswordPopup
            show={this.state.showAddNewPasswordModal}
            onHide={this.hideAddNewPasswordModal}
            heading='Add a Password'
          >
            <NewPasswordForm />
          </NewPasswordPopup>
        </div>
      </>
    );
  }

  private hideAddNewPasswordModal = () => {
    this.setState({
      showAddNewPasswordModal: false,
    });
  }

  private showAddNewPasswordModal = () => {
    this.setState({
      showAddNewPasswordModal: true,
    });
  }
}
