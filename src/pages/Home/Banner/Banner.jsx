import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute h-full flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-12 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary capitalize mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary capitalize">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-5">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute h-full flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-12 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary capitalize mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary capitalize">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute h-full flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-12 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary capitalize mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary capitalize">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute h-full flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-12 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary capitalize mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary capitalize">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-lg" />
        <div className="absolute h-full flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-12 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary capitalize mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary capitalize">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-lg" />
        <div className="absolute h-full flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-12 space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary capitalize mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary capitalize">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-5">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
