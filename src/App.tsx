import * as React from 'react'
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
// import NavLink from './components/NavLink'
import Index from './pages/Index/Index'
import NewReimbursement from './pages/NewReimbursement/NewReimbursement'

import './App.css'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Kulukorvauskone</h1>
            <p>Kulukorvauskoneella korvaat minkä tahansa laskun itsellesi (hyvää syytä vastaan). Täysin elektronisesti!</p>
            <ul>
              <NavLink to="/"><li>Etusivu</li></NavLink>
              <NavLink to="/new"><li>Uusi kulukorvaus</li></NavLink>
              <NavLink to="/list"><li>Kaikki kulukorvaukset</li></NavLink>
            </ul>
          </header>
          <main>
            <Route exact={true} path="/" component={Index} />
            <Route path="/new" component={NewReimbursement} />
          </main>
          <footer>
            Reimbursement machine 2018
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
