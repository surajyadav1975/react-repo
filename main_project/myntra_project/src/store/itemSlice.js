import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addinitialitems: (store, action) => {
      return action.payload;
    },
  },
});

export const itemSliceaction = itemSlice.actions;
export default itemSlice;
