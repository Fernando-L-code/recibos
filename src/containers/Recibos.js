import React, { useContext, useEffect, useState } from 'react';
import Table from '../components/Table';
import AppContext from '../context/AppContext';
import config from '../config';
import Buttons from '../components/Buttons';

const Recibos = () => {
  const page=config.page.recibos;

  const {data } = useContext(AppContext);
  const { recibos } = data;


    const columnas = [{
        name: "clave de Recibo",
        selector: "clA_RECIBO",
        sortable: true
    }, {
        name: "Proveedor",
        selector: "proveedor",
        sortable: true
    }, {
        name: "Monto",
        selector: "monto",
        sortable: true
    }, {
        name: "Moneda",
        selector: "moneda",
        sortable: true
    }, {
        name: "Fecha",
        selector: "fecha",
        sortable: true
    }, {
        name: "Comentario",
        selector: "comentario",
        sortable: true,
        right: true
    }]
    return ( 
        <div>
            <h1>recibos</h1>
            <Buttons page={page}/>
            <Table columnas={columnas} data={recibos} title={page}/>
        </div>

    );
};

export default Recibos;