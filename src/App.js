import { Route } from 'react-router-dom';
import Boton from './components/Boton';
import Detalle from './components/Detalle';
import Users from './components/Users';

function App() {
  return (
    <>
    <Route exact path='/'>
      <Boton/>
    </Route>
    <Route exact path='/users'>
      <Users/>
    </Route>
    <Route path='/users/:id'>
      <Detalle/>
    </Route>
    </>
  );
}

export default App;


// Botón --> Traer usuarios --> /users
// /users --> Users --> todos los usuarios(redux)

// crear usuario --> component --> fomulario para crear usuario 

