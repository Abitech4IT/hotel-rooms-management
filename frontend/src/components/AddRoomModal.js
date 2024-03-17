import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddForm from "./AddForm";

function AddRoomModal({ open, setOpen }) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm setOpen={setOpen} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddRoomModal;
