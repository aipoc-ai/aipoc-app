import './App.css';
import './components/Navcomp';
import Navcomp from './components/Navcomp';
import Home from './components/Home'
import Tasklist from './components/Tasklist'
import  About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navcomp />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tasklist">
          <Tasklist />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
