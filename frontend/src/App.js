import Container from "react-bootstrap/Container";
import RoomTable from "./components/RoomTable";
import AddRoomModal from "./components/AddRoomModal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
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
        <RoomTable />
      </main>
      <AddRoomModal open={open} setOpen={setOpen} />
    </Container>
  );
}

export default App;
