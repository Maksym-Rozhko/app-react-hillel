import React from 'react';
import axios from "axios";
import TextField from "../TextField/TextField";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from 'redux-form'
import { Container, Button} from "semantic-ui-react";


function Login({handleSubmit, valid, submitting, login}) {

    if (login) {
        return <Redirect to='/order' />;
    }

    return (
        <Container>
            <form className='form-auth' onSubmit={handleSubmit}>
                <Field name="email" label='Email' placeholder='Enter your mail' component={TextField}/>
                <Field name="password" label='Password' placeholder='Enter your password' type='password' component={TextField}/>
                <Button type="submit" disabled={!valid && !submitting} primary>
                    Log in
                </Button>
            </form>
        </Container>
    );
}

const validate = values => {
    const errors = {};
    const regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regExp.test(values.email)) {
        errors.email = 'Incorrect mail!'
    }
    if (!values.password) {
        errors.password = 'Please enter your password!'
    }
    return errors;
};

const asyncValidate = async values => {
    if (!values.email) return;
    const response = await axios.get(`http://localhost:3001/api/login/is_exist?email=${values.email}`);
    if (response.data.is_exist) {
        throw { email: 'This email is already taken!' }
    }
};

export default reduxForm({
    form: 'login',
    validate,
    asyncValidate,
    asyncBlurFields: ['email'],
})(Login);
