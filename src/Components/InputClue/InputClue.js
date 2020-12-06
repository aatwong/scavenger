import React, { Component } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import classes from './InputClue.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { getGifUrl } from '../../Services/GifGenerator'

class InputClue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSuccessModal: false,
            showFailureModal: false,
            gifUrl: ''
        }
        this.finishThisClue = this.finishThisClue.bind(this);
        this.dismissFailureModal = this.dismissFailureModal.bind(this);
    }

    validateCode = (input) => {
        if (this.props) {
            const isValid = input.replace(/\W/g, '').toUpperCase() === this.props.currentClue.code.toUpperCase();
            if (isValid) {
                // alert('Correct!');
                // this.props.finishCurrentClue()
                // console.log(getGifUrl('correctCode'));
                this.setState({gifUrl: getGifUrl('correctCode')}, () => {
                    this.setState({showSuccessModal: true})
                })
                return true;
            } else {
                this.setState({gifUrl: getGifUrl('incorrectCode')}, () => {
                    this.setState({showFailureModal: true})
                })
                // alert('Nope')
                return false;
            }
        }
    }

    finishThisClue() {
        this.setState({showSuccessModal: false});
        this.setState({gifUrl: ''})
        this.props.finishCurrentClue();
    }

    dismissFailureModal() {
        this.setState({showFailureModal: false});
        this.setState({gifUrl: ''})
    }

    render() {
        let inputForm = null;
        if (!this.props.isFinished) {
            inputForm = (
                <div className={classes.form}>
                    <Formik
                        initialValues={{ clueCode: '' }}
                        onSubmit={(values, actions) => {
                        setTimeout(() => {
                            this.validateCode(values.clueCode);
                            // console.log(this.props.currentClue);
                            // alert(JSON.stringify(values, null, 2));
                            // actions.setSubmitting(false);
                            actions.resetForm()
                        }, 300);
                        }}
                    >
                        {(props: FormikProps<any>) => (
                        <Form>
                            <Field name="clueCode" placeholder="enter code" />
                            &nbsp;
                            <Button type="submit">Submit</Button>
                        </Form>
                        )}
                    </Formik>
                </div> 
            );
        } else {
            inputForm = null;
        }

      return (
          <div>
            {inputForm}
            <Modal
                    show={this.state.showSuccessModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Correct</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <iframe src={this.state.gifUrl} frameBorder='0' scrolling='no' width='100%' height='250'></iframe>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={() => {this.finishThisClue()}}>
                        Next
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.showFailureModal}
                    onHide={() => {}}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>That's a blunder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <iframe src={this.state.gifUrl} frameBorder='0' scrolling='no' width='100%' height='250'></iframe>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={() => {this.dismissFailureModal()}}>
                        Wait, one sec: I wanna try again
                    </Button>
                    </Modal.Footer>
                </Modal>
          </div>
            
        )
    }
}

export default InputClue
