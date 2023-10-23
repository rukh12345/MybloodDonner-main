import React from 'react';

const ChatBox = () => {
    return (
        <>

            <h2 className='text-danger my-2'>Our Penal</h2>
<div className="row row-cols-1 row-cols-md-2 g-4 ">
  <div className="col">
    <div className="card bg-secondary"  >
      <img src="../images/drteam/dr1.png" className=" rounded-circle  a1 " height={150} width={150}     alt="..." />
        <div className="card-body"> 
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-success '><a href='#'><i className='bi bi-whatsapp'></i></a>whatsapp</button>
        <button className='btn btn-danger ml-2'><a href='#'><i className='bi bi-instagram'></i></a>instagram</button> 
         </div>
        </div>
  </div>
  <div className="col">
    <div className="card bg-secondary"  >
      <img src="../images/drteam/dr4.png" className=" rounded-circle  a1 " height={150} width={150}     alt="..." />
        <div className="card-body"> 
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-success '><a href='#'><i className='bi bi-whatsapp'></i></a>whatsapp</button>
        <button className='btn btn-danger ml-2'><a href='#'><i className='bi bi-instagram'></i></a>instagram</button> 
         </div>
        </div>
  </div>
  <div className="col my-2">
    <div className="card bg-secondary"  >
      <img src="../images/drteam/dr3.jpg" className=" rounded-circle  a1 " height={150} width={150}     alt="..." />
        <div className="card-body"> 
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-success '><a href='#'><i className='bi bi-whatsapp'></i></a>whatsapp</button>
        <button className='btn btn-danger ml-2'><a href='#'><i className='bi bi-instagram'></i></a>instagram</button> 
         </div>
        </div>
  </div>
  <div className="col my-2">
    <div className="card bg-secondary"  >
      <img src="../images/drteam/dr2.jpg" className=" rounded-circle a1  " height={150} width={150}     alt="..." />
        <div className="card-body"> 
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-success '><a href='#'><i className='bi bi-whatsapp'></i></a>whatsapp</button>
        <button className='btn btn-danger ml-2'><a href='#'><i className='bi bi-instagram'></i></a>instagram</button> 
         </div>
        </div>
  </div>
</div>
        </>
    );
}

export default ChatBox;




