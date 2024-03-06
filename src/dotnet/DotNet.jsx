 
import './DotNet.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   

 

const  DotNet=() => {

  const [title,SetTitle]= useState('');
  const [user,SetUser]= useState('');
  const [users,SetUsers]= useState([]);

  const apiUrl= "http://192.168.1.103:80/api";

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
    SetTitle("    WelCome  DotNet:");
    GetAll();
    GetUserSql();

  }, [user]);



  return (
    <div className="div">
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


export default DotNet;
