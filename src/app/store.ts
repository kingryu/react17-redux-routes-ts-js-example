import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/user/userSlice';
import toastReducer from 'features/toast/toastSlice';
import joinLiveClassReducer from '../pages/joinLive/model';

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    joinLiveClass: joinLiveClassReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

export interface GenericState<T> {
  data: T | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
