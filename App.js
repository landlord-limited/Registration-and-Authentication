import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
