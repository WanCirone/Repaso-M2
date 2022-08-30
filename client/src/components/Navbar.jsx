import Boton from './Boton';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav class="navbar" style={{"background-color" : "#AFB4FF"}}>
            <div class="container-fluid">
                <Link to='/'>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </Link>
                <Boton text='Traer Usuarios'/>
                <Boton text='Crear Usuario'/>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Nav;