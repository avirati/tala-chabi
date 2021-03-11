import React from 'react';
import {
  Modal,
  ModalProps,
  Button,
} from 'react-bootstrap';

interface IProps extends ModalProps {
  heading: string;
}

class Popup extends React.PureComponent<IProps> {
  public render() {
    const { heading } = this.props;
    return (
      <Modal
        {...this.props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            this.props.children
          }
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export class NewPasswordPopup extends Popup {}
