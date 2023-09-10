import { createSlice, current } from "@reduxjs/toolkit";

// events inside reducers are the actions which are mapped to reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Vanilla Redux
    // MUTATE it every time
    // const newState = [...state]
    // newState = newState.push(action.payload)

    // In RTK DO NOT MUTATE it
    // It uses Immer.js
    // RTK says either mutate a state or return a new state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state)); // Used for debugging and see the actual object
      state.items.length = 0; // or return {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
