import React, { useState } from 'react'

const LoginForm =({Login,error})=>  {
    const [details,setDetails] =useState({username: "",password: ""});

    const submitHandler = e =>{
        e.preventDefault ();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form_login'>
                <h2>Login</h2>
                {(error !=="")?
                    (<div className='error'>{error}</div>)
                    :""
                }
                <div className='form-group'>
                    <label htmlFor='usuario'>Usuario:</label>
                    <input type="text" name="usuario" id="usuario" 
                        onChange={e=>setDetails({...details,username: e.target.value })} 
                        value={details.username}
                    />
                </div>  
                 <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="current-password" id="password" name="password" required
                        onChange={e=>setDetails({...details,password: e.target.value })} 
                        value={details.password}
                    />
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
