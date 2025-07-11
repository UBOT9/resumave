import { createSlice } from '@reduxjs/toolkit';

const defaultResume = {
  contact: {
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    portfolio: '',
  },
  summary: {
    summary: '',
  },
  education: [],
  experience: [],
  projects: [],
  skills: {
    skills: '',
  },
  certificates: [],
  languages: [],
  saved: false,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState: defaultResume,
  reducers: {
    updateResumeValue: (state, action) => {
      const { tab, name, value, index } = action.payload;
      if (index != null) {
        if (!state[tab][index]) {
          state[tab][index] = {};
        }
        state[tab][index][name] = value;
      } else {
        state[tab][name] = value;
      }
      state.saved = false;
    },
    addNewIndex: (state, action) => {
      const { tab } = action.payload;
      state[tab].push({});
      state.saved = false;
    },
    deleteIndex: (state, action) => {
      const { index, tab } = action.payload;
      state[tab].splice(index, 1);
      state.saved = false;
    },
    moveIndex: (state, action) => {
      const { index, tab, dir } = action.payload;
      const newIndex = dir === 'up' ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < state[tab].length) {
        const temp = state[tab][index];
        state[tab][index] = state[tab][newIndex];
        state[tab][newIndex] = temp;
      }
      state.saved = false;
    },
    saveResume: (state) => {
      state.saved = true;
    },
  },
});

export const { updateResumeValue, addNewIndex, deleteIndex, saveResume, moveIndex } = resumeSlice.actions;
export default resumeSlice.reducer;