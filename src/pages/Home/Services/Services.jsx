import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-bajlar.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [])

  return (
    <div className="my-5">
      <div className="text-center">
        <h3 className="text-[#FF3811] font-bold mt-5">Service</h3>
        <h2 className="text-4xl font-bold my-5">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 p-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn btn-outline btn-secondary capitalize">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;