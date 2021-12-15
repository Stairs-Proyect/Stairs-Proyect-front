import React from 'react';
import {useParams, Link} from 'react-router-dom';


const EditarUsuario = () => {

    const {_id} = useParams();
    return (
        <div> editar usuario{_id}</div>
    )
}

export default EditarUsuario;
