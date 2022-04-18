import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [service, setservic] = useState([]);
  useEffect(() => {
    fetch('Services.json')
      .then((res) => res.json())
      .then((datas) => setservic(datas));
  }, []);
  return (
    <div id="service" className="container">
      <h1>Our Services</h1>
      <div className="row">
        {service.map((res) => (
          <Service
            key={res.id}
            id={res.id}
            name={res.service_name}
            detail={res.service_data}
            price={res.price}
            img={res.img}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
