import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import PartForm from './components/Part/PartForm';
import ContractForm from './components/Contract/ContractForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/parts" component={PartForm} />
        <Route path="/contracts" component={ContractForm} />
      </Router>
    </div>
  );
}

export default App;
