import React,{useState,useEffect} from 'react';


const LoginHome = ({setLoginUser}) => {
    return (
        <>
        <div className="container modal-lg border border-dark bg1 my-5   w-55" >HomePage
        <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        
    </div> 
        </>
    );
}

export default LoginHome;
