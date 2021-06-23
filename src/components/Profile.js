import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const Profile = () => {
	// console.log(useSelector(state => state.authentication.user))
	const currentUser = useSelector((state) => state.authentication.user)
	if (!currentUser){
		return <Redirect to="/login" />
	}
	return (
		<div className="container">
			<Card>
				<Card.Header as="h5">{currentUser.username} Profile</Card.Header>
				<Card.Body>
					<Card.Title>Username</Card.Title>
					<Card.Text className="text-left">{currentUser.username}</Card.Text>
					<hr></hr>
					<Card.Title>Name</Card.Title>
					<Card.Text className="text-left">{currentUser.firstName} {currentUser.lastName}</Card.Text>
					<hr></hr>
					<Card.Title>Email</Card.Title>
					<Card.Text className="text-left">{currentUser.email}</Card.Text>
					<hr></hr>
					<Card.Title>School System</Card.Title>
					<Card.Text className="text-left">{currentUser.school}</Card.Text>
					<hr></hr>
					<Card.Title>Membership Type</Card.Title>
					{currentUser.roles &&
			  			currentUser.roles.map((role, index) => 
						  <Card.Text className="text-left" key={index}>{role.charAt(5) + role.slice(6).toLowerCase()}</Card.Text>
						)}
					<hr></hr>

					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</div>
	  );
	};
	
	export default Profile;