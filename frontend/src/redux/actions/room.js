import axios from "axios";
const API_URL = "http://localhost:5000/api/v1/rooms";

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
