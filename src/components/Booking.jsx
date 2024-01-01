import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { makeBooking } from "../redux/actions";

const Booking = () => {

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length;

  const [bookingData, setBookingData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };
  const handleBook = (e) => {
    e.preventDefault();
    if(Object.keys(bookingData).length  === 5){// if there is 5 keys

      dispatch(makeBooking({...bookingData,id: size + 1}))
    } else{
        alert('please select data properly');

    }
  };

  console.log(bookingData);


  return (
    <div>
      <div className="md:mt-[160px] mr-[100px] mx-4 relative">
        <div className="bg-slate-300 rounded-md max-w-6xl w-full mx-auto">
          <form className="flex flex-col md:flex-row">
            {/* DESTINATION FROM*/}
            <div className="py-1.5 px-2.5 flex-1 border-right-r-2">
              <p> Destination From </p>
              <div className="flex flex-row">
                <select
                  required
                  onChange={(e) => handleChange(e)}
                  name="from"
                  id="from"
                  className="outline-none p-2 w-full"
                >
                  <option value="">Please Select</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Paris</option>
                  <option>Rome</option>
                </select>
              </div>
            </div>

            {/* DESTINATION TO  */}
            <div className="py-1.5 px-2.5 flex-1 border-right-r-2">
              <p> Destination to</p>
              <div className="flex flex-row">
                <select
                  name="to"
                  onChange={(e) => handleChange(e)}
                  id="to"
                  className="outline-none p-2 w-full"
                >
                  <option value="">Please Select</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Paris</option>
                  <option>Rome</option>
                </select>
              </div>
            </div>

            {/* date */}
            <div className="py-1.5 px-2.5 flex-1 border-right-r-2">
              <p>Journey Date</p>
              <input
                 onChange={(e) => handleChange(e)}
                type="date"
                name="date"
                required
                className="outline-none p-2 w-full"
              />
            </div>

            {/*Guests option */}

            <div className="py-1.5 px-2.5 flex-1 border-right-r-2">
              <p> Guests</p>
              <div className="flex flex-row">
                <select
                  required
                  name="guests"
                  onChange={(e) => handleChange(e)}
                  id="guests"
                  className="outline-none p-2 w-full"
                >
                  <option value="">Please Select</option>
                  <option>1 person</option>
                  <option>2 person</option>
                  <option>3 person</option>
                  <option>4 person</option>
                </select>
              </div>
            </div>

            {/* Trave Class */}
            <div className="py-1.5 px-2.5 flex-1 border-right-r-2">
              <p>Travel Class</p>
              <div className="flex flex-row">
                <select
                  required
                  name="ticketclassname"
                  id="ticket"
                  onChange={(e) => handleChange(e)}
                  className="outline-none p-2 w-full"
                >
                  <option value="">Please Select</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>


            <button
              onClick={(e) => {
                handleBook(e);
              }}
              type="submit"
              className="bg-indigo-500 text-white px-8 py-1 space-x-2 text-center flex items-center"
            >
              Book Now
            </button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
