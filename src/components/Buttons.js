import React from 'react';
import { useContext } from 'react/cjs/react.production.min';
import swal from 'sweetalert';
import AppContext from '../context/AppContext';

const Buttons = ({page}) => {
    const { requestDelete,requestPost} = useContext(AppContext);

 
    const handlerAgergar=()=>{
        swal({
            text: '¿inserte valor a agregar?',
            content: "input",
            button: {
            text: "Search!",
            closeModal: false,
            },
        }).then(value=>{
            requestPost(page,value)
        })
        .then(
            swal("Registro agregado", {
                icon: "success",
              })
        ).catch(err => {
            if (err) {
                swal("Registro Eliminado", {
                    icon: "warning",
                  })
            } else {
                swal.stopLoading();
                swal.close();
            }
        });
    }
    const handlerDelete=()=>{
        swal({
            text: '¿Que registro desea eliminar?',
            content: "input",
            button: {
            text: "Search!",
            closeModal: false,
            },
        }).then(value=>{
            requestDelete(page,value)
        })
        .then(
            swal("Registro Eliminado", {
                icon: "success",
              })
        ).catch(err => {
            if (err) {
                swal("Registro no encontrado", {
                    icon: "warning",
                  })
            } else {
                swal.stopLoading();
                swal.close();
            }
        });
    }

    return (
        <div>
            <button type="button" onClick={()=>handlerAgergar()}>
                Agregar registro
            </button>           
            <button type="button" onClick={()=>handlerDelete()}>
                Eliminar registro
            </button>
        </div>
    );
};

export default Buttons;
