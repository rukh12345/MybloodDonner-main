import React from 'react';

const Header = () => {
    return (
        <>
            <div className='container'>

                <h1 className='text-danger  hb mb-2'>Blood Doners </h1>

               
                <marquee className="marq" >
                    <div className="box"> Demo@gmail.com
                        0000112211...
                        ADRESS:................ ,Fax:........
                    </div>
                    

                    <ul className='socila-link d-flex align-items-center '>
                        <li className='mr-4 '><a><i class="bi bi-instagram"></i></a></li>
                        <li className='mr-4 '><a><i class="bi bi-facebook"></i></a></li>
                        <li className='mr-4 '><a><i class="bi bi-twitter-x"></i></a></li>
                        <li className='mr-4 '><a><i class="bi bi-tiktok"></i></a></li>
                        <li className=''><a> <i className='bi bi-whatsapp'></i></a></li>
                    </ul>

               
                    </marquee>

                
            </div>
        </>
    );
}

export default Header;
