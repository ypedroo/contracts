import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Index';
import PartFormHook from './components/pages/PartForm/PartFormHook';
import ContractForm from './components/pages/ContractForm/ContractForm';
import { Container } from './styles/styles';

function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/parts" component={PartFormHook} />
          <Route path="/contracts" component={ContractForm} />
        </Router>
      </div>
    </Container>
  );
}

export default App;
