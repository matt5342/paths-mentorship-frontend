import './App.css';
import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Program from './components/Program'
import NavBottom from './components/NavBottom'
import ContactForm from './components/ContactUs'
import Opportunities from './components/Opportunities';
import StudentsParents from './components/StudentsParents';
import Login from './components/Login';
// import SignUp from './components/SignUp';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import Impact from './components/Impact';
import Profile from './components/Profile';
// import AdminPanel from './components/AdminPanel';


function App() {

  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.authentication.user)
	const loggedIn = useSelector((state) => state.authentication.loggedIn)

  useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Navigation />
      <br></br><br></br><br></br>
      <div className="container">
        {alert.message &&
          <div className={`alert ${alert.type}`}><br></br>{alert.message}</div>
        }
        

      </div>

      <br></br><br></br>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/programs" component={Program} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/students-parents" component={StudentsParents} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile">
            {loggedIn ? <Profile/> : <Redirect to="/login"/>}
          </Route>
          <Route exact path="/admin">
            {loggedIn && currentUser.roles.includes("ROLE_ADMIN") ? <AdminPanel /> : <Redirect to="/login"/>}  
          </Route> 
          
        </Switch>

      </Router>
      <NavBottom/>
    </div>
  );
}

export default App;
