import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { default as DataBlood, default as data } from '../data/DataBlood';
import NavBar from './NavBar';
import RecordCard from './RecordCard';
import Slider from './Slider';

const Records = () => {



   const Search = ()=>{
      const [data, setData]=useState([])
      const [Records, setRecord]= useState([])
      useEffect (()=>{
        axios.get('http://localhost:3000/pro')
        .then(res=> {
         setData.apply(res.data)
         setRecord(res.Records)

      })
        .catch(err => console.log(err));
      },[])
    
    }


    const Fillter = (event)=>{
      Records(data.filter(f => f.city.toLowerCase().toLowerCase(event.target.value)))

    }









    return (
        <>
         <NavBar/>   
         <Slider/>
         All Records
         <div className='container'>
            <div className='row'>
         {
            DataBlood.map(Records =>{
               return(
                <>
                <RecordCard key={Records.id} Records={Records}/>
                
                </>
               )
            })
         }
            </div>
         </div>
        </>
    );
}


export default Records;
