import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Program from './components/Program'
import NavBottom from './components/NavBottom'
import ContactForm from './components/ContactUs'
import Opportunities from './components/Opportunities';
import StudentsParents from './components/StudentsParents';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import Impact from './components/Impact';


function App() {

  return (
    <div className="wrapper">
      <Navigation />
      <br></br><br></br>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/programs" component={Program} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/students-parents" component={StudentsParents} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          
        </Switch>

      </BrowserRouter>
      <NavBottom/>
    </div>
  );
}

export default App;
