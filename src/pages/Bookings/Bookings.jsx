import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = ` https://car-doctor-server-bajlar.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          // logout and than navigate
          navigate('/');
        }
      });
  }, [url, navigate]);

  const handleDelete = (_id) => {
    // console.log("btn delete", _id);
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(` https://car-doctor-server-bajlar.vercel.app/bookings/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount === 1) {
            Swal.fire({
              title: "Success!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Ok",
            });
            const remaining = bookings.filter((booking) => booking._id !== _id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (_id) => {
    // console.log("btn confirm", _id);
    fetch(` https://car-doctor-server-bajlar.vercel.app/bookings/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify( {status: 'confirm'} )
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.modifiedCount === 1) {
          const remaining = bookings.filter(booking => booking._id !== _id);
          const updated = bookings.find((booking) => booking._id === _id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
    })
  }

  return (
    <div className="mb-12">
      {
        <p className="text-2xl text-center text-purple-700 font-semibold mb-5">
          Your bookings: {bookings.length}
        </p>
      }
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="font-medium text-2xl capitalize">Image $ Info</th>
              <th className="font-medium text-2xl capitalize">Service</th>
              <th className="font-medium text-2xl capitalize">Date</th>
              <th className="font-medium text-2xl capitalize">Price</th>
              <th className="font-medium text-2xl capitalize">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;