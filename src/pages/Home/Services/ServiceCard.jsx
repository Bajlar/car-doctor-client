import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { _id, img, price, title } = service;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div className="flex justify-between">
          <p className="text-[#FF3811] font-semibold">Price: ${price}</p>
          <div className="text-[#FF3811]">
            <Link to={`/book/${_id}`}>
              <FaArrowRight></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
