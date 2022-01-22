import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import config from '../config';
import AppContext from '../context/AppContext';
import swal from 'sweetalert';
import Buttons from '../components/Buttons';
const Monedas = () => {
  const page=config.page.monedas;

  const {data} = useContext(AppContext);
  const { monedas } = data;

 const columnas =[
    { 
      name: "clave de moneda",
      selector:"clA_MONEDA",
      sortable:true
    },
    { 
      name: "Moneda",
      selector:"noM_MONEDA",
      sortable:true
    }
 ]



  return (
    <div>
      <h1>monedas</h1>
      <div>
      <Buttons page={page}/>
      </div>
      <div>
        <Table columnas={columnas} data={monedas} title={page}/>
      </div>   

    </div>
    );
};

export default Monedas;
