import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CbamState {
  direm: number;
  al: number;
}

const initialState = { direm: 0, al: 0 } as CbamState;

const cbamSlice = createSlice({
  name: 'cbam',
  initialState,
  reducers: {
    setDirem(state, action: PayloadAction<number>) {
      state.direm = action.payload;
    },
    setAl(state, action: PayloadAction<number>) {
      state.al = action.payload;
    },
  },
});

export const {
  actions: { setDirem },
  reducer,
} = cbamSlice;
