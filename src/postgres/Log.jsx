 
import './Log.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   
 

const  Log=() => {

  const [title,SetTitle]= useState('');
  const [log,SetLog]= useState('');
  const [logs,SetLogs]= useState([]);

  const apiUrl=  "http://localhost:8000";

  const GetAll=()=>{
    axios.get(apiUrl+"/GetAll").then( result =>{
      SetLogs(result.data);
    })
 }

  const GetByID=()=>{
      axios.get(apiUrl+"/GetByID").then( result =>{
        SetLog(result.data.comments);
      
      })
   }


   const Welcome=()=>{
    axios.get( apiUrl ).then( result =>{
      SetTitle("    WelCome  Node PostgreSQL :" + result.data);
    })
 }

 
const OnClickInsert=()=>{
  
 axios.get(apiUrl+"/Insert").then( result =>{
     SetTitle("    WelCome  Node PostgreSQL Insert"  );
  })
}
const OnClickGetAll=()=>{
 axios.get(apiUrl+"/GetAll").then( result =>{
   SetComments(result.data.comments);
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
