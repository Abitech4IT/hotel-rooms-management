import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../redux/actions/room";

function AddForm({ setOpen }) {
  const { success, error } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("");
  const [guest, setGuest] = useState("");
  const [price, setPrice] = useState("");

  useEffect(
    function () {
      if (error) {
        console.log(error);
      }
      if (success) {
        console.log(success);
      }
    },
    [error, success]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!roomNumber || !roomType || !guest || !price) return;

    const newRoom = { roomNumber, roomType, guest, price };
    dispatch(createRoom(newRoom));
    setOpen(false);
    window.location.reload(true);

    setRoomNumber("");
    setRoomType("");
    setGuest("");
    setPrice("");
  }

  return (
    <Form onSubmit={handleSubmit}>
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

export default AddForm;
