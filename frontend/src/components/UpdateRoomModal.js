import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UpdateForm from "./UpdateForm";

function UpdateRoomModal({ openFormEdit, setOpenFormEdit, room }) {
  function handleClose() {
    setOpenFormEdit(false);
  }

  return (
    <Modal show={openFormEdit} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateForm setOpenFormEdit={setOpenFormEdit} room={room} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateRoomModal;
