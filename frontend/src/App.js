import Container from "react-bootstrap/Container";
import RoomTable from "./components/RoomTable";
import AddRoomModal from "./components/AddRoomModal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import UpdateRoomModal from "./components/UpdateRoomModal";
import axios from "axios";
import { Toaster } from "react-hot-toast";

// const API_URL = "http://localhost:5000/api/v1/rooms"; --dev mode
const API_URL = "https://hotel-rooms-management.onrender.com/api/v1/rooms";

function App() {
  const [open, setOpen] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [room, setRoom] = useState();

  function handleOpen() {
    setOpen(true);
  }

  async function getRoom(id) {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        const data = res.data.room;
        console.log(data._id);
        setRoom(data);
        console.log(room);
      })
      .catch((error) => {
        console.log(error.res.message);
      });
  }

  function handleOpenUpdate(id) {
    getRoom(id);
    setOpenFormEdit(true);
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
        <RoomTable handleOpenUpdate={handleOpenUpdate} />
      </main>
      <AddRoomModal open={open} setOpen={setOpen} />
      <UpdateRoomModal
        openFormEdit={openFormEdit}
        setOpenFormEdit={setOpenFormEdit}
        room={room}
      />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptionss={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px, 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </Container>
  );
}

export default App;
