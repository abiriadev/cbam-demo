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
  prec: number;
  prec_dsee: number;
  prec_isee: number;
}

const initialState: CbamState = {
  direm: 0,
  al: 0,
  el: 0,
  dse: 0,
  dsee: 0,
  ise: 0,
  isee: 0,
  prec: 0,
  prec_dsee: 0,
  prec_isee: 0,
};

const recalcAll = (state: Draft<CbamState>): void => {
  state.dse = state.direm / state.al;
  state.dsee = state.dse + state.prec * state.prec_dsee;

  state.ise = state.el / state.al;
  state.isee = state.ise + state.prec * state.prec_isee;
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
      state.el = action.payload;

      recalcAll(state);
    },
    setPrec(state, action: PayloadAction<number>) {
      state.prec = action.payload;

      recalcAll(state);
    },
  },
});

export const {
  actions: { setDirem, setAl, setEl, setPrec },
  reducer,
} = cbamSlice;
