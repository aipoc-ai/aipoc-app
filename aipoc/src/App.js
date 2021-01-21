import './App.css';
import './components/Navcomp';
import Navcomp from './components/Navcomp';
import Home from './components/Home'
import Tasklist from './components/Tasklist'
import  About from './components/About'

function App() {
  return (
    <div className="App">
      <Navcomp />
      <Home />
      <Tasklist />
      <About />
    </div>
  );
}

export default App;
