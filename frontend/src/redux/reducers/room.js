const initialState = {
  rooms: [],
  isLoading: true,
  success: false,
  error: null,
};

export function roomReducer(state = initialState, action) {
  switch (action.type) {
    //Creating new room
    case "CreateRoomRequest":
      return { ...state, isLoading: true };
    case "CreateRoomSuccess":
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
        success: true,
      };
    case "CreateRoomFail":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false,
      };
    //get all rooms
    case "getAllRoomsRequest":
      return { ...state, isLoading: true };
    case "getAllRoomsSuccess":
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
        success: true,
      };
    case "getAllRoomsFailed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false,
      };
    //get a single room
    case "getRoomRequest":
      return { ...state, isLoading: true };
    case "getRoomSuccess":
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
        success: true,
      };
    case "getRoomFailed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false,
      };
    // update room
    case "updateRoomRequest":
      return { ...state, isLoading: true };
    case "updateRoomSuccess":
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
        success: true,
      };
    case "updateRoomFailed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false,
      };

    // delete room
    case "deleteRoomRequest":
      return { ...state, isLoading: true };
    case "deleteRoomSuccess":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "deleteRoomFailed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false,
      };

    case "clearErrors":
      return { ...state, error: null };
    default:
      return state;
  }
}
