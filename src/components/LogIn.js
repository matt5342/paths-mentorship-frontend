import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../_actions/user.actions';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {

    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleSubmit(values) {
        setSubmitted(true);
        if (values.username && values.password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(values.username, values.password, from));
        }
    }
    
    return (
        <div className="container ">
            
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
                onSubmit={(values) => {
                    setTimeout(() => {
                        handleSubmit(values);
                    }, 400)
                }}
                >
            <Form className="col-lg-5 offset-lg-3 ">
                <div className="text-center">
                    <h2 className="">Log In</h2>
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
                <div className="text-center">
                    <button className="btn btn-primary centered" type="submit">Submit</button>
                    <br></br><br></br>
                    <p>Don't have an account? <a href="signup">Sign up</a></p>
                </div>
            </Form>
            </Formik>
        </div>
	)
}

export default Login;
