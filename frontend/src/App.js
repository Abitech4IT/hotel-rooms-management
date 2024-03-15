import Container from "react-bootstrap/Container";
import RoomTable from "./components/RoomTable";
import AddRoomModal from "./components/AddRoomModal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const initialroomList = [
  {
    roomType: "Lodge",
    roomNumber: 101,
    guest: 5,
    price: 1500,
  },
  {
    roomType: "Continental",
    roomNumber: 102,
    guest: 7,
    price: 2000,
  },
  {
    roomType: "Boutique",
    roomNumber: 201,
    guest: 8,
    price: 2500,
  },
  {
    roomType: "Resort",
    roomNumber: 203,
    guest: 10,
    price: 3500,
  },
];

function App() {
  const [rooms, setRooms] = useState(initialroomList);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleAddRoom(room) {
    setRooms((rooms) => [...rooms, room]);
    setOpen(false);
  }

  return (
    <Container>
      <header className="text-bg-secondary my-5 py-3">
        <h3 className="text-center">Hotel Rooms Management System</h3>
      </header>
      <span className="float-end mb-3">
        <Button variant="primary" onClick={handleOpen}>
          Add Room
        </Button>
      </span>

      <main>
        <RoomTable roomList={rooms} />
      </main>
      <AddRoomModal open={open} setOpen={setOpen} onAddRoom={handleAddRoom} />
    </Container>
  );
}

export default App;
