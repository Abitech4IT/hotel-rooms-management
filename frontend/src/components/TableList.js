import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom } from "../redux/actions/room";
import { useEffect } from "react";
import toast from "react-hot-toast";

function TableList({ data, index, handleOpenUpdate }) {
  const { error } = useSelector((state) => state.rooms);

  const dispatch = useDispatch();

  useEffect(
    function () {
      if (error) {
        toast.error(error);
      }
    },
    [error]
  );

  function handleDelete(id) {
    dispatch(deleteRoom(id));
    toast.success("Room deleted!");

    window.location.reload();
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.roomType}</td>
      <td>{data.roomNumber}</td>
      <td>{data.guest}</td>
      <td>{data.price}</td>
      <td>
        <Button
          variant="success"
          className="me-3"
          onClick={() => handleOpenUpdate(data._id)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDelete(data._id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TableList;
