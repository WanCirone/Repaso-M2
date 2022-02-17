import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';

function Boton(props) {

    function traerUsarios() {
        props.getUsers()
    }

    return (
        <>
            <Link to='/users'>
                <button onClick={traerUsarios}>Traer usuarios</button>
            </Link>
        </>
    )
}

// function mapDispatchToProps(dispatch) {
//     return {
//         getUsers: () => dispatch(getUsers())
//     }
// }

export default connect(null, { getUsers })(Boton);