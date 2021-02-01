import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PasswordEntry } from './components/PasswordEntry';
import { savedPasswordsSelector } from './state/selectors';

import styles from './Container.module.css';

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
      <div className={styles.Container}>
        {
          savedPasswords.map((entry, index) => (
            <PasswordEntry
              login={entry.login}
              name={entry.name}
              key={index}
              notes={entry.notes}
            />
          ))
        }
      </div>
    );
  }
}

export const PasswordContainer = connect(mapStateToProps)(PasswordContainerBare) as any as React.ComponentClass<IPublicProps>;
