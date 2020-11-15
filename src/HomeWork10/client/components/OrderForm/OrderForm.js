import React from 'react';
import axios from "axios";

import TextField from "../TextField/TextField";
import { reduxForm, Field } from 'redux-form'
import { Container, Button, Divider } from "semantic-ui-react";

function BookForm({ handleSubmit, valid, submitting }) {
    return (
        <Container>
            <form className='form-auth' onSubmit={handleSubmit}>
                <div className="form-title">
                    Sing in
                </div>
                <Field name="email" label='Email' placeholder='Enter your mail' component={TextField}/>
                <Field name="password" label='Password' placeholder='Enter your password' type='password' component={TextField}/>
                <Divider />
                <div className="form-title">
                    Booking
                </div>
                <Field name="first_name" label='First name' placeholder='Enter your first name' component={TextField}/>
                <Field name="last_name" label='Last name' placeholder='Enter your last name' component={TextField}/>
                <Field name="tel" label='Tel:' placeholder='+380931076049' component={TextField}/>
                <Field name="card" label='Card №' placeholder='XXXX-XXXX-XXXX-XXXX' component={TextField}/>
                <Field name="nightStay" label='Night stay' placeholder='Enter the nights of stay' component={TextField}/>
                <Field name="adults" label='Adults' placeholder='Enter the number of adults' component={TextField}/>
                <Divider />
                <Button type="submit" disabled={!valid && !submitting} primary>
                    Create booking
                </Button>
            </form>
        </Container>
    );
}

const validate = values => {
    const errors = {};
    const telRegExp = /^(\+[0-9]{1,3}|0)[0-9]{3}( ){0,1}[0-9]{7,8}\b/;
    const cardRegExp = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/; 
    const regExpEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regExpEmail.test(values.email)) {
        errors.email = 'Incorrect mail!'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.first_name) {
        errors.first_name = 'Required'
    }
    if (!values.last_name) {
        errors.last_name = 'Required'
    }
    if (!values.tel) {
        errors.tel = 'Required'
    } else if (!telRegExp.test(values.tel)) {
        errors.tel = 'Incorrect phone number'
    }
    if (!values.card) {
        errors.card = 'Required'
    } else if (!cardRegExp.test(values.card)) {
        errors.card = 'Incorrect card number!'
    }
    if (!values.nightStay) {
        errors.nightStay = 'Required'
    }
    if (!values.adults) {
        errors.adults = 'Required'
    }
    return errors;
};

const asyncValidate = async values => {
    if (!values.email && !values.password) return;
    const responseEmail = await axios.get(`http://localhost:3001/api/login/is_exist?email=${values.email}`);
    if (!responseEmail.data.is_exist) {
        throw { email: 'Incorrect mail!' }
    }
};


const warn = values => {
    const warnings = {};
    if(values.first_name) {
        if(values.first_name.length <= 1) {
            warnings.first_name = 'Too short name!';
        }
    }
    if(values.last_name) {
        if(values.last_name.length <= 1) {
            warnings.last_name = 'Too short last name!';
        }
    }
    return warnings;
};

export default reduxForm({
    form: 'order',
    validate,
    warn,
    asyncValidate,
    asyncBlurFields: ['email'],
})(BookForm);