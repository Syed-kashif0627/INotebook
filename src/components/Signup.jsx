import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import noteContext from '../context/notes/noteContext';

const Signup = () => {
  const context=useContext(noteContext);
  const {host,showAlert}=context;

  const [credential,setCredentials]=useState({email:"",password:"",name:"",cpassword:""});
  const navigate=useNavigate();//same as useHistory Name changed in newer versions

  const handleSubmit=async (e)=>{
      e.preventDefault();
      const url=`${host}/api/auth/createUser`
      const res=await fetch(url,{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify({name:credential.name,email:credential.email,password:credential.password,}),
      })
      const json=await res.json();
      console.log(json)
      if(json.success){
          localStorage.setItem('token',json.authtoken);
          navigate('/')
          showAlert("Account Created!!",'success')
      }
      else{
          showAlert("User With this email already exist!!",'danger')
      }
  }
  const handleChange=(e)=>{
      setCredentials({...credential,[e.target.name]:e.target.value })
  }

  return (
    <div className='container my-3'>
    <div className="form-container" style={{margin: '20px'}}>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">User Name</label>
            <input onChange={handleChange} type="text" className="form-control mod" name='name' id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={handleChange} type="email" className="form-control mod" name='email' id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={handleChange} type="password" className="form-control mod"  name='password' id="password" minLength={5} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input onChange={handleChange} type="password" className="form-control mod"  name='cpassword' id="cpassword" minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary" >Create Account</button>
    </form>
    </div>
    </div>
  )
}

export default Signup
