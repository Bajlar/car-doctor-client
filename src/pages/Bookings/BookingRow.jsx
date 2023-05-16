const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  // console.log(booking);
  const { _id, customerName, date, img, email, price, service, status } =
    booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-60 h-28">
              {img && (
                <img
                  src={img}
                  className="rounded-md"
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-80">{email}</div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>
        <span className="text-orange-600 font-bold">$</span> {price}
      </td>
      <th>
        {status === "confirm" ? (
          <span className="text-purple-600 font-bold text-lg">Confirm</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-outline btn-secondary capitalize"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;