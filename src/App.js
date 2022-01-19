import React, { useState } from 'react'

import LoginForm from './components/LoginForm';

function App (){

  const adminUser={
     user: "Tester1",
     password:"123"
    }

    const [user,setUser] = useState({username:""});
    const [error,setError] = useState("");

    const Login = details=>{

      if(details.username == adminUser.user && details.password == adminUser.password){
        setUser({
          username:details.username,
        })
      }else{
        alert("details dont match");        
      }
    }
  return (
    <div className="App">
        {(user.username !== "")?(
            <div className='welcome'>

              <h2>Welcome!!, <span>{user.username}</span> </h2>
              <button>Logout</button>
            </div>     
          ):(
            <LoginForm Login={Login} error={error}/>
            )

        } 
    </div>
  );
}

export default App;
