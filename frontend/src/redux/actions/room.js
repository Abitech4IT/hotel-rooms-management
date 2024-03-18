import axios from "axios";
// const API_URL = "http://localhost:5000/api/v1/rooms"; dev mode
const API_URL = "https://hotel-rooms-management.onrender.com/api/v1/rooms";

// create-room
export const createRoom = (newRoom) => async (dispatch) => {
  try {
    dispatch({
      type: "CreateRoomRequest",
    });
    // const config = { headers: { "Content-Type": "application/json" } };
    // const data = await fetch(`${API_URL}`, {
    //   method: "POST",
    //   body: JSON.stringify(newRoom),
    //   config,
    // });

    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.post(`${API_URL}`, newRoom, config);
    dispatch({
      type: "CreateRoomSuccess",
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: "CreateRoomFail",
      payload: error,
    });
  }
};

// get all rooms

export const getAllRooms = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllRoomsRequest",
    });
    const { data } = await axios.get(`${API_URL}`);
    dispatch({
      type: "getAllRoomsSuccess",
      payload: data.rooms,
    });
  } catch (error) {
    dispatch({
      type: "getAllRoomsFailed",
      payload: error,
    });
  }
};

//get a single room

export const getRoom = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getRoomRequest",
    });
    const { data } = await axios.get(`${API_URL}/${id}`);
    dispatch({
      type: "getRoomSuccess",
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: "getRoomFailed",
      payload: error,
    });
  }
};

//update a room
export const updateRoom = (id, updatedRoom) => async (dispatch) => {
  try {
    dispatch({
      type: "updateRoomRequest",
    });
    const { data } = await axios.put(`${API_URL}/${id}`, updatedRoom);
    dispatch({
      type: "updateRoomSuccess",
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: "updateRoomFailed",
      payload: error,
    });
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteRoomRequest",
    });
    const { data } = await axios.delete(`${API_URL}/${id}`);
    dispatch({
      type: "deleteRoomSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteRoomFailed",
      payload: error,
    });
  }
};
