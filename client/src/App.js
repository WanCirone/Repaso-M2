import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Users from './components/Users';
import Detail from './components/Detalle.jsx';
import Form from './components/Form';
import Nav from './components/Navbar';

function App() {
  return (
    <>
    <Nav/>
    <Switch>
      <Route exact path='/users'>
        <Users/>
      </Route>
      <Route path='/users/:id'>
        <Detail/>
      </Route>
      <Route path='/new'>
        <Form/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
