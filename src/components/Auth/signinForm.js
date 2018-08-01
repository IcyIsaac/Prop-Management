import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className='sign-in-form_title' text='Login'/>
                <Field className='sign-in-form_email' component={FormInput} name='email' type='email'/>
            </form>
        )
    }
} 

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm)

export default SigninForm;