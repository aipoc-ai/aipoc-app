import './App.css';
import './components/Navcomp';
import Navcomp from './components/Navcomp';
import Home from './components/Home'
import Tasklist from './components/Tasklist'

function App() {
  return (
    <div className="App">
      <Navcomp />
      <Home />
      <Tasklist />
    </div>
  );
}

export default App;
