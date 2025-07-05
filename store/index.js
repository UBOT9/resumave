import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from './slices/resumeSlice';

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        resume: resumeSlice,
    },
});

export default store;