import { createSlice } from '@reduxjs/toolkit';

export const ToastSlice = createSlice({
  name: 'toast',
  initialState: {
    toast: '',
  },
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    closeToast: (state, action) => {
      state.toast = '';
    },
  },
});

export const { setToast, closeToast } = ToastSlice.actions;

export const selectToast = (state) => state.toast.toast;

export default ToastSlice.reducer;
