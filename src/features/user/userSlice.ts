import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getUser } from 'api/class.test.com';
import type { RootState, GenericState } from 'app/store';
export interface User {
  userId: number;
  username: string;
  nickname: string | null;
  avatar: string;
  orgId: number;
  orgCode: string;
  orgName: string;
  isTeacher: boolean;
  mobile: string | null;
  mobileBindStatus: 'Binded' | 'Mandatory ' | 'NoRequired' | 'NoSupport';
  hasSetPassword: boolean;
}

const initialState: GenericState<User> = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', getUser);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    nicknameUpdated(state, action: PayloadAction<string>) {
      if (state.data) state.data.nickname = action.payload;
    },
    avatarUpdated(state, action: PayloadAction<string>) {
      if (state.data) state.data.avatar = action.payload;
    },
    passwordSet(state) {
      if (state.data) state.data.hasSetPassword = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const {
  nicknameUpdated,
  avatarUpdated,
  passwordSet,
} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
