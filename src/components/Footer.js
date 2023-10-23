import React from 'react';

const Footer = () => {
    return (
        <>

{/**************** Footer  Starts Here *************** */}
<footer id="contact" className="container-fluid my-5 ">
  <div className="container">
    <div className="row content-ro">
      <div className="col-lg-4 col-md-12 footer-contact">
        <h2 className='text-success'>Contact Informatins</h2>
        <div className="address-row">
          <div className="icon">
            <i className="fas fa-map-marker-alt" />
          </div>
          <div className="detail">
            <p>ADRESS---------------------
                --------------------
            </p>
          </div>
        </div>
        <div className="address-row">
          <div className="icon">
            <i className="far fa-envelope" />
          </div>
          <div className="detail">
            <p>FAX-------- HERE <br /> EMAIL ----HERE</p>
          </div>
        </div>
        <div className="address-row">
          <div className="icon">
            <i className="fas fa-phone" />
          </div>
          <div className="detail">
            <p>PHONE NUMBER HERE<br /> MOBILE NUMBER   HERE</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 footer-links">
        <div className="row no-margin ">
          <h2  className='text-success'>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>eatures</li>
          </ul>
        </div>
        <div className="row no-margin mt-1">
          <h2 className="m-t-2  text-success">More Products</h2>
          <ul>
            <li>CAGTIGARIES</li>
            <li>BLOOD TEST</li>
            <li>LIBORTARY TEXT</li>
            <li>MADICAL INSURENCE</li>
          </ul>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-12   footer-form my-4 ">
        <div className="form-card">
          <div className="form-title">
            <h4 className='text-success'>Quick Detail</h4>
          </div>
          <div className="form-body card text-white bg-dark">
            <input type="text" placeholder="Enter Name" className="form-control" />
            <input type="text" placeholder="Enter Mobile no" className="form-control" />
            <input type="text" placeholder="Enter Email Address" className="form-control" />
            <input type="text" placeholder="Blood Group" className="form-control" />
            <button className="btn btn-sm btn-success w-100">Send Request</button>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copy">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <p>Copyright © <a href="https://www.smarteyeapps.com">HealthCareBloodDonater.com</a> | All right reserved.</p>
        </div>

        <div>
       
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54438.98005859693!2d74.25018681745017!3d31.484690520327216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904106691c4c7%3A0xfb24ddaf1e7bc6c2!2sModel%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2ssa!4v1697122993821!5m2!1sen!2ssa" width={350} height={65} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

     </div>




        <div className="col-lg-4 col-md-6 socila-link">
          <ul>
          <li><a><i class="bi bi-instagram"></i></a></li>
          <li><a><i class="bi bi-facebook"></i></a></li>
          <li><a><i class="bi bi-twitter-x"></i></a></li>
          <li><a><i class="bi bi-tiktok"></i></a></li>
          <li><a> <i className='bi bi-whatsapp'></i></a></li>
          </ul>
        </div>
       
      </div>
    </div>
  </div>
</footer>





        </>
    );
}

export default Footer;
