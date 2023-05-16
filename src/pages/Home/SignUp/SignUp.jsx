import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import img from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, googleSignUp } = useContext(AuthContext);
  
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
      console.log(error);
    })
  };

  // google sing in
  const handleGoogleSignIn = () => {
    // console.log('google button click');
    googleSignUp()
      .then((result) => {
        const googleSign = result.user;
        console.log(googleSign);
        if (googleSign) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
    
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-16">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-semibold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary capitalize"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="text-center mt-7">
                <p>Or Sign Up with</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="" className="btn btn-circle">
                    <FaFacebookF></FaFacebookF>
                  </a>
                  <a href="" className="btn btn-circle">
                    <FaLinkedinIn></FaLinkedinIn>
                  </a>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-circle"
                  >
                    <FaGoogle></FaGoogle>
                  </button>
                </div>
                <p className="mt-4">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-[#FF3811]"> Login</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;