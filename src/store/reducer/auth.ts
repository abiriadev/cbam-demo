import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface LoginSuccessPayload {
  tokens: Tokens;
  userId: number;
  siteId: number;
  authorities: [];
}

export interface State {
  isLogin: boolean;
  tokens: Tokens | null;
  userId: number | null;
  siteId: number | null;
  authorities: string[];
}

const initialToken: Tokens = {
  accessToken: null,
  refreshToken: null,
};

const initialState: State = {
  isLogin: false,
  tokens: initialToken,
  userId: null,
  siteId: null,
  authorities: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state: State,
      action: PayloadAction<LoginSuccessPayload>,
    ) => {
      //Tokens x
      state.isLogin = true;
      state.tokens = action.payload.tokens;
      state.userId = action.payload.userId;
      state.siteId = action.payload.siteId;
      state.authorities = action.payload.authorities;
    },
    logoutSuccess: () => initialState,
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
