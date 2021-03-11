import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Card } from './components/Card';
import { savedPasswordsSelector } from './state/selectors';

interface IStateProps {
  savedPasswords: ReturnType<typeof savedPasswordsSelector>
}

interface IPublicProps {

}

interface IProps extends IStateProps {}

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  savedPasswords: savedPasswordsSelector,
})

class PasswordContainerBare extends React.PureComponent<IProps> {
  public render() {
    const { savedPasswords = [] } = this.props;
    return (
      <>
        {
          savedPasswords.map((entry, index) => (
            <Card
              key={index}
              {...entry}
            />
          ))
        }
      </>
    );
  }
}

export const PasswordContainer = connect(mapStateToProps)(PasswordContainerBare) as any as React.ComponentClass<IPublicProps>;
