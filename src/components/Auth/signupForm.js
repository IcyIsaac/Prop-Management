import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from "../textLink";

class SignupForm extends Component {
    render() {
        return (
            <form className='sign-up-form'>
                <FormTitle className='sign-up-form_title' text='New User'/>

                <Field 
                    className='sign-up-form_fullname' 
                    placeholder='Enter Your Full Name'  
                    name='fullname' 
                    type='email'
                    title="Full Name"
                    component={FormInput}
                />    
            
                <Field 
                    className='sign-up-form_unit' 
                    placeholder='Enter Unit #'  
                    name='unit' 
                    type='text'
                    title="Unit #"
                    component={FormInput}
                />
            
                <Field 
                    className='sign-up-form_email' 
                    placeholder='Enter Email'  
                    name='email' 
                    type='email'
                    title="Email"
                    component={FormInput}
                />
            
                <Field 
                    className='sign-up-form_password' 
                    placeholder='Enter Password'  
                    name='password' 
                    type='password'
                    title="Password"
                    component={FormInput}
                />
            
                <Field 
                    className='sign-up-form_create-account' 
                    name='createaccounr' 
                    type='submit'
                    title="Create Account"
                    component={FormButton}
                />
                <div className='sign-up-form_text-links'>
                    <TextLink to='/signin' text='Already Registered? Login'/>
                </div>
            
            </form>
        );
    }
} 

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm)

export default SignupForm;