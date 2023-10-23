import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar';

const Register = () => {
  const navigate = useNavigate();
  const [Fname, setName] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  
  const [bloodgroup, setBoodgroup] = useState('');


const saveData = async (e)=>{
  e.preventDefault();
  let result = await fetch("http://localhost:5000/register",{
    method: 'POST',
    body: JSON.stringify({ Fname, Lname,email,password, Cpassword,city,  phone, bloodgroup}),
    headers: {
      'Content-Type': 'application/json'
}
  
  })
   result = await result.json();
    console.log(result);
    alert("You have successfully been registered...!!")
    navigate('/users');    
 }

    return (
        <>
       <NavBar/>
       <div  className="container  my-5  modal-lg border border-dark bg1 ">
       <h1 className='my-3'>Register</h1>
    <form>
  <div className="form-row mt-3">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">First Name:</label>
      <input type="text" className="form-control" id="inputEmail4" name="Fname" value={Fname} placeholder="First Name" onChange={(e) =>setName(e.target.value)}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Last Name:</label>
      <input type="text" className="form-control" id="inputPassword4" name="Lname" value={Lname}  placeholder="Last Name" onChange={(e) =>setLname(e.target.value)}/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Email:</label>
    <input type="email" className="form-control" id="inputAddress" name=" email" value={email}  placeholder="Email" onChange={(e) =>setEmail(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress1">Password:</label>
    <input type="Password" className="form-control" id="inputAddress1" name=" password" value={password}   placeholder="password" onChange={(e) =>setPassword(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Confirm Password:</label>
    <input type="Password" className="form-control" id="inputAddress2" name="Cpassword" value={Cpassword}  placeholder="Confirm Password" onChange={(e) =>setCpassword(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress3">City:</label>
    <input type="text" className="form-control" id="inputAddress3" name="city" value={city}  placeholder="City" onChange={(e) =>setCity(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress4 ">Phone:</label>
    <input type="number" className="form-control" id="inputAddress4" name=" phone" value={phone}  placeholder="Phone" onChange={(e) =>setPhone(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress5">Blood Group</label>
    <input type="text" className="form-control" id="inputAddress5" name="bloodgroup" value={bloodgroup}  placeholder="Blood Group" onChange={(e) =>setBoodgroup(e.target.value)} />
  </div>
  <button onClick={saveData}type="submit" className="btn btn-primary my-3 col-12">Register</button>
 
</form>
</div>
    
        </>
    );
};

export default Register;
