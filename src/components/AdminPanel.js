import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userService } from "../_services/user.service";
import { accessCodeService } from "../_services/accessCode.service";
import { Row, Col, Table, Button, Modal } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { accessCodeActions } from "../_actions/accessCode.actions";
import { publicationActions } from "../_actions/publication.actions";
import { publicationService } from "../_services/publication.service";

const AdminPanel = () => {
	const [users, setUsers] = useState("");
	const [accessCodes, setAccessCodes] = useState("");
	const [publications, setPublications] = useState("");
	const [submitted, setSubmitted] = useState(false);

    const submitting = useSelector(state => state.accessCodes.registering);
	const currentUser = useSelector((state) => state.authentication.user)
	const loggedIn = useSelector((state) => state.authentication.loggedIn)
	const dispatch = useDispatch();
	const [showAccessCodes, setShowAccessCodes] = useState(false);
	const [showPublications, setShowPublications] = useState(false);
	const [target, setTarget] = useState(null);
	const deleteUser = id => {
		userService.delete(id)
	}
	const deleteAccessCode = id => {
		accessCodeService.delete(id)
	}
	const deletePublication = id => {
		publicationService.delete(id)
	}
	const getUsers = () => {
		userService.getAll()
		.then(
			(response) => {
			  setUsers(response.data);
			},
			(error) => {
			  const _users =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
	  
			  setUsers(_users);
				})
	}
	const getAccessCodes = () => {
		accessCodeService.getAll()
		.then(
			(response) => {
			  setAccessCodes(response.data);
			},
			(error) => {
			  const _accessCodes =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
	  
			  setAccessCodes(_accessCodes);
				})
	}
	const getPublications = () => {
		publicationService.getAll()
		.then(
			(response) => {
			  setPublications(response.data);
			},
			(error) => {
			  const _publications =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
	  
			  setPublications(_publications);
				})
	}
	const handleAddAccessCodeClick = (event) => {
		setShowAccessCodes(!showAccessCodes);
		setTarget(event.target);
	};
	const handlePublicationClick = (event) => {
		setShowPublications(!showPublications);
		setTarget(event.target);
	};
	const handleClose = () => {
		setShowPublications(false)
		setShowAccessCodes(false)
	}
		

	function handleSubmitAccessCode(values) {
		setSubmitted(true)
		setShowAccessCodes(false)
		if(values.name && values.schoolName && values.roleName){
			dispatch(accessCodeActions.submit(values))
		}
	}
	function handleSubmitPublication(values) {
		setSubmitted(true)
		setShowPublications(false)
		if(values.description && values.link && values.title){
			dispatch(publicationActions.submit(values))
		}
	}
	 

	return (
		<div className="container">
			<header className="jumbotron">
			<h2 className="text-center">Admin Panel</h2>
			</header>
			<Row className="justify-content-center">
				<h3 >Users</h3>
				<br></br>
			</Row>
			<Row>
				<Col>
						{!users ? <Button size="lg" onClick={getUsers}>Retrieve All Users</Button> :
							<Table striped bordered hover>
							<thead>
								<tr>
									<th>id</th>
									<th>Username</th>
									<th>Email</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>School</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => {
									return (
										<tr key={user.id}>
											<td>{user.id}</td>
											<td>{user.username}</td>
											<td>{user.email}</td>
											<td>{user.firstName}</td>
											<td>{user.lastName}</td>
											<td>{user.school}</td>
											<td><Button variant='danger' 
													onClick={() => { 
														if (window.confirm(`Are you sure you wish to delete the user ${user.username}?`)) 
															deleteUser(user.id) 
														} }>
													Delete
												</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
							</Table>
							}
				</Col>
			</Row>
			<hr></hr>
			<Row className="justify-content-center">
				<h3 >Access Codes</h3>
				<br></br>
			</Row>
			<Row>
				<Col>
						{!accessCodes ? <Button size="lg" onClick={getAccessCodes}>Retrieve Access Codes</Button> :
							<Table striped bordered hover>
							<thead>
								<tr>
									<th>id</th>
									<th>Code</th>
									<th>School</th>
									<th>Role</th>
								</tr>
							</thead>
							<tbody>
								{accessCodes.map((accessCode) => {
									return (
										<tr key={accessCode.id}>
											<td>{accessCode.id}</td>
											<td>{accessCode.name}</td>
											<td>{accessCode.schoolName}</td>
											<td>{accessCode.roleName}</td>
											<td><Button variant='danger' 
													onClick={() => { 
														if (window.confirm(`Are you sure you wish to delete the access code ${accessCode.name}?`)) 
															deleteAccessCode(accessCode.id) 
														} }>
													Delete
												</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
							</Table>
							}
				</Col>
				<Col>
					<Button size="lg" onClick={handleAddAccessCodeClick}>Add Access Code</Button>

					<Modal show={showAccessCodes}
						size="lg"
      					aria-labelledby="contained-modal-title-vcenter"
      					centered 
						onHide={handleClose}
					>
						<Modal.Header closeButton as="h3">Add An Access Code</Modal.Header>
						<Modal.Body>

							<Formik
								initialValues={{name: '', schoolName: 'Prince Georges County Public Schools', roleName: 'student'}}
								validationSchema={Yup.object({
									name: Yup.string()
									.required("Required"),
									schoolName: Yup.string() 
									.required("Required"),
									roleName: Yup.string() 
									.required("Required")
								})}
								onSubmit={(values) => {
									setTimeout(() => {
										handleSubmitAccessCode(values);
									}, 400)
								}}
								>
							<Form className="col-lg-5 offset-lg-3 ">
								<div className="text-center">

								</div>
								<div className="form-group">
									<label htmlFor="name">Code</label>
									<Field name="name" type="text">
										{ ({ 
										field, 
										meta: { touched, error } 
										}) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
										}
									</Field>
									<ErrorMessage name="name" className="is-invalid invalid-feedback" />
								</div>
								<div className="form-group">
									<label htmlFor="schoolName">School Name</label>
									<Field as="select" name="schoolName" type="text" >
										<option value="Prince Georges County Public Schools">Prince Georges County Public Schools</option>
										<option value="Alexandria City Public Schools">Alexandria City Public Schools</option>
									</Field>
									<ErrorMessage name="schoolName" />
								</div>
								<div className="form-group">
									<label htmlFor="roleName">Role Name</label><br></br>
									<Field as="select" name="roleName" type="text" >
										<option value="student">student</option>
										<option value="mentor">mentor</option>
										<option value="parent">parent</option>
										<option value="admin">admin</option>
									</Field>
									<ErrorMessage name="roleName" />
								</div>
								<div className="text-center">
									<button className="btn btn-primary centered" type="submit">
									{submitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
									Submit</button>
								</div>
							</Form>
							</Formik>
						</Modal.Body>
					</Modal>

				</Col>
			</Row>
			<hr></hr>
			<Row className="justify-content-center">
				<h3 >Publications</h3>
				<br></br>
			</Row>
			<Row>
				<Col>
						{!publications ? <Button size="lg" onClick={getPublications}>Retrieve Publications</Button> :
							<Table striped bordered hover>
							<thead>
								<tr>
									<th>id</th>
									<th>Title</th>
									<th>Description</th>
									<th>Link</th>
								</tr>
							</thead>
							<tbody>
								{publications.map((publication) => {
									return (
										<tr key={publication.id}>
											<td>{publication.id}</td>
											<td>{publication.title}</td>
											<td>{publication.description}</td>
											<td>{publication.link}</td>
											<td><Button variant='danger' 
													onClick={() => { 
														if (window.confirm(`Are you sure you wish to delete the publication ${publication.title}?`)) 
															deletePublication(publication.id) 
														} }>
													Delete
												</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
							</Table>
							}
				</Col>
				<Col>
					<Button size="lg" onClick={handlePublicationClick}>Add Publication</Button>

					<Modal show={showPublications}
						size="lg"
      					aria-labelledby="contained-modal-title-vcenter"
      					centered 
						onHide={handleClose}
					>
						<Modal.Header closeButton as="h3">Add A Publication</Modal.Header>
						<Modal.Body>

							<Formik
								initialValues={{title: '', description: '', link: ''}}
								validationSchema={Yup.object({
									title: Yup.string()
									.required("Required"),
									description: Yup.string() 
									.required("Required"),
									link: Yup.string() 
									.required("Required")
								})}
								onSubmit={(values) => {
									setTimeout(() => {
										handleSubmitPublication(values);
									}, 400)
								}}
								>
							<Form className="col-lg-5 offset-lg-3 ">
								<div className="text-center">

								</div>
								<div className="form-group">
									<label htmlFor="title">Title</label>
									<Field name="title" type="text">
										{ ({ 
										field, 
										meta: { touched, error } 
										}) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
										}
									</Field>
									<ErrorMessage name="title" className="is-invalid invalid-feedback" />
								</div>
								<div className="form-group">
									<label htmlFor="description">Description</label>
									<Field as="textarea" name="description" type="textarea" >
									</Field>
									<ErrorMessage name="description" />
								</div>
								<div className="form-group">
									<label htmlFor="link">Link</label><br></br>
									<Field name="link" type="text" >

										{ ({ 
										field, 
										meta: { touched, error } 
										}) => <input className={ touched && error ? "invalid form-control" : "form-control" } { ...field } />
										}
									</Field>
									<ErrorMessage name="link" />
								</div>
								<div className="text-center">
									<button className="btn btn-primary centered" type="submit">
									{submitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
									Submit</button>
								</div>
							</Form>
							</Formik>
						</Modal.Body>
					</Modal>

				</Col>
			</Row>

		</div>
	);
};

export default AdminPanel;