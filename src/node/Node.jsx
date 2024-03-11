 
import './Node.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   
 

const  Node=() => {

  const [title,SetTitle]= useState('');
  const [comment,SetComment]= useState('');
  const [comments,SetComments]= useState([]);

  const apiUrl=  "http://localhost:5000";

   

   const Welcome=()=>{
    axios.get( apiUrl ).then( result =>{
      SetTitle("    WelCome  Node :" + result.data);
    })
 }

 const OnClick=()=>{
   axios.get(apiUrl+"/Create").then( result =>{
    SetTitle("    WelCome  Node  :  " + result.data );
  })
 }
 const OnClickInsert=()=>{
  let num   =Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
  axios.post(apiUrl+"/Insert",{ UserID: num }).then( result =>{
      SetTitle("    WelCome  Node Insert"  );
   })
 }
 const OnClickGetAll=()=>{
  axios.get(apiUrl+"/GetAll").then( result =>{
    SetComments(result.data);
    SetTitle("    WelCome  Node GetAll  "  );
  })
 }

  useEffect(()=>{
    Welcome();
   
  }, [comments]);



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
             
            comments
                    
           }
        </div>
     
    </div>
  );
}


export default Node;
