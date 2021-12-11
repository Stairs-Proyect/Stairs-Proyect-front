import {gql} from '@apollo/client';

const GET_USUARIOS = gql `{
    query Usuarios{
        _id
        nombre
        apellido
        correo
        estado
        identificacion
        rol
        }
    }
`;

export {GET_USUARIOS};  
