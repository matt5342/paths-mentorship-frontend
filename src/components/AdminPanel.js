import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../_services/user.service";
import { Row, Col, Table, Button, Modal } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { history } from "../_helpers/history";
import { Link } from 'react-router-dom';


const AdminPanel = () => {
	const [content, setContent] = useState("");
	const currentUser = useSelector((state) => state.authentication.user)
	const loggedIn = useSelector((state) => state.authentication.loggedIn)

	// if (!loggedIn || !currentUser.roles.includes("ROLE_ADMIN")){
	// 	// history.push("/login")
	// 	return <Redirect to="/login" />
	// }
	const redirect = () => {
		console.log("here")
		return <Redirect to="/login" />
	  }

	const deleteUser = id => {
		console.log("in delete")
		// userService.delete(id)
	}
	const getUsers = () => {
		userService.getAll()
		.then(
			(response) => {
			  setContent(response.data);
			},
			(error) => {
			  const _content =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
	  
			  setContent(_content);
				})
	}

	

	return (
		<div className="container">
			{(!loggedIn || !currentUser.roles.includes("ROLE_ADMIN")) ? redirect() : null}
			<header className="jumbotron">
			<h2 className="text-center">Admin Panel</h2>
			</header>
			<Row>
				<Col>
						{!content ? <Button size="lg" onClick={getUsers}>Get Users</Button> :
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
								{content.map((user) => {
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
		</div>
	);
};

export default AdminPanel;