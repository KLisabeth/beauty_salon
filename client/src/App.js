import React, {useState} from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/sidebar';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle=()=>{
      setIsOpen(!isOpen)
  }

  return (
    <Router>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Header toggle={toggle}/>
    <Footer/>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
