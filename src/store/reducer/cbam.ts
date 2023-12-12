import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CbamState {
  direm: number;
}

const initialState = { direm: 0 } as CbamState;

const cbamSlice = createSlice({
  name: 'cbam',
  initialState,
  reducers: {
    setDirem(state, action: PayloadAction<number>) {
      state.direm = action.payload;
    },
  },
});

export const { setDirem } = cbamSlice.actions;
export default cbamSlice.reducer;
