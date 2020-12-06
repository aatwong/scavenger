import React, { Component } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';

class InputClue extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    validateCode = (input) => {
        if (this.props) {
            const isValid = input.replace(/\W/g, '').toUpperCase() === this.props.currentClue.code.toUpperCase();
            if (isValid) {
                alert('Correct!');
                this.props.finishCurrentClue()
                return true;
            } else {
                alert('Nope');
                return false;
            }
        }
    }

    render() {
      return (
        <div>
            <Formik
                initialValues={{ clueCode: '' }}
                onSubmit={(values, actions) => {
                setTimeout(() => {
                    console.log(this.validateCode(values.clueCode));
                    // console.log(this.props.currentClue);
                    // alert(JSON.stringify(values, null, 2));
                    // actions.setSubmitting(false);
                    actions.resetForm()
                }, 500);
                }}
            >
                {(props: FormikProps<any>) => (
                <Form>
                    <Field name="clueCode" placeholder="enter code" />
                    <button type="submit">Submit</button>
                </Form>
                )}
            </Formik>
        </div> 
        )
    }
}

export default InputClue
