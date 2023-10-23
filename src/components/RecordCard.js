import React from 'react';

const RecordCard = ({Records}) => {
    const {name,city,categary,bloodgroup, email,  pho, adres}=Records
    return (


        <>
        <div className="col-12 col-md-6 col-lg-3 py-2">
        <div className="card bg-info"  >
        <div className="card-body"> 
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{city}</p>
        <p className="card-text">{categary}</p>
        <p className="card-text">{bloodgroup}</p>
        <p className="card-text">{email}</p>
        <p className="card-text">{pho}</p>
        <p className="card-text">{adres}</p>

        <button className='btn btn-success '><a href='#'><i className='bi bi-whatsapp'></i></a>whatsapp</button>
        <button className='btn btn-danger my-2'><a href='#'><i className='bi bi-instagram'></i></a>instagram</button> 
         </div>
        </div>
  </div>
            {Records.filter((e)=> e === bloodgroup)}




                
//   const Fillter = (event)=>{
//     Records(data.filter(f => f.bloodgroup.toLowerCase().toLowerCase(event.target.value)))

  }


        </>
    );
}

export default RecordCard;
