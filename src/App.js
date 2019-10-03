import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import PartForm from './components/Part/PartForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/parts" component={PartForm} />
        {/* <Route path="/contracts" component={ContractList} /> */}
      </Router>
    </div>
  );
}

export default App;
