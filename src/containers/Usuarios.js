import React, { useContext } from 'react';
import Buttons from '../components/Buttons';
import Table from '../components/Table';
import config from '../config';
import AppContext from '../context/AppContext';

const Usuarios = () => {

  const page=config.page.Usuarios;

  const {data } = useContext(AppContext);
  const { usuarios } = data;

    const columnas =[
        { 
          name: "Clave de Usuario",
          selector:"clA_USUARIO",
          sortable:true
        },
        { 
          name: "Nombre de Usuario",
          selector:"noM_USUARIO",
          sortable:true
        },
        { 
          name: "password",
          selector:"password",
          sortable:true
        }
     ]
    return (
        <div>
          <h1>usuarios</h1>
          <div>
        <Buttons page={page}/>
        </div>
        <div>
          <Table columnas={columnas} data={usuarios} title={page}/>
        </div>   
        </div>
        );
};

export default Usuarios;
