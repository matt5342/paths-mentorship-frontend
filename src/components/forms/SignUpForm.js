import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/_actions/user.actions.js';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignUp() {

    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

	function handleSubmit(values) {
        setSubmitted(true);
        if (values.accessCode && values.firstName && values.lastName && values.username && values.password) {
            dispatch(userActions.register(values));
        }
    }

	return (
        <div className="container">
            <Formik
                initialValues={{accessCode: '',
					firstName: '', lastName: '',
					email: '', username: '', 
					password: '', confirmPassword: ''}}
                validationSchema={Yup.object({
					accessCode: Yup.string()
						.required("Required"),
					firstName: Yup.string()
						.max(30, "Must be 30 characters or less")
						.required("Required"),
					lastName: Yup.string()
						.max(30, "Must be 30 characters or less")
						.required("Required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
                    username: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required("Required"),
                    password: Yup.string() 
						.max(120, "Must be 120 characters or less")
						.min(8, "Must be at least 8 characters")
						.required("Required"),
					confirmPassword: Yup.string()
						.oneOf([Yup.ref('password'), null], "Passwords must match")
                })}
                onSubmit={(values) => {
                    setTimeout(() => {
                        handleSubmit(values);
                    }, 400)
                }}
                >
            <Form className="col-lg-5 offset-lg-3 ">
				<div className="text-center">
                    <h2 className="">Sign Up</h2>
					<p><small>If you are a program participant, check your email for an access code. 
						If you did not recieve an access code, please <a href="/contact">Contact Us</a>
					</small></p>
                </div>
                <div className="form-group">
                    <label htmlFor="accessCode">Access Code</label>
                    <Field name="accessCode" type="text">
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="accessCode" className="is-invalid invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text">
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="firstName" className="is-invalid invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text">
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="lastName" className="is-invalid invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email">
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input type="email" className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="email" className="is-invalid invalid-feedback" />
                </div>
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
                        }) => <input type="password" className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field name="confirmPassword" type="password" >
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input type="password" className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="confirmPassword" />
                </div>
				<div className="text-center">
                    <button className="btn btn-primary centered" type="submit">Submit</button>
                    <br></br><br></br>
                    <p>Already have an account? <a href="login">Log In</a></p>
                </div>
            </Form>
            </Formik>
        </div>
	)

}

export default SignUp;