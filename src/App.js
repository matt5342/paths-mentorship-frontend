import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Program from './components/Program'
import NavBottom from './components/NavBottom'
import ContactForm from './components/ContactUs'
import Opportunities from './components/Opportunities';


function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <br></br><br></br>
      <br></br><br></br><br></br>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/programs" component={Program} />
          <Route exact path="/opportunities" component={Opportunities} />
          {/* <Route exact path="/contact" component={ContactForm} /> */}
          
        </Switch>

      </BrowserRouter>
      <NavBottom/>
    </div>
  );
}

export default App;
