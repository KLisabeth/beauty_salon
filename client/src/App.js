import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './screens/Layout';
import About from './screens/About';
import Layout from './screens/Layout';



function App() {
  return (
    <Router>
    <Layout/>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
