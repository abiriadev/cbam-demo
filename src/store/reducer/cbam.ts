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
  const d_attr = state.direm;
  state.dse = d_attr / state.al;
  const d_ee = d_attr + state.prec * state.prec_dsee;
  state.dsee = d_ee / state.al;

  const i_attr = state.el;
  state.ise = i_attr / state.al;
  const i_ee = i_attr + state.prec * state.prec_isee;
  state.isee = i_ee / state.al;
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
    setPrecDsee(state, action: PayloadAction<number>) {
      state.prec_dsee = action.payload;

      recalcAll(state);
    },
    setPrecIsee(state, action: PayloadAction<number>) {
      state.prec_isee = action.payload;

      recalcAll(state);
    },
  },
});

export const {
  actions: { setDirem, setAl, setEl, setPrec, setPrecDsee, setPrecIsee },
  reducer,
} = cbamSlice;
