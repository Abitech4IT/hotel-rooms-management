import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateRoom } from "../redux/actions/room";
import toast from "react-hot-toast";

function UpdateForm({ setOpenFormEdit, room }) {
  const [roomNumber, setRoomNumber] = useState(room && room.roomNumber);
  const [roomType, setRoomType] = useState(room && room.roomType);
  const [guest, setGuest] = useState(room && room.guest);
  const [price, setPrice] = useState(room && room.price);

  const dispatch = useDispatch();

  function handleUpdate(e) {
    e.preventDefault();
    if (!roomNumber || !roomType || !guest || !price) return;

    const newUpdatedRoom = {
      roomNumber,
      roomType,
      guest,
      price,
    };
    dispatch(updateRoom(room._id, newUpdatedRoom));
    toast.success("Room updated Successfully");

    setOpenFormEdit(false);
    window.location.reload(true);
  }

  return (
    <Form onSubmit={handleUpdate}>
      <Form.Group className="mb-3">
        <Form.Label>Room Number</Form.Label>
        <Form.Control
          type="number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(Number(e.target.value))}
          placeholder="Enter Room Number"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Room Type</Form.Label>
        <Form.Control
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          placeholder="Enter Room Number"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Guest</Form.Label>
        <Form.Control
          type="number"
          value={guest}
          onChange={(e) => setGuest(Number(e.target.value))}
          placeholder="Enter Room Guest Number"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Enter Room Price"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UpdateForm;
