import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { default as data } from '../data/DataBlood';
import Records from "./Records";



const NavBar = () => {


  const Search = ()=>{
    const [data, setData]= useState([])
    const [Records, setRecord]= useState([])
   useEffect (()=>{
      axios.get('http://localhost:3000/pro')
      .then(res=> {
       setData.apply(res.data)
       setRecord(res.Records)

    })
      .catch(err => console.log(err));
    },[data])
  
  }

  const Fillter = (event)=>{
  
    Records(data.filter(f => f.bloodgroup.toLowerCase().toLowerCase(event.target.value)))

  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark text-white">
        <Link className="navbar-brand text-danger" to="#"> <img src="../images/gallery/about.jpg" width={45} className="rounded-circle   mr-2" alt="" />BLOOD BUDDIES</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/abt">About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/dnt">Donate <span className="sr-only">(current)</span></Link>
            </li>
            {/* <li className="nav-item active">
              <Link className="nav-link" to="db">BloodData <span className="sr-only">(current)</span></Link>
            </li> */}
           
            <li className="nav-item active">
              <Link className="nav-link" to="/pro">Record <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                sigIn
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/login">LogIn</Link>
                <Link className="dropdown-item" to="/register">Register</Link>
              </div>
            </li>



            <li className="nav-item active">
              <Link className="nav-link" to="/cont">Contact Us <span className="sr-only">(current)</span></Link>
            </li>


          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" onChange={Fillter}  type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning my-2 my-sm-0" onChange={Fillter}   type="submit">Search</button>
          </form>
        </div>
      </nav>

    </div>
  );
};
export default NavBar