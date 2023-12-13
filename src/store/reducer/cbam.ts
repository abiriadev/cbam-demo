import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Draft } from 'immer';

interface CbamState {
  direm: number;
  al: number;
  el: number;
  dse: number;
  dsee: number;
  ise: number;
  isee: number;
}

const initialState: CbamState = {
  direm: 0,
  al: 0,
  el: 0,
  dse: 0,
  dsee: 0,
  ise: 0,
  isee: 0,
};

const recalcAll = (state: Draft<CbamState>): void => {
  state.dse = state.direm / state.al;
  state.dsee = state.direm / state.al;
};

const cbamSlice = createSlice({
  name: 'cbam',
  initialState,
  reducers: {
    setDirem(state, action: PayloadAction<number>) {
      state.direm = action.payload;

      recalcAll(state);
    },
    setAl(state, action: PayloadAction<number>) {
      state.al = action.payload;

      recalcAll(state);
    },
    setEl(state, action: PayloadAction<number>) {
      state.al = action.payload;

      recalcAll(state);
    },
  },
});

export const {
  actions: { setDirem, setAl, setEl },
  reducer,
} = cbamSlice;
