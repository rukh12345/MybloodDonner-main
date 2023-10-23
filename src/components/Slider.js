import React, { useState } from "react";
import { Link } from "react-router-dom";
import Records from "./Records";

const Slider = () => {


  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide  "
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
          <li data-target="#carouselExampleCaptions" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/slider/1p.jpeg"
              className="d-block w-100"
              height={400}
              alt="Slider"
            />
            <div className="carousel-caption d-none d-md-block">
            <div className=" vbh">
            <Link  to={'http://localhost:3000/register'} className="btn btn-info  bounceInUp "> Book Appointment </Link>
            <Link to={'http://localhost:3000/cont'} className="btn btn-info  bounceInUp ml-2"> Contact US </Link>
          </div>

            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../images/slider/2p.jpg"
              className="d-block w-100"
              height={400}
              alt="Slider"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-danger">Donate Blood & Save a Life</h3>
              <div className=" vbh">
              <Link   to={'http://localhost:3000/register'} className="btn btn-info  bounceInUp "> Book Appointment </Link>
              <Link  to={'http://localhost:3000/cont'} className="btn btn-info  bounceInUp ml-2"> Contact US </Link>
            </div>

            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../images/slider/slide-02.jpg"
              className="d-block w-100"
              height={400}
              alt="Slider"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-danger">Donate Blood & Save a Life</h1>
              <p className=" bounceInLeft text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                justo neque, <br />
                aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu
                metus, mattis <br />
                sed sagittis at, sagittis quis neque. Praesent.
              </p>

              <div className=" vbh">
              <Link   to={'http://localhost:3000/register'}  className="btn btn-info  bounceInUp "> Book Appointment </Link>
              <Link to={'http://localhost:3000/cont'}  className="btn btn-info  bounceInUp ml-2"> Contact US </Link>
            </div>

            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../images/slider/slide-03.jpg"
              className="d-block w-100"
              height={400}
              alt="Slider"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-danger">Donate Blood & Save a Life</h1>
              <p className=" bounceInLeft text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                justo neque, <br />
                aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu
                metus, mattis <br />
                sed sagittis at, sagittis quis neque. Praesent.
              </p>
               <div className=" vbh">
              <Link   to={'http://localhost:3000/register'} className="btn btn-info  bounceInUp "> Book Appointment </Link>
              <Link  to={'http://localhost:3000/cont'} className="btn btn-info  bounceInUp ml-2"> Contact US </Link>
            </div>



            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};
export default Slider;
