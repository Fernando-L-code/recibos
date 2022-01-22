import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

export const FormRecibo = ({page}) => {
    const [details,setDetails] =useState({
                                            proveedor: "",
                                            monto: "",
                                            fecha: "",
                                            comentario: "",
                                            password: ""});
    const { data,requestPost,requestPut} = useContext(AppContext);

    
    const submitHandler = e =>{
        e.preventDefault ();
        requestPost(page,details);
    }
    return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='form_recibo'>
                <h2>Login</h2>

                <div className='form-group'>
                    <label htmlFor='proveedor'>proveedor:</label>
                    <input type="text" name="proveedor" id="proveedor" 
                        onChange={e=>setDetails({...details,username: e.target.value })} 
                        value={details.username}
                    />
                </div>  
                <div className='form-group'>
                    <label htmlFor='monto'>monto:</label>
                    <input type="text" name="monto" id="monto" 
                        onChange={e=>setDetails({...details,username: e.target.value })} 
                        value={details.username}
                    />
                </div>  
                <div className='form-group'>
                    <label htmlFor='fecha'>fecha:</label>
                    <input type="date" name="fecha" id="fecha" 
                        onChange={e=>setDetails({...details,username: e.target.value })} 
                        value={details.username}
                    />
                </div>  
                <div className='form-group'>
                    <label htmlFor='comentario'>comentario:</label>
                    <input type="text" name="comentario" id="comentario" 
                        onChange={e=>setDetails({...details,username: e.target.value })} 
                        value={details.username}
                    />
                </div>  

                <input type="submit" value="Agregar"/>
            </div>
        </form>
    </div>);
};
