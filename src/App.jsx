 
import './App.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   

 

const  App=() => {

  const [title,SetTitle]= useState('');
  const [users,SetUsers]= useState([]);

  const apiUrl= process.env.REACT_APP_BASE_URL;

   const GetUser=()=>{
      axios.get(apiUrl+"/User/GetUserSql").then( result =>{
        SetUsers(result.data.users);
      })
   }

  useEffect(()=>{
    SetTitle(" hi ansible devops docker  :) ");
    GetUser();

  }, []);



  return (
    <div className="yaser">
       {
         title
       }
        <div className='fullname'>
            {
             users.map( user=>{
               return(
                    <div>
                      {
                       user
                      }
                    </div>
                  )
             })
          }
        </div>
     
    </div>
  );
}


export default App;
