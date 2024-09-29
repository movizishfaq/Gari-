// src/features/cars/carSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar(state, action) {
      state.cars.push(action.payload);
    },
    carReset(state) {
      return initialState; // Reset to the initial state
    },
    addCarData(state, action) {
      // Implement your logic to add car data
      // For example, updating a specific car's data
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload; // Update the existing car data
      }
    },
  },
});

export const { addCar, carReset, addCarData } = carSlice.actions;
export default carSlice.reducer;
