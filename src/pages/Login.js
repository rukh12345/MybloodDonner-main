import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = ()=> {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const saveData = async (e) =>{
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login",{
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
          }
        })
        result = await result.json();
        console.log(result);
        alert("You have successfully been registered...!!")
        navigate('/users');    
     }
    
    return(
        <>
        <NavBar/>
        <div className="container  my-5  modal-lg border border-dark  w-55 bg-info    bg1">
        
         <h1>Login</h1>
    <form   className="form-group form-group-lg)">
        
  <div className="form-group row mt-5 ">
    
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" name=" email" value={email}  placeholder="Email" onChange={(e) =>setEmail(e.target.value)} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" name=" password" value={password}   placeholder="Password" onChange={(e) =>setPassword(e.target.value)} />
    </div>
  </div>
  
  <div className="form-group row">
    <div className="col-sm-2"></div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" htmlFor="gridCheck1">
          Confirm you are not Rabort!
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-12">
      <button  onClick={saveData}type="submit" className="btn btn-primary my-1 col-12">Login</button>
       <Link  to={'http://localhost:3000/register'} type="#" className="btn btn-primary my-1 col-12"> 
        register </Link>
    </div>
  </div>

  
  <Link   className="my-3"> forgrt Password</Link>
</form>

        </div>
        
    )
    
        </>
    
    );
  };

export default Login;
