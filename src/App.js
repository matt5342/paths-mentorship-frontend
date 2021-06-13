import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Program from './components/Program'
import NavBottom from './components/NavBottom'
import ContactForm from './components/ContactUs'
import Opportunities from './components/Opportunities';
import StudentsParents from './components/StudentsParents';
import LogIn from './components/LogIn';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import Impact from './components/Impact';
import Profile from './components/Profile';
import { history } from "./helpers/history";
import { clearMessage } from "./actions/message";
import { logout } from "./actions/auth";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

function App() {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      // dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div className="wrapper">
      <Router history={history}>
      <Navigation />
      <div className="container">
        

      </div>
      
      <br></br><br></br>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/programs" component={Program} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/students-parents" component={StudentsParents} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/profile" component={Profile} />
          
        </Switch>

      <NavBottom/>
      </Router>
    </div>
  );
}

export default App;
