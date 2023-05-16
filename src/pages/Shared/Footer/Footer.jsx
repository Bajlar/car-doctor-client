import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content">
      <div>
        <img src={logo} alt="" />
        <p className="text-white">
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
      </div>
      <div className="text-white">
        <p className="text-white text-2xl font-bold mb-5">About</p>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div className="text-white">
        <p className="text-white text-2xl font-bold mb-5">Company</p>
        <a className="link link-hover">
          Why Car <br /> Doctor
        </a>
      </div>
      <div className="text-white">
        <p className="text-white text-2xl font-bold mb-5">Support</p>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;
