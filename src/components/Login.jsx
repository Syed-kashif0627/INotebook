import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import noteContext from '../context/notes/noteContext';

const Login = () => {
    const context=useContext(noteContext);
    const {host}=context;

    const [credential,setCredentials]=useState({email:"",password:""});
    const navigate=useNavigate();//same as useHistory Name changed in newer versions

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const url=`${host}/api/auth/login`
        const res=await fetch(url,{
          method:'POST',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify({email:credential.email,password:credential.password}),
        })
        const json=await res.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            navigate('/')
        }
        else{
            alert("Invalid Credentials!! Enter Valid User id or Password")
        }
    }
    const handleChange=(e)=>{
        setCredentials({...credential,[e.target.name]:e.target.value })
    }

    return (
    <div className='container my-3'>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={handleChange} type="email" className="form-control" value={credential.email} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={handleChange} type="password" className="form-control" value={credential.password} name='password' id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
    </div>
    )
}

export default Login
