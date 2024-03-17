import Table from "react-bootstrap/Table";
import TableList from "./TableList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRooms } from "../redux/actions/room";
import LoadingSpinner from "./LoadingSpinner";

function RoomTable() {
  const { rooms, isLoading } = useSelector((state) => state.rooms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div className="mt-5">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Room Type</th>
              <th>Room Number</th>
              <th>Guest</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.map((data, index) => (
              <TableList data={data} index={index} key={data.roomType} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default RoomTable;
