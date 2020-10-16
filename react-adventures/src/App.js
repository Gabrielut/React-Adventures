import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router> 
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
        </Router>
   
    </div>
  );
}

export default App;
