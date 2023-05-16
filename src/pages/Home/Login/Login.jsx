import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import img from "../../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);

        fetch(" https://car-doctor-server-bajlar.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            // warning: Local storage is not the best (second best place) to store access token
            localStorage.setItem("car-access-token", data.token);
            navigate(from, { replace: true });
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
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
            <h1 className="text-5xl font-semibold text-center">Login</h1>
            <form onSubmit={handleLogin}>
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
                  <span className="label-text">Password</span>
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
                  value="Sign In"
                />
              </div>
              <div className="text-center mt-7">
                <p>Or Sign In with</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="" className="btn btn-circle">
                    <FaFacebookF></FaFacebookF>
                  </a>
                  <a href="" className="btn btn-circle">
                    <FaLinkedinIn></FaLinkedinIn>
                  </a>
                  <button
                    onClick={handleGoogleSignIn}
                    href=""
                    className="btn btn-circle"
                  >
                    <FaGoogle></FaGoogle>
                  </button>
                </div>
                <p className="mt-4">
                  Have an account?
                  <Link to="/signUp">
                    <span className="text-[#FF3811]"> Sign In</span>
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

export default Login;
