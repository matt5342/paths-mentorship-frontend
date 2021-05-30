import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Program from './components/Program'


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
          
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
