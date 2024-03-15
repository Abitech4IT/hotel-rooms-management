import Table from "react-bootstrap/Table";
import TableList from "./TableList";

function RoomTable({ roomList }) {
  return (
    <div className="mt-5">
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
          {roomList.map((data, index) => (
            <TableList data={data} index={index} key={data.roomType} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RoomTable;
