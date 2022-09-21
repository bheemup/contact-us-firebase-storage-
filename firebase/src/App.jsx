import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "../src/App.css";
import Use from './Use';


function App() {
  const [data,setData] =useState({
    name:"",
    email:"",
    mobile:"",
    query:"",
  })

  let name,value;
  const getdata =(event)=>{
       name = event.target.name;
       value =event.target.value;

       setData({...data,[name]:value})
       console.log(data)
  }

  const postdata = async(e)=>{
      e.preventDefault();
      
      const {name,email,mobile,query}=data;
      if(name=="" || email =="" || mobile=="" || query=="Write here your Query"){
        alert("Fill the details")
      }else{

    const res= await fetch("https://fir-6bed8-default-rtdb.firebaseio.com/userdata.json",
    {
      method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
           name,
           email,
           mobile,
           query,
        })
    })

    if(res){
      setData({
        name:"",
        email:"",
        mobile:"",
         query:"Write here your Query",
      })
      alert("Data Sent Successfully")
    }
  }

  }

   const [server,setServer]=useState();
   var count =1;
  useEffect(()=>{
    fetch("https://fir-6bed8-default-rtdb.firebaseio.com/userdata.json")
    .then((res)=>res.json())
    .then((res)=>setServer(res))
  },[postdata])
  let store=[];
  for(let key in server){
    store.push(server[key])
  }
 

  return (
    <div className='con'>
      <h1>Contact Us(Firebase Project)</h1>

      <form method='POST'>

        <div>
          <span>Name :</span>
        <input className='input100' 
        name='name'
        onChange={getdata}
           type="text" 
           autoComplete='off'
          placeholder='type your name' 
          value={data.name}
          
          />
        
         </div>

        <div>
          <span>Email : </span>
        <input className='input100'
        name='email'
        onChange={getdata}
           type="email" 
           autoComplete='off'
           placeholder='Enter your Email'
           value={data.email} />

        </div>

        <div>
          <span>Mobile :</span>
        <input className='input100' 
        name='mobile'
        onChange={getdata}
        type="number" 
        autoComplete='off'
        placeholder='Enter your Mobile Number' 
        value={data.mobile}/>
        </div>

        <br />
  
        <textarea placeholder='Write here your Query' name="query" id="" cols="30" rows="10" 
        value={data.query}
        onChange={getdata}
        >
          
        </textarea>
        <br />
        <br />


        <button onClick={postdata} className="button-64" role="button">
          <span className="text">Submit</span>
          </button>

       
        <br />
        <br />
        <br />



      </form>


<div>
  {
    <table>
      <tr>
        <td>Srial</td>
        <td>Name</td>
        <td>Email</td>
        <td>mobile</td>
        <td>Query</td>
      </tr>
      {store.map((el)=> <Use item={el} count1={count++} />)}

    </table>
    
  }
</div>

    
    </div>
  )
}

export default App
