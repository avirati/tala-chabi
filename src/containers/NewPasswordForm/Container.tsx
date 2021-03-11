import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap';

import { categories } from 'globalConstants';
import {
  generateRandomPassword,
  IRandomizerConfig,
} from 'utils/Randomizer';
import { waitForSeconds } from 'utils/Common';

interface IState extends IRandomizerConfig {
  website: string;
  login: string;
  password: string;
  category: string;
  passwordCopied: boolean;
}

class NewPasswordFormBare extends React.PureComponent<{}, IState> {
  public state: IState = {
    website: '',
    login: '',

    password: '',
    passwordLength: 20,
    useLetters: true,
    useNumbers: true,
    useSymbols: false,
    useUppercaseChars: true,

    category: '',
    passwordCopied: false,
  }
  public render() {
    const {
      category,
      login,
      password,
      passwordLength,
      useLetters,
      useNumbers,
      useSymbols,
      useUppercaseChars,
      website,
      passwordCopied,
    } = this.state;

    const copyButtonRef = React.createRef<HTMLButtonElement>();

    return (
      <Form>
        <Form.Group controlId='formBasicWebsite'>
          <Form.Control
            type='text'
            placeholder='Website (e.g. https://google.com)'
            value={website}
            onChange={(e) => this.updateState('website', e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicLogin'>
          <Form.Control
            type='text'
            placeholder='Login (e.g. you@example.com)'
            value={login}
            onChange={(e) => this.updateState('login', e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <InputGroup>
            <Form.Control
              type='text'
              placeholder='Enter or Generate'
              value={password}
              onChange={(e) => this.updateState('password', e.target.value)}
            />
            <InputGroup.Append>
              <Button variant='outline-info' onClick={this.refreshPassword}>⟳</Button>
              <Button variant='dark' onClick={this.copyPasswordToClipboard} ref={copyButtonRef}>
                {
                  passwordCopied ? 'Copied' : 'Copy'
                }
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formBasicPasswordLength'>
          <Form.Label>Password Length ({this.state.passwordLength})</Form.Label>
          <Form.Control
            type='range'
            value={passwordLength}
            min='8'
            max='40'
            onChange={(e) => this.updateState('passwordLength', Number(e.target.value))}
          />
          <Form.Check
            type='checkbox'
            label='Letters'
            checked={useLetters}
            onClick={(e) => this.updateState('useLetters', (e.target as HTMLInputElement).checked)}
          />
          <Form.Check
            type='checkbox'
            label='Include Uppercase Characters'
            checked={useUppercaseChars}
            onClick={(e) => this.updateState('useUppercaseChars', (e.target as HTMLInputElement).checked)}
          />
          <Form.Check
            type='checkbox'
            label='Numbers'
            checked={useNumbers}
            onClick={(e) => this.updateState('useNumbers', (e.target as HTMLInputElement).checked)}
          />
          <Form.Check
            type='checkbox'
            label='Symbols'
            checked={useSymbols}
            onClick={(e) => this.updateState('useSymbols', (e.target as HTMLInputElement).checked)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicCategory'>
          <Form.Control as='select' value={category} onChange={(e) => this.updateState('category', e.target.value)}>
            <option value='' selected disabled>Select a Category</option>
            {
              categories.map((value, index) => (
                <option
                  value={value}
                  key={index}
                >
                  {value}
                </option>
              ))
            }
          </Form.Control>
        </Form.Group>
      </Form>
    )
  }

  private updateState = async (field: keyof IState, value: any) => {
    this.setState({
      ...this.state,
      [field]: value,
    });
    await waitForSeconds(0.1);
    this.refreshPassword();
  }

  private refreshPassword = () => {
    const {
      passwordLength,
      useLetters,
      useNumbers,
      useSymbols,
      useUppercaseChars,
    } = this.state;

    const generatedPassword = generateRandomPassword({
      passwordLength,
      useLetters,
      useNumbers,
      useSymbols,
      useUppercaseChars,
    });

    this.setState({
      password: generatedPassword,
    });
  }

  private showCopiedMessage = async (durationInSeconds: number) => {
    this.setState({
      passwordCopied: true,
    });
    await waitForSeconds(durationInSeconds);
    this.setState({
      passwordCopied: false,
    });
  }

  private copyPasswordToClipboard = async () => {
    const { password } = this.state;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(password);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = password;

      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      document.execCommand('copy');

      document.body.removeChild(textArea);
    }
    await this.showCopiedMessage(1);
  }
}

export const NewPasswordForm = connect()(NewPasswordFormBare);
