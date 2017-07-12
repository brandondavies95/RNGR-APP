import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';


const submit = (values) => {
  console.log('submit inside form');
  console.log(values);
};

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div className="input-row">
    <label>{label}</label>
    <br />
    <input {...input} type={type} />
    {touched && error &&
    <span className="error">{error}</span>}
  </div>
  );

const LoginFormFunc = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submit)}>
    <Field name="firstName" label="First Name" component={renderField} type="text" />
    <Field name="lastName" label="Last Name" component={renderField} type="text" />
    <Field name="email" label="Email" component={renderField} type="email" />
    <Field name="password" label="Password" component={renderField} type="password" />
    <button type="submit">Sign Up</button>
  </form>
);

const LoginForm = reduxForm({
  form: 'contact',
})(LoginFormFunc);


export default LoginForm;
