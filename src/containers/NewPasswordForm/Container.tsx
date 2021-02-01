import React from 'react';
import { connect } from 'react-redux';


class NewPasswordFormBare extends React.PureComponent {
  public render() {
    return (
      <div>Hello</div>
    )
  }
}

export const NewPasswordForm = connect()(NewPasswordFormBare);
