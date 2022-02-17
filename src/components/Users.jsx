import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Users(props) {
    return (
        <div>
            { props.allUsers ?  props.allUsers.map(u => {
                return (
                    <div>
                        <Link to={`/users/${u.id}`}>
                            <h3>{u.username}</h3>
                        </Link>
                        <ul>
                            <li>{u.name}</li>
                            <li>{u.email}</li>
                            <li>{u.phone}</li>
                            <li>{u.company.name}</li>
                        </ul>
                    </div>
                )
            }) :  <h1>No hay usuarios</h1> }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        allUsers: state.users
    }
}

export default connect(mapStateToProps, null)(Users);