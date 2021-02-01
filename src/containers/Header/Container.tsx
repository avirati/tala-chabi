import React from 'react';
import { connect } from 'react-redux';

import { showPopup } from 'containers/Popup/state/actions';
import { PopupType } from 'containers/Popup/state/interfaces';

import styles from './Container.module.css';

interface IDispatchProps {
  showPopup: typeof showPopup
}

interface IProps extends IDispatchProps {}

const mapDispatchToProps: IDispatchProps = {
  showPopup,
}

class HeaderBare extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className={styles.Header}>
        <div className={styles.ApplicationName}>Tala Chabi</div>
        <button
          className={styles.AddNewPasswordButton}
          onClick={this.onAddNewPasswordClicked}
        >+</button>
      </div>
    );
  }

  private onAddNewPasswordClicked = () => {
    this.props.showPopup(PopupType.ADD_NEW_PASSWORD_FORM);
  }
}

export const Header = connect(null, mapDispatchToProps)(HeaderBare);
