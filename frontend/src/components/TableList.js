import Button from "react-bootstrap/Button";

function TableList({ data, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.roomType}</td>
      <td>{data.roomNumber}</td>
      <td>{data.guest}</td>
      <td>{data.price}</td>
      <td>
        <Button variant="success" className="me-3">
          Edit
        </Button>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
}

export default TableList;
