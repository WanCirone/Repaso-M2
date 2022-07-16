import React from 'react';
import Boton from './components/Boton';
import { Route, Switch } from 'react-router-dom'; 
import Users from './components/Users';
import Detail from './components/Detail';
import Form from './components/Form';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Boton text='Traer Usuarios'/>
        <Boton text='Crear Usuario'/>
      </Route>
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
