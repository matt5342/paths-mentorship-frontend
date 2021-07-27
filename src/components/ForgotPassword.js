import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions/user.actions';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ForgotPassword() {

    const [submitted, setSubmitted] = useState(false);
    const loggingIn = useSelector(state => state.authentication.loggingIn);

    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, [dispatch]);

    function handleSubmit(values) {
        setSubmitted(true);
        dispatch(userActions.login(values.email));
    }
    
    return (
        <div className="container ">
            
            <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
					confirmEmail: Yup.string()
						.oneOf([Yup.ref('email'), null], "Emails must match")
                })}
                onSubmit={(values) => {
                    setTimeout(() => {
                        handleSubmit(values);
                    }, 400)
                }}
                >
            <Form className="col-lg-5 offset-lg-3 ">
                <div className="text-center">
                    <h2 className="">Reset Your Password</h2>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="text">
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="email" className="is-invalid invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmEmail">Confirm Email Address</label>
                    <Field name="confirmEmail" type="confirmEmail" >
                        { ({ 
                        field, 
                        meta: { touched, error } 
                        }) => <input type="confirmEmail" className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
                        }
                    </Field>
                    <ErrorMessage name="confirmEmail" />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary centered" type="submit">
                    {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Submit</button>
                    <br></br><br></br>
                    <p>Already have an account? <a href="login">Login</a></p>
                    <p>Don't have an account? <a href="signup">Sign up</a></p>
                </div>
            </Form>
            </Formik>
        </div>
	)
}

export default ForgotPassword;
