import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Account, Home, Inventory, LoginPassport, Logout } from './Pages/';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';



function App() {


  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/login'> <LoginPassport /> </Route>
        <Route exact path='/logout'> <Logout /> </Route>
        <PrivateRoute exact path='/inventory'> <Inventory /> </PrivateRoute>
        <PrivateRoute exact path='/account'> <Account /> </PrivateRoute>
        <Route exact path='*'> <Home /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
