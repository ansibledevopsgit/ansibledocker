 
import './Golang.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   
 

const  Golang=() => {

  const [title,SetTitle]= useState('');
  const [users,SetUsers]= useState([]);

const apiUrl=  "http://localhost:9000";

   

const Welcome=()=>{
    axios.get( apiUrl ).then( result =>{
      SetTitle("    WelCome  Golang  : " + result.data);
      SetUsers(result.data);
    })
 }

 const OnClick=()=>{
   axios.get(apiUrl+"/create").then( result =>{
    SetTitle("    WelCome  Golang  Create : " + result.data );
    SetUsers(result.data);
  })
 }
 const OnClickInsert=()=>{
      let num   =Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
     
      axios.post(apiUrl+"/insert",{ userID: num }).then( result =>{
        SetTitle("    WelCome  Golang Insert "  );
        SetUsers(result.data);
      })
 }
 
 const OnClickGetAll=()=>{
  axios.get(apiUrl+"/getall").then( result =>{
    SetTitle("    WelCome  Golang GetAll  "  );
    SetUsers(result.data);
   
  })
 }

  useEffect(()=>{
    Welcome();
   
  }, []);



  return (
    <div className="div">
       {
         title 
       }
       <button onClick={OnClick} className='css-button'> crate Table </button>
       <button onClick={OnClickInsert} className='css-button'> Insert   </button>
       <button onClick={OnClickGetAll} className='css-button'>   Get All </button>
        <div className='data'>
           {
             
             users
                    
           }
        </div>
     
    </div>
  );
}


export default Golang;
