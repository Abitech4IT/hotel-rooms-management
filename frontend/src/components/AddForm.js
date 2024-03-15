import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddForm({ onAddRoom }) {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("");
  const [guest, setGuest] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!roomNumber || !roomType || !guest || !price) return;

    const newRoom = { roomNumber, roomType, guest, price };
    console.log(newRoom);
    onAddRoom(newRoom);

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
