import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from './reducer/count';
import authReducer from './reducer/auth';
import { reducer } from './reducer/cbam';

// react-logger
const logger = createLogger();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cbam: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
