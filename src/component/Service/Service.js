import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ id, img, name, detail, price }) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
            <h4>Id : {id}</h4>
          <h5 className="card-title">{name}</h5>
          <p className="card-text customdetail">{detail}
          <h5 className="card-title">$ {price}</h5>
          </p>
          <Link className="btn btn-primary" to='/Checkout'>Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
