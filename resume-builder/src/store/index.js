import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from './slices/resumeSlice';

const store = configureStore({
  reducer: {
    resume: resumeSlice,
  },
});

export default store;