import { createSlice } from '@reduxjs/toolkit';

export const joinLiveClassSlice = createSlice({
  name: 'joinLiveClass',
  initialState: {
    detail: {
      beginTime: '2021-4-5 10:00',
      classScheduleId: 0,
      endTime: '2021-4-5 11:00',
      isScheduled: true,
      liveStatus: 0,
      name: '初中一年级数学暑期班初中一年级数学暑期班',
      roomId: 1,
      scheduleType: 0,
      teacherId: 121212120,
      teacherName: '李东方',
    },
  },
  reducers: {
    initClassDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { initClassDetail } = joinLiveClassSlice.actions;

export const selectClassDetail = (state) => state.joinLiveClass.detail;

export default joinLiveClassSlice.reducer;
