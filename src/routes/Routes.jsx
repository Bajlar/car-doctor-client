import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/book/:id",
        element: <PrivetRoute><BookService></BookService></PrivetRoute>,
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-bajlar.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;