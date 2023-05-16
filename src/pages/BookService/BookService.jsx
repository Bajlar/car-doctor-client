import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  // console.log("service--->", service);

  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const message = form.message.value;

    const booking = {
      customerName: name,
      date,
      email,
      message,
      img,
      service: title,
      price: price,
      service_id: _id
    }
    // console.log(booking);

    fetch(` https://car-doctor-server-bajlar.vercel.app/bookings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          // alert('service book successfully')
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
  };

  return (
    <div>
      <h2 className="text-3xl text-center mb-5">Book Service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="flex grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="amount"
              defaultValue={"$" + price}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control w-full">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              className="p-5"
            ></textarea>
          </div>
        </div>
        <div className="form-control my-6">
          <input
            className="btn btn-block capitalize"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;