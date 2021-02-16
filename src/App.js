import React from 'react';
import { AuthProvider } from "./context/AuthProvider"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import TransactionContextProvider from './context/TransactionContext';
import Index from './components/Index';

function App() {

  return (
    <Router>
      <AuthProvider>
        <TransactionContextProvider>
          <Switch>
            <PrivateRoute exact path="/expense" component={Index} />
            <Route path="/" component={Login} />
          </Switch>
        </TransactionContextProvider>
      </AuthProvider>
    </Router>
  )
}

export default App;
