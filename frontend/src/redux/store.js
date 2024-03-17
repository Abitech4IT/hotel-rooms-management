import { configureStore } from "@reduxjs/toolkit";
import { roomReducer } from "./reducers/room";

const Store = configureStore({
  reducer: {
    rooms: roomReducer,
  },
});

export default Store;
