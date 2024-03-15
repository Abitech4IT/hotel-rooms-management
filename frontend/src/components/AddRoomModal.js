import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddForm from "./AddForm";

function AddRoomModal({ open, setOpen, onAddRoom }) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm onAddRoom={onAddRoom} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Add Room
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddRoomModal;
