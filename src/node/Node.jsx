 
import './Node.css';
import { useEffect, useState } from 'react';
 import axios  from 'axios';   
 

const  Node=() => {

  const [title,SetTitle]= useState('');
  const [comment,SetComment]= useState('');
  const [comments,SetComments]= useState([]);

  const apiUrl=  "http://localhost:5000";

  const GetAll=()=>{
    axios.get(apiUrl+"/GetAll").then( result =>{
      SetComments(result.data);
    })
 }

  const GetByID=()=>{
      axios.get(apiUrl+"/GetByID").then( result =>{
        SetComment(result.data.comments);
      
      })
   }

   const Welcome=()=>{
    axios.get( apiUrl ).then( result =>{
      SetTitle("    WelCome  Node :" + result.data);
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
  }, [comments]);



  return (
    <div className="div">
       {
         title 
       }
       <button onClick={OnClick} className='css-button'> crate Table </button>
        <div className='data'>
           {
             
            comments
                    
           }
        </div>
     
    </div>
  );
}


export default Node;
