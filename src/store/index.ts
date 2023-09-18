import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from 'store/reducer/count';
import authReducer from 'store/reducer/auth';

// react-logger
const logger = createLogger();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
