import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CbamState {
  direm: number;
  al: number;
  dse: number;
  dsee: number;
  ise: number;
  isee: number;
}

const initialState: CbamState = {
  direm: 0,
  al: 0,
  dse: 0,
  dsee: 0,
  ise: 0,
  isee: 0,
};

const cbamSlice = createSlice({
  name: 'cbam',
  initialState,
  reducers: {
    setDirem(state, action: PayloadAction<number>) {
      state.direm = action.payload;

      state.dse = state.direm / state.al;
      state.dsee = state.direm / state.al;
    },
    setAl(state, action: PayloadAction<number>) {
      state.al = action.payload;

      state.dse = state.direm / state.al;
      state.dsee = state.direm / state.al;
    },
  },
});

export const {
  actions: { setDirem, setAl },
  reducer,
} = cbamSlice;
