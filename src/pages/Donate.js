import React from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const Donate = () => {
    return (
        <>
        <NavBar/>
        <Slider/>
           <h1>Donate:</h1> 

          <div>
  {/* ################# Donation Process Start Here #######################-*/}
  <section id="process" className="donation-care">
    <div className="container">
      <div className="row session-title">
        <h2>Donation Process</h2>
        <p>The donation process from the time you arrive center until the time you leave</p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="../images/gallery/g1.jpg" alt />
            <h4><b>1 - </b>Registration</h4>
            <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
            <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="../images/gallery/g2.jpg" alt />
            <h4><b>2 - </b>Seeing</h4>
            <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
            <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="../images/gallery/g3.jpg" alt />
            <h4><b>3 - </b>Donation</h4>
            <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
            <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="../images/gallery/g4.jpg" alt />
            <h4><b>4 - </b>Save Life</h4>
            <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis</p>
            <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button>
          </div> 
        </div>
      </div>
    </div>
  </section>
  {/*################### Our Blog Starts Here #######################-*/}
  <div id="blog" className="blog-container contaienr-fluid">
    <div className="container">
      <div className="session-title row">
        <h2>Latest Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit consectetur adipiscing elit.</p>
      </div>
      <div className="row news-row">
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="../images/blog/blog_01.jpg" alt />
            </div>
            <div className="detail">
              <h3>Latest News about Smarteye</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="../images/blog/blog_02.jpg" alt />
            </div>
            <div className="detail">
              <h3>Apple Launch its New Phone</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="../images/blog/blog_03.jpg" alt />
            </div>
            <div className="detail">
              <h3>About Windows 10 Update</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="../images/blog/blog_04.jpg" alt />
            </div>
            <div className="detail">
              <h3>Latest News about Smarteye</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


 
 <Footer/>



        </>
    );
}

export default Donate;
