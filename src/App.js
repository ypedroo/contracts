import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home} />
        {/* <Route path="/parts" component={PartList} />
        <Route path="/contracts" component={ContractList} /> */}
    </div>
  );
}

export default App;
