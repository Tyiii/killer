import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import './styles.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactsPage from './pages/ContactsPage';
//import WelcomePage from './pages/WelcomePage';

function App() {

  

  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/contacts/:id" exact>
          <ContactsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
