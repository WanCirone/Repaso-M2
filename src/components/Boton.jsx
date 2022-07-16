import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from "../redux/actions"; //Importo la action creator
import { useDispatch } from "react-redux";

function Boton(props) { // { getUsers: () => dispatch(getUsers()) }
    //const dispatch = useDispatch();

    function traerUsuarios() {
        //dispatch(getUsers())
        props.getUsers()
    }
    function crearUsuario() {}

    return (
        <>
            { props.text === 'Traer Usuarios' ? 
                <Link to='/users'>
                    <button onClick={traerUsuarios}>{props.text}</button>
                </Link>
            :
                <Link to='/new'>
                    <button onClick={crearUsuario}>{props.text}</button>
                </Link>
            }
        </>
    )
}

// function mapDispatchToProps(dispatch) {
//     return { // <-- objeto que serian mis props
//         getUsers: () => dispatch(getUsers())
//     }
// }


//connect(fn consumir estado, fn que me permite dispachar acciones)
export default connect(null, { getUsers })(Boton);
//export default connect(null, mapDispatchToProps)(Boton);