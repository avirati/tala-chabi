import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { NewPasswordForm } from 'containers/NewPasswordForm/Container';

import { isPopupVisibleSelector, popupTypeSelector } from './state/selectors';
import { hidePopup } from './state/actions';
import { PopupType } from './state/interfaces';

interface IPublicProps {
  onPopupClose?: () => void;
}

interface IStateProps {
  isPopupVisible: ReturnType<typeof isPopupVisibleSelector>
  popupType: ReturnType<typeof popupTypeSelector>
}

interface IDispatchProps {
  hidePopup: typeof hidePopup;
}

interface IProps extends IPublicProps, IStateProps, IDispatchProps {}

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  isPopupVisible: isPopupVisibleSelector,
  popupType: popupTypeSelector,
});

const mapDispatchToProps: IDispatchProps = {
  hidePopup,
}

const getPopupBody = (type: PopupType) => {
  switch(type) {
    case PopupType.ADD_NEW_PASSWORD_FORM:
      return (
        <NewPasswordForm />
      )
    default:
      return null;
  }
}

class PopupBare extends React.PureComponent<IProps> {

  public render() {
    const { isPopupVisible, popupType } = this.props;
    return isPopupVisible
    ? (
      <div>
        <div onClick={this.onPopupClose}>x</div>
        {
          popupType && getPopupBody(popupType)
        }
      </div>
    )
    : null
    ;
  }

  private onPopupClose = () => {
    this.props.hidePopup();

    if(this.props.onPopupClose) {
      this.props.onPopupClose();
    }
  }
}

export const Popup = connect(mapStateToProps, mapDispatchToProps)(PopupBare);
