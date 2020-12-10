import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './screens/Home';


function App() {
  return (
    <Router>
    <Home/>
    </Router>
  );
}

export default App;
