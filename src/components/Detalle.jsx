import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from '../redux/actions';

function Detalle({userDetail, getDetail}) {
    const id = useParams(); 

    useEffect(() => {
        getDetail(id)
    }, [id, getDetail])

    return (
        <div>
            { userDetail ? 
                    <div>
                        Llegó el usuarios
                    </div>
                : <h1>No hay detalle</h1>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userDetail: state.userDetail
    }
}

export default connect(mapStateToProps, { getDetail })(Detalle);