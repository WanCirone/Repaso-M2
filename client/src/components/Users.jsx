import { connect } from "react-redux";
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Users({users}) { //undefined
    //const users = useSelector(state => state.users)

    return (
        <div>
            { users && users.map(u => {
                return (
                    <div key={u.id}>
                        <Link to={`/users/${u.id}`}>
                            <h4>{u.username}</h4>
                        </Link>
                        <ul>
                            <li>{u.name}</li>
                            <li>{u.email}</li>
                            <li>{u.phone}</li>
                            <li>{u.company.name}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

function mapStateToProps(state) { //Recibe el state de redux
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Users);