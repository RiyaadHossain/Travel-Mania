import React, { useEffect, useState } from "react";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";

const Services = () => {
  const [services, SetServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => SetServices(json));
  }, []);

  return (
    <div className=" container mx-auto my-20">
      <h1 className="text-center text-4xl font-semibold mb-10">
        Our <span className="text-red-600">Destination</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceDetails key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
