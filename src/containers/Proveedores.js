import React, { useContext } from 'react';
import Buttons from '../components/Buttons';
import Table from '../components/Table';
import config from '../config';
import AppContext from '../context/AppContext';

const Proveedores = () => {

  const page=config.page.Proveedores;

  const {data } = useContext(AppContext);
  const { Proveedores } = data;

  const columnas =[
    { 
      name: "clave de Proveedor",
      selector:"clA_PROVEEDOR",
      sortable:true
    },
    { 
      name: "Proveedor",
      selector:"noM_PROVEEDOR",
      sortable:true
    }
 ]
  return (
    <div>
      <div>
        <Buttons page={page}/>
      </div>
      <div>
        <Table columnas={columnas} data={Proveedores} title={page}/>
      </div>   
    </div>
    );
};

export default Proveedores;
