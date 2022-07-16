import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetail } from "../redux/actions";

function Detail({ getDetail, detail }) {
    const { id } = useParams(); // Retorna un objeto
    //console.log(id)

    useEffect(() => {
       getDetail(id) 
    }, [id, getDetail])

    return (
        <>
            { detail ? 
                <div>
                    USUARIO
                </div>
                : <h4>No hay detalle</h4>
            }
        </>
    )
}

function mapStateToProps(state) {
    return {
        detail: state.detail
    }
}

export default connect(mapStateToProps, { getDetail })(Detail)