 
import './Log.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   
 

const  Log=() => {

  const [title,SetTitle]= useState('');
  const [log,SetLog]= useState('');
  const [logs,SetLogs]= useState([]);

  const apiUrl=  "http://localhost:8000";


   const Welcome=()=>{
    axios.get( apiUrl ).then( result =>{
      SetTitle("    WelCome  Node PostgreSQL :" + result.data);
    })
 }

 
const OnClickInsert=()=>{
  
  let num   =Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
     
 axios.post(apiUrl+"/Insert",{ userID: num }).then( result =>{
     SetTitle("    WelCome  Node PostgreSQL Insert"  );
  })
}
const OnClickGetAll=()=>{
 axios.get(apiUrl+"/GetAll").then( result =>{
   SetLogs(result.data);
   SetTitle("    WelCome  Node PostgreSQL GetAll  "  );
 })
}

 const OnClick=()=>{
   axios.get(apiUrl+"/Create").then( result =>{
     SetTitle("    WelCome  Node  PostgreSQL :  " + result.data );
  })
 }

  useEffect(()=>{
    Welcome();
    
  }, [logs]);



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
             
            logs
                    
           }
        </div>
     
    </div>
  );
}


export default Log;
