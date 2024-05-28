import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    Fetchdone: false,
    Currentfetching: false,
  },
  reducers: {
    markfetchdone: (state) => {
      return state.Fetchdone = true;
    },
    markfetchingstarted: (state) => {
      return state.Currentfetching =true;
    },
    markfetchingfinished: (state) => {
      return state.Currentfetching = false;
    },
  },
});

export const fetchSliceaction = fetchSlice.actions;
export default fetchSlice;
