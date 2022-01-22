import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
const Table = ({columnas,data,title}) => {

  const paginacionOpciones ={
      rowPerPageText:'Filas por pagina',
      rangeSeparator:'de',
      selectAllRowsItem:true,
      selectAllRowItemText: 'Todos'
  }

 
  return <div>
      <DataTable 
        columns={columnas}
        data={data}
        title={title}
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight='600px'
      />          
  </div>;
};

export default Table;
