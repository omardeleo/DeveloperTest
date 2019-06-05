import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import logo from './Assets/logo.png';
import './App.css';
import Plan from './Plan';
import Data from './Data/data.js';
import Form from './Form';

const plans = [];

for (let plan in Data) {
  let planOption = Data[plan];
  plans.push(
    <Plan
      key={plan}
      name={planOption.name}
      price={planOption.price}
      credits={planOption.credits}
    />
  )
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {plans}
        <Switch>
          <Route path="/forms/:formId" component={Form} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;


