 
import './App.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   

 

const  App=() => {

  const [title,SetTitle]= useState('');
  const [user,SetUser]= useState('');
  const [users,SetUsers]= useState([]);

  const apiUrl= process.env.REACT_APP_BASE_URL;

  const GetAll=()=>{
    axios.get(apiUrl+"/User/All").then( result =>{
      SetUser(result.data.all);
    })
 }

   const GetUserSql=()=>{
      axios.get(apiUrl+"/User/GetUserSql").then( result =>{
        SetUsers(result.data.users);
      })
   }

  useEffect(()=>{
    SetTitle("   goozzzzzzzzzzzz :");
    GetAll();
    GetUserSql();

  }, [user]);



  return (
    <div className="yaser">
       {
         title + " " + user
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
