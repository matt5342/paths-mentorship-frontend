import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {

	
	return (
		<Formik
			initialValues={{username: '', password: ''}}
			validationSchema={Yup.object({
				username: Yup.string()
				.max(20, "Must be 20 characters or less")
				.required("Required"),
				password: Yup.string() 
				.max(120, "Must be 120 characters or less")
				.required("Required")
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400)
			}}
			>
		<Form>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<Field name="username" type="text">
					{ ({ 
				       field, 
				       meta: { touched, error } 
  					  }) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
  					}
  				</Field>
				<ErrorMessage name="username" className="is-invalid invalid-feedback" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<Field name="password" type="password" >
					{ ({ 
				       field, 
				       meta: { touched, error } 
  					  }) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
  					}
				</Field>
				<ErrorMessage name="password" />
			</div>
	
			<button className="btn btn-primary" type="submit">Submit</button>
		  </Form>
		</Formik>
	)
}

export default LoginForm;