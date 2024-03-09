 
import './Log.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   
 

const  Log=() => {

  const [title,SetTitle]= useState('');
  const [log,SetLog]= useState('');
  const [logs,SetLogs]= useState([]);

  const apiUrl=  "http://109.122.224.141:9000";

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

 const OnClick=()=>{
   axios.get(apiUrl+"/Create").then( result =>{
     console.log(result);
  })
 }

  useEffect(()=>{
    Welcome();
    GetAll();
  }, [logs]);



  return (
    <div className="div">
       {
         title 
       }
       <button onClick={OnClick} className='css-button'> crate Table </button>
        <div className='data'>
           {
             
            logs
                    
           }
        </div>
     
    </div>
  );
}


export default Log;
