import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {deleteBooking} from "../redux/actions"
const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteBooking(parseInt(e.currentTarget.id)));
  };
  console.log(data)

  return (
    <>
    <div>
      {data.length && (
        <div className="max-w-6-xl mx-auto mt-5 bg-white">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Destination from</th>
                  <th>Destination to</th>
                  <th>Journey data</th>
                  <th>Guests</th>
                  <th>Travel Class</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {
                    data.map((data, index) => (
                        <tr key={index}>
                        <th>{data.from}</th>
                        <td>{data.to}</td>
                        <td>{data.date}</td>
                        <td>{data.guests}</td>
                        <td>{data.ticketclassname}</td>
                        <td><button className="btn-xs bg-red-500 text-white" id={`${data.id}`} onClick={(e) => handleDelete(e)}> <MdDelete /></button></td>
                      </tr>
                    ))
                }
         
             
          
             
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>

    </>
  );
};

export default Table;
