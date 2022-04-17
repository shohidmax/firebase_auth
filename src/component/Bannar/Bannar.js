import React from "react";


const Bannar = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/V3mx1nN/1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Wedding photography</h5>
              <p>
              Make a Memorable day By Wedding photography.
              </p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/kgxnX7V/2.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Model Photography</h5>
              <p>
              Make you as a Profesonal Model Artist By Model Photography.
              </p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/Kjy9M3V/3.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Birthday photography</h5>
              <p>
              Make a Memorable day With Birthday photography.
              </p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/ZXChCJF/4.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Picnic Photography</h5>
              <p>
                It's Awsome to make A Memorible Day.
              </p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Bannar;
